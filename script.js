window.onload = function () {
  document.getElementById("content").style.display = "none"; // Ensure content is hidden initially

  setTimeout(function () {
    document.getElementById("loading-screen").style.opacity = "0";
    setTimeout(function () {
      document.getElementById("loading-screen").style.display = "none";
      document.getElementById("content").style.display = "block"; // Show content only after loading screen disappears
    }, 500);
  }, 2000);
};

document.addEventListener("DOMContentLoaded", () => {
  console.log("Loading screen active");
});

document.getElementById("hotTilesBtn").addEventListener("click", function () {
  window.location.href = "hot_tiles.html";
});

document
  .getElementById("marioHistoryBtn")
  .addEventListener("click", function () {
    window.location.href = "mario_history.html";
  });

document.getElementById("downloadsBtn").addEventListener("click", function () {
  window.location.href = "downloads.html";
});

document.getElementById("forumsBtn").addEventListener("click", function () {
  window.location.href = "forums.html";
});

document.getElementById("signUpBtn").addEventListener("click", function () {
  window.location.href = "signup.html";
});
document.getElementById("currentBtn").addEventListener("click", function () {
  window.location.href = "current_tiles.html";
});
