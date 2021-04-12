export const getRandomNum = (min, max) => {
  const ret = Math.floor(Math.random() * (max - min + 1)) + min;
  return ret;
};