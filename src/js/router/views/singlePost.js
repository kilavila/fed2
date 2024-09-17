import { onSinglePost } from "../../ui/post/single";

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

onSinglePost(id);
