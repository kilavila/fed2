import { API_SOCIAL_PROFILES } from "../../api/constants";
import { headers } from "../../api/headers";

export async function readProfile(username) {
  try {
    const response = await fetch(
      `${API_SOCIAL_PROFILES}/${username}?_posts=true`,
      {
        method: "GET",
        headers: headers(),
      }
    );
    if (!response.ok) {
      throw new Error(`Response Status: ${response.status}`);
    }
    const result = await response.json();
    console.log(result);
    return result.data;
  } catch (error) {
    console.error("Error reading profile:", error);
  }
}

export async function readProfiles(limit, page) {}
