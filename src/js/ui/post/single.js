import { readPost } from "../../api/post/read";

export async function onSinglePost(id) {
  const post = await readPost(id);
  console.log(post);
}
//TODO: gjør noe med dataen du får inn.
