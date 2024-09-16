export async function onCreatePost(event) {
  event.preventDefault();

  const form = event.target;
  const title = form ? form[0].value : "";
  const body = form ? form[1].value : "";
  const tags = form ? form[2].value : "";
  const media = form ? form[3].value : "";

  const imgExtensions = ["jpg", "jpeg", "png", "gif", "webp"];

  const isValidImageUrl = (url) => {
    try {
      const urlObject = new URL(url);
      const extension = urlObject.pathname.split(".").pop().toLowerCase();
      return imgExtensions.includes(extension);
    } catch (error) {
      console.error("Invalid image URL");
      return false;
    }
  };

  if (!isValidImageUrl(media)) {
    alert("Please enter a valid image URL");
    return;
  }

  console.log(title, body, tags, media);
}
