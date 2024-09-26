// import { onLogout } from "../ui/auth/logout";
import { getUserInfo } from "../utilities/userInfo";

const user = getUserInfo();
const meny = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "New Post",
    url: "/post/create/",
  },
  {
    name: "My Profile",
    url: `/profile/?name=${user.name}`,
  },
  {
    name: "Login",
    url: "/auth/login/",
  },
  {
    name: "Register",
    url: "/auth/register/",
  },
];

export default function navbar() {
  const nav = document.createElement("nav");
  nav.classList.add("navbar");

  const branding = document.createElement("div");
  branding.classList.add("branding");

  const menu = document.createElement("div");
  menu.classList.add("menu");

  meny.map((item) => {
    const atag = document.createElement("a");
    atag.href = item.url;
    atag.innerText = item.name;

    menu.append(atag);
  });

  // if (user) {
  //   const logout = document.createElement("button");
  //   logout.innerText = "Logout";
  //   logout.addEventListener("click", onLogout)
  //   menu.append(logout);
  // }

  nav.append(branding, menu);

  document.body.prepend(nav);
}
