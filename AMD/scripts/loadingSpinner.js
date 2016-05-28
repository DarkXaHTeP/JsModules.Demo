define(["libs/spin"], function(Spinner) {
    var overlay = document.querySelector("#overlay");
    var spinner = new Spinner().spin(overlay);

    var show = function() {
        overlay.classList.remove("hide");
    };

    var hide = function() {
        overlay.classList.add("hide");
    };

    return {
        show: show,
        hide: hide
    }
});