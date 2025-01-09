document.addEventListener("DOMContentLoaded", function () {
  var box = document.getElementById("lista-volei");

  function checkVisibility() {
    var rect = box.getBoundingClientRect();
    var windowHeight =
      window.innerHeight || document.documentElement.clientHeight;

    if (rect.top <= windowHeight && rect.bottom >= 0) {
      box.style.animation = "";
      window.removeEventListener("scroll", checkVisibility);
    }
  }

  window.addEventListener("scroll", checkVisibility);
  checkVisibility();
});
