// @ts-check

import { register } from "../../api/auth/register";
import { emailCheck, pswCheck, namecheck } from "../../utilities/regex";
//! Gjør om form value.
/**
 * @function onRegister
 * @param {SubmitEvent} event
 */
export async function onRegister(event) {
  event.preventDefault();
  console.log(event);

  const form = event.target;
  const emailForm = form ? form[0].value : "";
  const passwordForm = form ? form[1].value : "";
  const nameForm = form ? form[2].value : "";

  if (!emailForm || !passwordForm || !nameForm) {
    console.error("Ett eller flere skjemaelementer ble ikke funnet");
    return;
  }

  // Logg skjemaelementene
  console.log(emailForm.value, passwordForm.value, nameForm.value);

  // Sjekk valideringsfunksjoner
  if (!emailCheck(emailForm.value)) {
    console.error("Ugyldig e-post");
    return;
  }
  if (!pswCheck(passwordForm.value)) {
    console.error("Ugyldig passord");
    return;
  }
  if (!namecheck(nameForm.value)) {
    console.error("Ugyldig navn");
    return;
  }

  // Hvis alle valideringene er bestått
  console.log("Registreringen er vellykket!");
}
// console.log(emailForm, passwordForm, nameForm);
// if(!emailCheck(emailForm.value) || !pswCheck(passwordForm.value) || !namecheck(nameForm.value)) {
//   return;
// }
// // const name = form.name.value;
// // const email = form.email.value;
// // const password = form.password.value;

// if (!emailCheck(email) || !pswCheck(password) || !namecheck(name)) {
//   return;
// }

// const formData = {
//   name,
//   email,
//   password,
// };

//   console.log(formData);

// try {
//     // Kall register-funksjonen (husk å implementere den riktig)
//     const result = await register(formData);

//     alert("Registration successful!");
//     console.log("Registration data:", result);

//     // window.location.href = '/welcome';
//   } catch (error) {
//     console.error("Registration failed:", error);
//     alert("Registration failed. Please try again.");
//   }
// }
