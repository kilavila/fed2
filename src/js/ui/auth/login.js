//ts-check
import { login } from "../../api/auth/login";

/**
 * @function emailCheck
 * @param {string} email
 * @returns {boolean}
 */
function emailCheck(email) {
  console.log(email);
  const emailRegex = /[^@]*@stud\.noroff\.no/g;
  let emailMatch = emailRegex.test(email);

  console.log(emailMatch);

  if (!emailMatch) {
    alert("Epost ikke gylding, må være en stud.noroff.no epost");
    return false;
  }
  return true;
}
/**
 * @function pswCheck
 * @param {string} password
 * @returns {boolean}
 */
function pswCheck(password) {
  const pswRegex = /[a-zA-Z0-9]{8,20}/g;
  let pswMatch = pswRegex.test(password);
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

  const form = event.target;
  const email = form[0].value;
  const password = form[1].value;

  if (!emailCheck(email) || !pswCheck(password)) {
    return;
  }

  const data = await login({ email, password });
  console.log(data);

  localStorage.setItem("token", data.accessToken);

  window.location.href = "/";
}
 //TODO: Hente ut brukerdata.