import { readPost, readPosts } from "../../api/post/read";
import { authGuard } from "../../utilities/authGuard";
import { getUserInfo } from "../../utilities/userinfo";
// kan refactore til funk om tiden strekker til. ink actions div.
authGuard();

const userInfo = getUserInfo();
const name = userInfo.name;

document.querySelector(".welcomeUser").innerHTML = name || "Annonymus";

const Allposts = await readPosts();
console.log(Allposts);

if (Allposts) {
  Allposts.map((post) => {
    const article = document.createElement("article");

    const userInfoDiv = document.createElement("div");
    userInfoDiv.className = "user-Info";

    const author = document.createElement("p");
    author.innerText = post.author.name;

    const articleBody = document.createElement("div");
    articleBody.className = "article-Body";

    const articleTitle = document.createElement("h2");
    articleTitle.innerText = post.title;
    const articleText = document.createElement("p");
    articleText.innerText = post.body;

    const articleTags = document.createElement("p");
    articleTags.className = "tags";
    post.tags.map((tag) => {
      const tagSpan = document.createElement("span");
      tagSpan.innerText = tag;
      articleTags.append(tagSpan);
    });

    const articleImg = document.createElement("img");
    articleImg.src = post.media.url;
    articleImg.alt = post.media.alt || "Post image";

    const articlebtn = document.createElement("button");
    articlebtn.innerText = "Read Post";
    articlebtn.addEventListener("click", () => {
      window.location.href = `/post/single-post/?id=${post.id}`;
    });

    userInfoDiv.append(author);
    articleBody.append(
      articleTitle,
      articleText,
      articleTags,
      articleImg,
      articlebtn
    );
    article.append(userInfoDiv, articleBody);
    document.querySelector(".posts").append(article);
  });
}
