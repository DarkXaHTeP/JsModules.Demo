import LoginForm from "./LoginForm";
import { handleLogin } from "./formHandler";

let loginForm = new LoginForm(document.querySelector(".form-signin"));

loginForm.on("submit", handleLogin);