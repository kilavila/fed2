import { API_SOCIAL_POSTS } from "../constants";
import { headers } from "../headers";
export async function readPost(id) {
  try {
    const response = await fetch(
      `${API_SOCIAL_POSTS}/${id}?_author=true&_reactions=true&_comments=true`,
      {
        method: "GET",
        headers: headers(),
      }
    );
    if (!response.ok) {
      throw new Error(`Response Status: ${response.status}`);
    }
    const result = await response.json();
    return result.data || result;
  } catch (error) {
    throw new Error(
      `Failed to fetch post with ID: ${id}. Error: ${error.message}`
    );
  }
}

export async function readPosts(limit = 12, page = 1, tag) {
  try {
    const response = await fetch(
      `${API_SOCIAL_POSTS}?limit=12&page=1&_author=true&_reactions=true&_comments=true`,
      {
        method: "GET",
        headers: headers(),
      }
    );

    if (!response.ok) {
      throw new Error(`Response Status: ${response.status}`);
    }
    const result = await response.json();

    return result.data;
  } catch (error) {
    console.error("Error reading posts:", error);
  }
}

export async function readPostsByUser(username, limit = 12, page = 1, tag) {
  try {
    const response = await fetch(
      `${API_SOCIAL_POSTS}?limit=12&page=1&_author=true&_reactions=true&_comments=true`,
      {
        method: "GET",
        headers: headers(),
      }
    );

    if (!response.ok) {
      throw new Error(`Response Status: ${response.status}`);
    }
    const result = await response.json();

    return result.data;
  } catch (error) {
    console.error("Error reading posts:", error);
  }
}
