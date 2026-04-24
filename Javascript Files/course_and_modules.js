// Webpages
const dashboard = document.getElementById("dashboard");
const courses = document.getElementById("courses");
const progress = document.getElementById("progress");
const assignments = document.getElementById("assignments");
const profile = document.getElementById("profile");
const resumeBtn = document.querySelectorAll(".resume-btn");

// Navigation Event Listeners

dashboard.addEventListener("click", () => {
  window.location.href = "/learner_dashboard.html";
});

courses.addEventListener("click", () => {
  window.location.href = "/course_and_modules.html";
});

progress.addEventListener("click", () => {
  window.location.href = "/progress.html";
});

assignments.addEventListener("click", () => {
  window.location.href = "/assignment_submission.html";
});

profile.addEventListener("click", () => {
  window.location.href = "/profile.html";
});


resumeBtn.forEach(btn => {
  btn.addEventListener("click", () => {
    alert("Resuming your last module...");
  });
});