export default function navbar() {
  const nav = document.createElement("nav");
  nav.classList.add("navbar");

  const branding = document.createElement("div");
  branding.classList.add("branding");

  const menu = document.createElement("div");
  menu.classList.add("menu");

  const homeUrl = document.createElement("a");
  homeUrl.href = "/";
  homeUrl.innerText = "Home";

  const newPost = document.createElement("a");
  newPost.href = "/post/create/";
  newPost.innerText = "New Post";

  menu.append(homeUrl, newPost);
  nav.append(branding, menu);

  document.body.prepend(nav);
}
