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
const startButton = document.querySelector("#start-button");
const startButtonLabel = document.querySelector("#start-button-label");
let currentStage = 0;
let demoTimer;

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

function startDemo() {
  if (demoTimer) return;

  startButton.disabled = true;
  startButtonLabel.textContent = "Demo running";
  demoTimer = setInterval(() => {
    currentStage += 1;
    showStage(currentStage);

    if (currentStage === stages.length - 1) {
      clearInterval(demoTimer);
      demoTimer = undefined;
      startButton.disabled = false;
      startButtonLabel.textContent = "Run again";
    }
  }, 2600);
}

startButton.addEventListener("click", () => {
  currentStage = 0;
  showStage(currentStage);
  startDemo();
});
