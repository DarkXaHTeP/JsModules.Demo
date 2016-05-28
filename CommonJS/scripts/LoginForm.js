var UserModel = require("./UserModel");
var EventEmitter = require("events");

var Form = function (formElement) {
    this._form = formElement;
    this._emitter = new EventEmitter();

    this._form.addEventListener("submit", this.onSubmit.bind(this));
};

Form.prototype.onSubmit = function (e) {
    e.preventDefault();
    e.stopPropagation();

    var email = this._form.querySelector("#input-email").value;
    var password = this._form.querySelector("#input-password").value;
    var remember = this._form.querySelector("#input-remember").checked;

    var user = new UserModel(email, password, remember);

    this._emitter.emit("submit", user);

};

Form.prototype.on = function (event, handler) {
    this._emitter.on(event, handler);
};

module.exports = Form;