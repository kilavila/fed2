// @ts-check

import { headers } from "../headers";
import { API_AUTH_REGISTER } from "./../../api/constants";

/**
 * @function register
 * @param {Object} form
 * @property {string} form.name
 * @property {string} form.email
 * @property {string} form.password
 * @returns {Promise} result
 */
export async function register({ name, email, password }) {
  try {
    const reqBody = { name, email, password };

    const response = await fetch(API_AUTH_REGISTER, {
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
