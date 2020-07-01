export const setUser = (userObj) => ({
  type: 'SET_USER',
  payload: userObj,
});

export const logOut = () => ({
  type: 'LOG_OUT',
});
