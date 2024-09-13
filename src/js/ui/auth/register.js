// @ts-check

import { register } from "../../api/auth/register";
import { emailCheck, pswCheck, namecheck } from "../../utilities/regex";
/**
 * @function onRegister
 * @param {SubmitEvent} event
 */
export async function onRegister(event) {
  event.preventDefault();
  console.log(event);

  const form = event.target;
  const name = form ? form[0].value : "";
  const email = form ? form[1].value : "";
  const password = form ? form[2].value : "";

  console.log(email);

  if (!emailCheck(email) || !pswCheck(password) || !namecheck(name)) {
    return;
  }
  /**
   * @type {Object} formData
   * @property {string} name
   * @property {string} email
   * @property {string} password
   */
  const formData = {
    name,
    email,
    password,
  };

  console.log(formData);

  const result = await register(formData);

  alert("Registration successful!");
  console.log("Registration data:", result);

  window.location.href = "/auth/login/";
}
