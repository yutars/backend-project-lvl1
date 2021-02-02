export const getRandomNum = (min, max) => {
  const ret = Math.floor(Math.random() * (max - min + 1)) + min;
  return ret;
};
export const getRndNum = (num) => {
  const ret = Math.floor(Math.random() * Math.floor(num));
  return ret;
};
