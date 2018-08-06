export const randomStr = (length = 6) =>
  Math.random()
    .toString(32)
    .slice(length);