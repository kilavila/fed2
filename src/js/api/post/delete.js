export async function deletePost(id) {
  try {
    const response = await fetch(`${API_SOCIAL_POSTS}/${id}`, {
      method: "DELETE",
      headers: headers(),
    });
    if (!response.ok) {
      throw new Error(`Response Status: ${response.status}`);
    }
    const result = await response.json();
    console.log(result);
    return result.data;
  } catch (error) {
    console.error("Error deleting post:", error);
  }
}
