import { register } from "../../api/auth/register";

export async function onRegister(event) {
  event.preventDefault();

  const form = event.target;

  const name = form.name.value;
  const email = form.email.value;
  const password = form.password.value;
  const nameRegex = /^[a-zA-Z\s]*$/;
  const emailRegex = /[^@]*@stud\.noroff\.no/g;
  const pswRegex = /[a-zA-Z0-9]{8,20}/g;

  if (!nameRegex.test(name)) {
    alert("Navn ikke gylding, må være et ord");
    return;
  }
  if (!emailRegex.test(email)) {
    alert("Epost ikke gylding, må være en stud.noroff.no epost");
    return;
  }
  if (!pswRegex.test(password)) {
    alert("Passord ikke gylding, må være minst 8 tegn");
    return;
  }

  if (!name || !email || !password) {
    alert("Alle felter er obligatoriske");
    return;
  }

  const formData = {
    name,
    email,
    password,
  };

  try {
    // Kall register-funksjonen (husk å implementere den riktig)
    const result = await register(formData);

    alert("Registration successful!");
    console.log("Registration data:", result);

    // window.location.href = '/welcome';
  } catch (error) {
    // Håndter feil (f.eks. vise en feilmelding)
    console.error("Registration failed:", error);
    alert("Registration failed. Please try again.");
  }
}
