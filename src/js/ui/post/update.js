import { updatePost } from "../../api/post/update";

export async function onUpdatePost(event, id) {
  event.preventDefault();

  const form = event.target;
  const title = form ? form[0].value : "";
  const body = form ? form[1].value : "";
  const tags = form ? form[2].value : "";
  const mediaUrl = form ? form[3].value : "";
  const mediaAlt = form ? form[4].value : "";

  const tagArr = tags.split(" ");

  const reqBody = {
    title,
    body: body || undefined,
    tags: tagArr.length > 0 ? tagArr : undefined,
    media: mediaUrl ? { url: mediaUrl, alt: mediaAlt || undefined } : undefined,
  };

  const post = await updatePost(id, reqBody);
  if (post) {
    window.location.href = `/post/single-post/?id=${id}`;
  }
}
