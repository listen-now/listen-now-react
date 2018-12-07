export const getItem = key => {
  return localStorage.getItem(key);
};

export const setItem = (key, val) => {
  return localStorage.setItem(key, val);
};
