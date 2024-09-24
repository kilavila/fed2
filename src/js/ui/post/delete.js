import { deletePost } from "../../api/post/delete";

export async function onDeletePost(event, postId) {
  event.preventDefault();

  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";

  deleteBtn.addEventListener("click", async (event) => {
    event.preventDefault();

    const confirmation = confirm("Are you sure you want to delete this post?");
    if (!confirmation) return;

    try {
      const response = await deletePost(postId);

      if (response) {
        console.log(`Post with ID ${postId} was deleted successfully`);

        const postElement = event.target.closest(".article-Container");
        if (postElement) postElement.remove();
      } else {
        console.error("Failed to delete post: No response from API");
      }
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  });

  return deleteBtn;
}
