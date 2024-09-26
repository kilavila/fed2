import { onDeletePost } from "../ui/post/delete";

export default function createPostCards(userPosts, isAuthorized) {

  console.log("Creating article cards");

  const articlesContainer = document.createElement("div");
  articlesContainer.className = "articles-container";

  userPosts.map((post) => {
    const articleContainer = document.createElement("div");
    articleContainer.className = "article-Container";

    const userInfoDiv = document.createElement("div");
    userInfoDiv.className = "user-Info";

    if (post.author) {
      const author = document.createElement("a");
      author.href = `/profile/?name=${post.author.name}`;
      author.innerText = post.author.name;
      userInfoDiv.append(author);
    }

    const articleBody = document.createElement("div");
    articleBody.className = "article-Body";

    const articleTitle = document.createElement("h2");
    articleTitle.innerText = post.title;
    articleBody.append(articleTitle);

    const articleText = document.createElement("p");
    articleText.innerText = post.body;
    articleBody.append(articleText);

    const articleTags = document.createElement("p");
    articleTags.className = "tags";
    post.tags.map((tag) => {
      const tagSpan = document.createElement("span");
      tagSpan.innerText = tag;
      articleTags.append(tagSpan);
    });
    articleBody.append(articleTags);

    const dateDiv = document.createElement("div");
    dateDiv.className = "post-date";

    const date = new Date(post.created);
    dateDiv.innerText = `Posted on: ${date.toLocaleDateString()}`;

    articleBody.append(dateDiv);

    if (post.media && post.media.url) {
      const mediaDiv = document.createElement("div");
      mediaDiv.className = "media-container";
      const img = document.createElement("img");
      img.src = post.media.url;
      img.alt = post.media.alt || "Post image";
      mediaDiv.append(img);
      articleBody.append(mediaDiv);
    }

    const buttonDiv = document.createElement("div");
    buttonDiv.className = "button-container";

    const articlebtn = document.createElement("button");
    articlebtn.innerText = "Read Post";
    articlebtn.addEventListener("click", () => {
      window.location.href = `/post/single-post/?id=${post.id}`;
    });
    buttonDiv.append(articlebtn);

    if (isAuthorized) {
      const editBtn = document.createElement("button");
      editBtn.innerText = "Edit";
      editBtn.addEventListener("click", async (event) => {
        event.preventDefault();

        window.location.href = `/post/edit/?id=${post.id}`;
      });
      const deleteBtn = document.createElement("button");
      deleteBtn.innerText = "Delete";
      deleteBtn.addEventListener("click", async (event) => {
        event.preventDefault();

        await onDeletePost(articleContainer, post.id);
      });
      buttonDiv.append(editBtn, deleteBtn);
    }

    articleBody.append(buttonDiv);
    articleContainer.append(userInfoDiv, articleBody);
    articlesContainer.append(articleContainer);
  });
  return articlesContainer;
}
