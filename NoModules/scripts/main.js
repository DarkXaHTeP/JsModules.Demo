(function() {
    var loginForm = new LoginForm(document.querySelector(".form-signin"));

    loginForm.on("submit", formHandler.handleLogin);
})(LoginForm, formHandler);