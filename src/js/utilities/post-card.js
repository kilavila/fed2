export default function createPostCards(userPosts, isAuthorized) {
  const article = document.createElement("article");
  userPosts.map((post) => {
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
      const img = document.createElement("img");
      img.src = post.media.url;
      img.alt = post.media.alt || "Post image";
      articleBody.append(img);
    }
    //! knapp for å slette og redigere. i en if setning. stemmer local med api i såfall vil vi legge til api.
    const articlebtn = document.createElement("button");
    articlebtn.innerText = "Read Post";
    articlebtn.addEventListener("click", () => {
      window.location.href = `/post/single-post/?id=${post.id}`;
    });
    articleBody.append(articlebtn);

    //! kode som blir kjørt når du ser på din egen bruker.
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
      articleBody.append(editBtn, deleteBtn);
    }

    article.append(userInfoDiv, articleBody);
  });

  return article;
}
