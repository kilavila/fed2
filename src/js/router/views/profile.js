import { authGuard } from "../../utilities/authGuard";
import { getUserInfo } from "../../utilities/userinfo";
authGuard();

const userInfo = getUserInfo();
const name = userInfo.name;

// if (Allposts) {
//   Allposts.map((post) => {
//     const article = document.createElement("article");

//     const userInfoDiv = document.createElement("div");
//     userInfoDiv.className = "user-Info";

//     const author = document.createElement("p");
//     author.innerText = post.author.name;

//     const articleBody = document.createElement("div");
//     articleBody.className = "article-Body";

//     const articleTitle = document.createElement("h2");
//     articleTitle.innerText = post.title;
//     const articleText = document.createElement("p");
//     articleText.innerText = post.body;

//     const articleTags = document.createElement("p");
//     articleTags.className = "tags";
//     post.tags.map((tag) => {
//       const tagSpan = document.createElement("span");
//       tagSpan.innerText = tag;
//       articleTags.append(tagSpan);
//     });

//     const img = document.createElement("img");
//     if (post.media && post.media.url) {
//       img.src = post.media.url;
//       img.alt = post.media.alt || "Post image";
//     }

//     const articlebtn = document.createElement("button");
//     articlebtn.innerText = "Read Post";
//     articlebtn.addEventListener("click", () => {
//       window.location.href = `/post/single-post/?id=${post.id}`;
//     });

//     userInfoDiv.append(author);
//     articleBody.append(articleTitle, articleText, articleTags, img, articlebtn);
//     article.append(userInfoDiv, articleBody);
//     document.querySelector(".posts").append(article);
//   });
// }
