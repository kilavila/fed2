import home from "./views/home.js";

// NOTE: Adding special comments describing
// the functions we use with types, params etc.
// Add a comment at the very top of the file: // @ts-check
// to get type checking on this file
/**
 * @function router
 * @param {string} pathname
 */
export default async function router(pathname = window.location.pathname) {

  console.log("Running router function");

  switch (pathname) {
    case "/":
      // await import("./views/home.js");
      home();
      break;
    case "/auth/":
      await import("./views/auth.js");
      break;
    case "/auth/login/":
      await import("./views/login.js");
      break;
    case "/auth/register/":
      await import("./views/register.js");
      break;
    case "/post/":
      await import("./views/post.js");
      break;
    case "/post/edit/":
      await import("./views/postEdit.js");
      break;
    case "/post/create/":
      await import("./views/postCreate.js");
      break;
    case "/post/single-post/":
      await import("./views/singlePost.js");
      break;
    case "/profile/":
      await import("./views/profile.js");
      break;
    default:
      await import("./views/notFound.js");
  }
}
