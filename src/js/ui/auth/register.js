import { register } from "../../api/auth/register";
import { emailCheck, pswCheck, namecheck } from "../../utilities/regex";

export async function onRegister(event) {
  event.preventDefault();
  console.log(event);

  const form = event.target;
  console.log(form);
  const name = form.name.value;
  const email = form.email.value;
  const password = form.password.value;

  if (!emailCheck(email) || !pswCheck(password) || !namecheck(name)) {
    return;
  }

  const formData = {
    name,
    email,
    password,
  };

  console.log(formData);

    try {
      // Kall register-funksjonen (husk å implementere den riktig)
      const result = await register(formData);

      alert("Registration successful!");
      console.log("Registration data:", result);

      // window.location.href = '/welcome';
    } catch (error) {
      console.error("Registration failed:", error);
      alert("Registration failed. Please try again.");
    }
}
