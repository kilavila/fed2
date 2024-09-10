import { login } from "../../api/auth/login";

export async function onLogin(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const email = formData.get("email");
  const password = formData.get("password");
  console.log(email, password);

  const data = await login({ email, password });
  //TODO: lagre data til bruker informasjon, endten i local storage eller hente ned hver gng du laster inn en side.

  console.log(data);
}
