require(["LoginForm", "formHandler"], function(LoginForm, formHandler) {
    var loginForm = new LoginForm(document.querySelector(".form-signin"));

    loginForm.on("submit", formHandler.handleLogin);
});