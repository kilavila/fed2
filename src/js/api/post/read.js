import { API_SOCIAL_POSTS } from "../constants";
import { headers } from "../headers";
export async function readPost(id) {
  try {
    const response = await fetch(`${API_SOCIAL_POSTS}/${id}`, {
      method: "GET",
      headers: headers(),
    });
    if (!response.ok) {
      throw new Error(`Response Status: ${response.status}`);
    }
    const result = await response.json();
    return result.data;
  } catch (error) {
    console.error("Error reading post:", error);
  }
}

//get posts- bare forskjelldige måter å hente ting på//
export async function readPosts(limit = 12, page = 1, tag) {
  try {
    const response = await fetch(
      `${API_SOCIAL_POSTS}?limit=${limit}&page=${page}&tag=${tag}`,
      {
        method: "GET",
        headers: headers(),
      }
    );
    console.log(response);
    if (!response.ok) {
      throw new Error(`Response Status: ${response.status}`);
    }
    const result = await response.json();
    console.log(result);
    return result.data;
  } catch (error) {
    console.error("Error reading posts:", error);
  }
}

export async function readPostsByUser(username, limit = 12, page = 1, tag) {}
