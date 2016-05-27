import * as loadingSpinner from "./loadingSpinner";

let emulateRequestToServer = () => new Promise(
    (resolve) => setTimeout(
        () => resolve(), 4000));

let handleLogin = (user) => {
    console.log(user);
    loadingSpinner.show();
    emulateRequestToServer()
        .then(() => {
            loadingSpinner.hide();
            alert('Successfully logged in');
        })

};

export { handleLogin };