import { authGuard } from "../../utilities/authGuard";
import { getUserInfo } from "../../utilities/userinfo";

authGuard();

const userInfo = getUserInfo();
console.log("userInfo", userInfo);

const name = userInfo.name;
const email = userInfo.email;
console.log(name, email);

document.querySelector(".welcomeUser").innerHTML = name || "Annonymus";

