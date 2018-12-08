export const getItem = key => {
  return localStorage.getItem(key);
};

export const setItem = (key, val) => {
  return localStorage.setItem(key, val);
};

/**
 * 是否有长效 token
 */
export const hasToken = () => {
  return !!getItem('token');
};
