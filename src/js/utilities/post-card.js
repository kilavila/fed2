export default function createPostCards(userPosts, isAuthorized) {
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

    /*
      # ARTICLE TITLE
    */
    const articleTitle = document.createElement("h2");
    articleTitle.innerText = post.title;
    articleBody.append(articleTitle);

    /*
      # ARTICLE TEXT
    */
    const articleText = document.createElement("p");
    articleText.innerText = post.body;
    articleBody.append(articleText);

    /*
      # ARTICLE TAGS
    */
    const articleTags = document.createElement("p");
    articleTags.className = "tags";
    post.tags.map((tag) => {
      const tagSpan = document.createElement("span");
      tagSpan.innerText = tag;
      articleTags.append(tagSpan);
    });
    articleBody.append(articleTags);

    /*
      # ARTICLE MEDIA
    */
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
      editBtn.addEventListener("click", () => {
        window.location.href = `/post/update/?id=${post.id}`;
      });
      const deleteBtn = document.createElement("button");
      deleteBtn.innerText = "Delete";
      deleteBtn.addEventListener("click", () => {
        console.log("deleted post", post.id);
      });
      buttonDiv.append(editBtn, deleteBtn);
    }

    articleBody.append(buttonDiv);
    articleContainer.append(userInfoDiv, articleBody);
    articlesContainer.append(articleContainer);
  });

  document.body.append(articlesContainer);
}
