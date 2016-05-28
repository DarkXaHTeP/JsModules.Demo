import UserModel from "./UserModel";
import EventEmitter from "events";

class Form {
    constructor(formElement) {
        this._form = formElement;
        this._emitter = new EventEmitter();

        this._form.addEventListener("submit", this.onSubmit.bind(this));
    }

    onSubmit(e) {
        e.preventDefault();
        e.stopPropagation();

        let email = this._form.querySelector("#input-email").value;
        let password = this._form.querySelector("#input-password").value;
        let remember = this._form.querySelector("#input-remember").checked;

        let user = new UserModel(email, password, remember);

        this._emitter.emit("submit", user);

    }

    on(event, handler) {
        this._emitter.on(event, handler);
    };
};


export default Form;