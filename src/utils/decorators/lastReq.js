import { decorate, invokedWithArgs } from "./util";
import { action, extendObservable } from "mobx";
function getDecorator(withArgs, lockName) {
  return (target, key, descriptor) => {
    if (!withArgs) {
      lockName = `__${Math.random()
        .toString(32)
        .slice(2, 8)}`;
    }
    const fn = descriptor.value;

    if (withArgs && !target.hasOwnProperty(lockName)) {
      extendObservable(target, {
        [lockName]: false
      });
    }

    let count = 0;

    return {
      ...descriptor,
      /**
       * @param params { * }
       * @return {undefined | Promise}
       */
      @action
      value(...params) {
        let result = fn.apply(this, [...params]);
        if (result instanceof Promise) {
          count = count + 1;
          let executeCount = count;
          action(`${lockName}-lock`, () => {
            this[lockName] = true;
          })();
          return result
            .then(
              action(`${lockName}-unlock`, res => {
                if (executeCount === count) {
                  this[lockName] = false;
                  return Promise.resolve(res);
                } else {
                  return Promise.resolve(
                    Object.assign({}, res, {
                      outOfDate: true
                    })
                  );
                }
              })
            )
            .catch(
              action(`${lockName}-unlock`, e => {
                if (executeCount === count) {
                  this[lockName] = false;
                }
                return Promise.reject(e);
              })
            );
        } else {
          return result;
        }
      }
    };
  };
}

export const lastReq = function(lockName) {
  const withArgs = invokedWithArgs(arguments);
  const decorator = getDecorator(withArgs, lockName);
  return decorate(withArgs, decorator, arguments);
};
