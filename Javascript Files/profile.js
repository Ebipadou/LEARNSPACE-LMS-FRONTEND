// Webpages
const dashboard = document.getElementById("dashboard");
const courses = document.getElementById("courses");
const progress = document.getElementById("progress");
const assignments = document.getElementById("assignments");
const profile = document.getElementById("profile");
const logout = document.getElementById("logoutBtn");
const logoutModal = document.querySelector(".modal");
const logoutBtn = document.getElementById("logoutBtn");
const logoutBtnYes = document.getElementById("lg-yes");
const logoutBtnNo = document.getElementById("lg-no");

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


// Logout Functionality
logoutBtn.addEventListener("click", () => {
  logoutModal.classList.toggle("active");

  if (logoutModal.classList.contains("active")) {
    document.body.style.overflow = "hidden"; // Disable background scrolling
  };
});

logoutBtnYes.addEventListener("click", () => {
  alert("You have been logged out.");
  window.location.href = "/index.html";
});

logoutBtnNo.addEventListener("click", () => {
  logoutModal.classList.toggle("active");
}); 