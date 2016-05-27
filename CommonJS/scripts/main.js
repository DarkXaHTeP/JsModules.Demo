var LoginForm = require("./LoginForm");
var formHandler = require("./formHandler");

var loginForm = new LoginForm(document.querySelector(".form-signin"));

loginForm.on("submit", formHandler.handleLogin);