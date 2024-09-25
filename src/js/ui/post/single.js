import { readPost } from "../../api/post/read";

export async function onSinglePost(id) {
  try {
    const post = await readPost(id);

    if (!post) {
      throw new Error("Post not found");
    }

    const postContainer = document.createElement("div");
    postContainer.classList.add("post");

    const author = document.createElement("p");
    author.innerText = post.author.name;
    postContainer.appendChild(author);

    const title = document.createElement("h1");
    title.innerText = post.title || "No title available";
    postContainer.appendChild(title);

    const body = document.createElement("p");
    body.innerText = post.body || "No content available";
    postContainer.appendChild(body);

    if (post.media && post.media.url) {
      const img = document.createElement("img");
      img.src = post.media.url;
      img.alt = post.media.alt || "Post image";
      postContainer.appendChild(img);
    }
    const tags = document.createElement("p");
    tags.innerText = post.tags ? post.tags.join(", ") : "No tags";
    postContainer.appendChild(tags);
    const backButton = document.createElement("button");
    backButton.innerText = "Back";
    backButton.onclick = () => {
      window.location.href = "/";
    };
    postContainer.appendChild(backButton);

    document.body.appendChild(postContainer);
  } catch (error) {
    console.error("Error updating post content:", error);
    alert("There was an error updating the post content. Please try again.");
  }
}
