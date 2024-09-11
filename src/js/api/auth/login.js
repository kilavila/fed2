// @ts-check
import { headers } from "../headers";
import {
  API_KEY,
  API_AUTH_LOGIN,
  API_AUTH_REGISTER,
  API_SOCIAL_POSTS,
} from "./../../api/constants";
/**
 * @function login
 * @param {Object} form
 * @param {string} form.email
 * @param {string} form.password
 * @returns {Promise} result
 */
export async function login({ email, password }) {
  // reqheaders er en ny variabel om du trenger å legge til nye verdier (append).
  // const reqHeaders = headers();
  try {
    const reqBody = {
      email: email,
      password: password,
    };

    const response = await fetch(API_AUTH_LOGIN, {
      method: "POST",
      headers: headers(),
      body: JSON.stringify(reqBody),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }

    const result = await response.json();

    return result.data;
  } catch (error) {
    console.error(error.message);
  }
}
