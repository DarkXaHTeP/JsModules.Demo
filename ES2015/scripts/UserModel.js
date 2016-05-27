class UserModel {
    constructor(email, password, remember) {
        this._email = email;
        this._password = password;
        this._remember = remember;
    }

    get email() {
        return this._email;
    }

    get password() {
        return this._password;
    }

    get shouldBeRemembered() {
        return this._remember;
    }
};

export default UserModel;