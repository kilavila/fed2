export function onLogout(event) {
  event.preventDefault();
  localStorage.removeItem("token");
  localStorage.removeItem("userInfo");
  window.location.href = "/auth/login/";
}
