import { authGuard } from "../../utilities/authGuard";
import { getUserInfo } from "../../utilities/userinfo";
import { readProfile } from "../../api/profile/read";
authGuard();

const userInfo = getUserInfo();
const username = userInfo.name;
async function displayUserProfile(username) {
  const userProfile = await readProfile(username);
  console.log(userProfile);
  //! ville tatt profil i en funk og poster i annen.
  if (userProfile) {
    const profileName = userProfile.name || "Anonymous";
    const avatar = userProfile.avatar || "default-avatar.png";
    const profile = document.querySelector(".profile");

    const profilName = document.createElement("p");
    profilName.innerText = profileName;

    const avatarImg = document.createElement("img");
    avatarImg.src = avatar;

    profile.append(profilName, avatarImg);

    const userPosts = userProfile.posts;

    if (userPosts && userPosts.length > 0) {
      userPosts.map((post) => {
        const article = document.createElement("article");

        const userInfoDiv = document.createElement("div");
        userInfoDiv.className = "user-Info";

        const author = document.createElement("p");
        author.innerText = profileName;

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

        let img;
        if (post.media && post.media.url) {
          img = document.createElement("img");
          img.src = post.media.url;
          img.alt = post.media.alt || "Post image";
        }

        const articlebtn = document.createElement("button");
        articlebtn.innerText = "Read Post";
        articlebtn.addEventListener("click", () => {
          window.location.href = `/post/single-post/?id=${post.id}`;
        });

        userInfoDiv.append(author);
        articleBody.append(articleTitle, articleText, articleTags, articlebtn);

        if (img) articleBody.append(img);
        article.append(userInfoDiv, articleBody);
        document.querySelector(".posts").append(article);
      });
    } else {
      const postsContainer = document.querySelector(".posts");
      postsContainer.innerText = "This user has no posts yet.";
    }
  } else {
    document.querySelector(".user-name").innerText = "User not found";
  }
}

displayUserProfile(username);
