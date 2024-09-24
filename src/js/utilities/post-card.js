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
    //! knapp for å slette og redigere. i en if setning. stemmer local med api i såfall vil vi legge til api.
    const articlebtn = document.createElement("button");
    articlebtn.innerText = "Read Post";
    articlebtn.addEventListener("click", () => {
      window.location.href = `/post/single-post/?id=${post.id}`;
    });

    //! kode som blir kjørt når du ser på din egen bruker.
    if (isAuthorized) {
      //delit btn med en funk som blir kjørt.
      //edit- ta ti ny side som kan redigere side.
    }

    articleBody.append(articleTitle, articleText, articleTags, articlebtn);

    if (img) articleBody.append(img);
    article.append(userInfoDiv, articleBody);
  });

  return article;
}
