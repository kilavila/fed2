
import { updatePost } from "../../api/post/update";


export async function onUpdatePost(event, id) {

    event.preventDefault();
    const form = event.target;
    const title = form ? form[0].value : "";
    const body = form ? form[1].value : "";
    const tags = form ? form[2].value : "";
    const media = form ? form[3].value : "";

    const post = await updatePost(id, { title, body, tags, media });
    if (post) {
        window.location.href = `/post/single-post/?id=${id}`
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