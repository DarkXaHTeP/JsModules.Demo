var Spinner = require("./libs/spin");

var overlay = document.querySelector("#overlay");
var spinner = new Spinner().spin(overlay);

var show = function () {
    overlay.classList.remove("hide");
};

var hide = function () {
    overlay.classList.add("hide");
};

module.exports = {
    show: show,
    hide: hide
}