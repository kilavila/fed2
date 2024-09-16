// @ts-check
import { API_KEY } from "./constants";

/**
 * @function headers
 */
//  * @returns {Headers} headers
export function headers() {
  const headers = new Headers();

  headers.append("Content-Type", "application/json");

  if (API_KEY) {
    headers.append("X-Noroff-API-Key", API_KEY);
  }

  return headers;
}
