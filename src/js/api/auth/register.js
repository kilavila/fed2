import { headers } from "../headers";
import {
  API_AUTH_REGISTER,
} from "./../../api/constants";

export async function register({
  name,
  email,
  password,
  bio,
  banner,
  avatar,
}) {
  try{
    const reqBody = { name, email, password, bio, banner, avatar };
    
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
