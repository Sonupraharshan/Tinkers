window.onload = function () {
  setTimeout(function () {
    document.getElementById("loading-screen").style.opacity = "0";
    setTimeout(function () {
      document.getElementById("loading-screen").style.display = "none";
      document.getElementById("content").style.display = "block";
    }, 500);
  }, 2000);
};

let progress = 0;
const progressBar = document.getElementById("progress-bar");

function updateProgress() {
  if (progress <= 100) {
    let offset = 314 - (progress / 100) * 314;
    progressBar.style.strokeDashoffset = offset;
    progressBar.style.strokeOpacity = 1;
    progress++;
    setTimeout(updateProgress, 50);
  }
}

updateProgress();
