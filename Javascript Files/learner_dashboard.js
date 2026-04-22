  const fileInput = document.getElementById('fileUpload');
  const fileFeedback = document.getElementById('fileFeedback');
  const dropZone = document.getElementById('dropZone');

  // Webpages
  const dashboard = document.getElementById("dashboard");
  const courses = document.getElementById("courses");
  const progress = document.getElementById("progress");
  const assignments = document.getElementById("assignments");
  const profile = document.getElementById("profile");
  const profileImg = document.querySelector(".curpo");

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

  profileImg.addEventListener("click", () => {
    window.location.href = "/profile.html";
  });

  
  if (fileInput) {
    fileInput.addEventListener('change', (e) => {
      if (fileInput.files.length) {
        fileFeedback.innerHTML = `📎 Selected: ${fileInput.files[0].name}`;
      } else fileFeedback.innerHTML = '';
    });
    dropZone.addEventListener('click', () => fileInput.click());
  }

  // submit assignment
  document.getElementById('saveDraftBtn')?.addEventListener('click', () => {
    alert('📌 Draft saved! Your progress has been stored locally.');
  });
  document.getElementById('submitAssignmentBtn')?.addEventListener('click', () => {
    alert('✅ Assignment submitted (demo). Your instructor will review it soon.');
  });

  // lesson actions
  const markBtn = document.getElementById('markCompleteBtn');
  const prevBtn = document.getElementById('prevLessonBtn');
  const nextBtn = document.getElementById('nextLessonBtn');
  const lessonFeedbackSpan = document.getElementById('lessonFeedback');
  
  if (markBtn) {
    markBtn.addEventListener('click', () => {
      lessonFeedbackSpan.innerHTML = '🎉 Lesson marked as complete! +15 XP.';
      setTimeout(() => { lessonFeedbackSpan.innerHTML = ''; }, 2500);
    });
  }
  if (prevBtn) {
    prevBtn.addEventListener('click', () => alert('📖 Navigating to previous lesson: SOLID Principles (demo)'));
  }
  if (nextBtn) {
    nextBtn.addEventListener('click', () => alert('🚀 Next lesson: Clean Code Practices & Refactoring'));
  }

  console.log("Learner Dashboard ready — complete, responsive, with footer and full features.");