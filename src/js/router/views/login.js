import { onLogin } from "../../ui/auth/login";
/* dette er scriptet som kjører når du laster log in page.*/
const form = document.forms.login;

form.addEventListener("submit", onLogin);
