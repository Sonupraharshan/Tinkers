window.onload = function () {
  setTimeout(function () {
    document.getElementById("loading-screen").style.opacity = "0";
    setTimeout(function () {
      document.getElementById("loading-screen").style.display = "none";
      document.getElementById("content").style.display = "block";
    }, 500);
  }, 2000);
};

document.addEventListener("DOMContentLoaded", () => {
  console.log("Loading screen active");
});
