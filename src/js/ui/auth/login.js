// @ts-check

import { login } from "../../api/auth/login";

/**
 * @function emailCheck
 * @param {FormDataEntryValue | null} email
 * @returns {boolean}
 */
function emailCheck(email) {
  console.log(email);
  const emailRegex = /[^@]*@stud\.noroff\.no/g;
  let emailMatch = emailRegex.exec(email);

  console.log(emailMatch);

  if (!emailMatch) {
    alert("Epost ikke gylding, må være en stud.noroff.no epost");
    return false;
  }
  return true;
}
/**
 * @function pswCheck
 * @param {FormDataEntryValue | null} password
 * @returns {boolean}
 */
function pswCheck(password) {
  const pswRegex = /[a-zA-Z0-9]{8,20}/g;
  let pswMatch = pswRegex.exec(password);
  if (!pswMatch) {
    alert("Passord ikke gylding, må være minst 8 tegn");
    return false;
  }
  return true;
}
/**
 * @function onLogin
 * @param {SubmitEvent} event
 */
export async function onLogin(event) {
  event.preventDefault();
  //@ts-ignore
  const formData = new FormData(event.target);
  const email = formData.get("email");
  const password = formData.get("password");

  if (!emailCheck(email) || !pswCheck(password)) {
    return;
  }

  const data = await login({ email, password });
  console.log(data);

  localStorage.setItem("token", data.accessToken);

  window.location.href = "/";
}
