
import { fillArticle } from "./render.js";
import { user } from "./data.js"

window.addEventListener("DOMContentLoaded", () => {
    let userData = user.firstName + " " + user.lastName
    fillArticle("user-profile", userData)
});
