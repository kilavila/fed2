import { getUserInfo } from "../utilities/userinfo";

const user = getUserInfo();
console.log(user);

const menuItems = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "New Post",
    url: "/post/create/",
  },
  {
    name: "Login",
    url: "/auth/login/",
  },
  {
    name: "Register",
    url: "/auth/register/",
  },
  {
    name: "My Profile",
    url: `/profile/?name=${user.name}`,
  },
];

export default function navbar() {
  const nav = document.createElement("nav");
  nav.classList.add("navbar");

  const branding = document.createElement("div");
  branding.classList.add("branding");

  const menu = document.createElement("div");
  menu.classList.add("menu");

  menuItems.map((item) => {
    const atag = document.createElement("a");
    atag.href = item.url;
    atag.innerText = item.name;

    menu.append(atag);
  });
  nav.append(branding, menu);

  document.body.prepend(nav);
}
