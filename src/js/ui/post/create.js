import { createPost } from "../../api/post/create";

export async function onCreatePost(event) {
  event.preventDefault();

  const form = event.target;
  const title = form ? form[0].value : "";
  const body = form ? form[1].value : "";
  const tags = form ? form[2].value : "";
  const mediaUrl = form ? form[3].value : "";
  const mediaAlt = form ? form[4].value : "";

  const tagArr = tags.split(" ");

  const imgExtensions = ["jpg", "jpeg", "png", "gif", "webp"];

  const isValidImageUrl = (url) => {
    if (!url) return false;
    try {
      const urlObject = new URL(url);
      const extension = urlObject.pathname.split(".").pop().toLowerCase();
      return imgExtensions.includes(extension);
    } catch (error) {
      console.error("Invalid image URL");
      return false;
    }
  };

  if (media.length > 0) {
    const isValidimage = isValidImageUrl(media);

    if (!isValidimage) {
      alert("Please enter a valid image URL");
      return;
    }
  }
  const reqBody = {
    title,
    body: body || undefined,
    tags: tagArr.length > 0 ? tagArr : undefined,
    media: mediaUrl ? { url: mediaUrl, alt: mediaAlt || undefined } : undefined,
  };

  try {
    const post = await createPost(reqBody);

    if (post && post.id) {
      alert("Post created successfully!");
      window.location.href = `/post/single-post/?id=${post.id}`;
    } else {
      throw new Error("Post ID not returned");
    }
  } catch (error) {
    console.error("Error creating post:", error);
    alert("There was an error creating the post. Please try again.");
  }
}
