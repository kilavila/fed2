import { API_SOCIAL_POSTS } from "../../api/constants";
import { headers } from "../../api/headers";

export async function createPost(reqBody) {
  try {
    const response = await fetch(API_SOCIAL_POSTS, {
      method: "POST",
      headers: headers(),
      body: JSON.stringify(reqBody),
    });

    console.log(response);
    if (!response.ok) {
      throw new Error(`Response Status: ${response.status}`);
    }

    const result = await response.json();

    return result.data;
  } catch (error) {
    console.error(error.message);
  }
}
