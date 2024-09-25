import { deletePost } from "../../api/post/delete";

export async function onDeletePost(postElement, postId) {
  const confirmation = confirm("Are you sure you want to delete this post?");
  if (!confirmation) return;

  try {
    const response = await deletePost(postId);

    if (response) {
      console.log(`Post with ID ${postId} was deleted successfully`);

      if (postElement) postElement.remove();

      alert("Post deleted successfully");
    } else {
      console.error("Failed to delete post: No response from API");
    }
  } catch (error) {
    console.error("Failed to delete post:", error);
  }
}
