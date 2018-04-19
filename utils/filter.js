const isNull = value => Object.is(value, null);

const filter = data => {
  if (typeof data === 'object' && !isNull(data)) {
    const setNullToUndefined = temp => {
      Object.keys(temp).forEach(name => {
        if (temp[name] === '') {
          temp[name] = undefined;
        }
        if (typeof temp[name] === 'object') {
          if (isNull(temp[name])) {
            temp[name] = undefined;
          } else {
            setNullToUndefined(temp[name]);
          }
        }
      });
    };
    setNullToUndefined(data);
  }
  return data;
};

export default filter;
