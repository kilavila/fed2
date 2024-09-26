import { readPosts } from "../../api/post/read";
import { authGuard } from "../../utilities/authGuard";
import { getUserInfo } from "../../utilities/userInfo";
import createPostCards from "../../utilities/post-card";

async function home() {
  authGuard();

  const userInfo = getUserInfo();
  const name = userInfo.name;

  console.log("Name: " + name);

  document.querySelector(".welcomeUser").innerHTML = name || "Annonymus";

  const Allposts = await readPosts();

  const articles = createPostCards(Allposts, false);

  const postsDiv = document.querySelector(".posts");
  postsDiv.append(articles);

  console.log("Loaded page: Home");
}

export default home;
