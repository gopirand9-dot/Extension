const stages = [
  { title: "Logging into Roblox", detail: "Preparing a secure demo session...", progress: 18 },
  { title: "Logging into Roblox", detail: "Syncing your imaginary fruit inventory...", progress: 57 },
  { title: "Doubling Fruits", detail: "Sparkling up your demo collection...", progress: 82 },
  { title: "Doubling Fruits", detail: "All fruits doubled — demo complete!", progress: 100 }
];

const statusText = document.querySelector("#status-text");
const statusDetail = document.querySelector("#status-detail");
const progressBar = document.querySelector("#progress-bar");
const progressValue = document.querySelector("#progress-value");
let currentStage = 0;

function showStage(index) {
  const stage = stages[index];
  statusText.classList.remove("swap");
  void statusText.offsetWidth;
  statusText.classList.add("swap");
  statusText.textContent = stage.title;
  statusDetail.textContent = stage.detail;
  progressBar.style.width = `${stage.progress}%`;
  progressValue.textContent = `${stage.progress}%`;
}

showStage(currentStage);
setInterval(() => {
  currentStage = (currentStage + 1) % stages.length;
  showStage(currentStage);
}, 2600);
