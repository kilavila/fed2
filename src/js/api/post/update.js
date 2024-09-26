import { API_SOCIAL_POSTS } from "../../api/constants";
import { headers } from "../../api/headers";
export async function updatePost(id, { title, body, tags, media }) {
  const reqBody = {
    title: title,
    body: body,
    tags: tags.split(" "),
    media: {
      url: media,
    },
  };
  try {
    const response = await fetch(`${API_SOCIAL_POSTS}/${id}`, {
      method: "PUT",
      headers: headers(),
      body: JSON.stringify(reqBody),
    });

    if (!response.ok) {
      throw new Error(
        `Failed to update post. Response Status: ${response.status}`
      );
    }

    const result = await response.json();
    console.log("Post updated:", result);

    return result.data;
  } catch (error) {
    console.error("Error editing post:", error);
  }
}
// {
//     "title": "string",
//     "body": "string",
//     "tags": [
//       "string"
//     ],
//     "media": {
//       "url": "string",
//       "alt": ""
//     }
//   }
