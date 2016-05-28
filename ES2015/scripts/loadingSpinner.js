import Spinner from "./libs/spin";

let overlay = document.querySelector("#overlay");
let spinner = new Spinner().spin(overlay);

let show = () => overlay.classList.remove("hide");
let hide = () => overlay.classList.add("hide");

export { show, hide };