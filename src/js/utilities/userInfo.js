export function getUserInfo() {
  const storeduserInfo = localStorage.getItem("userInfo");
  return storeduserInfo ? JSON.parse(storeduserInfo) : null;
}

export function clearUserInfo() {
  localStorage.removeItem("token");
  localStorage.removeItem("userInfo");
}

export function isUserLoggedIn() {
  return !!localStorage.getItem("userInfo");
}
