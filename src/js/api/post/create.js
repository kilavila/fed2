import { API_SOCIAL_POSTS } from "../../api/constants";
import { headers } from "../../api/headers";

export async function createPost({ title, body, tags, media }) {
  try {
    const reqBody = {
      title: title,
      body: body,
      tags: tags,
      media: media,
    };

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
