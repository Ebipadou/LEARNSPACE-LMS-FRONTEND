    // DOM elements
    const signInLeft = document.getElementById('signInLeft');
    const signUpLeft = document.getElementById('signUpLeft');
    const signInRight = document.getElementById('signInRight');
    const signUpRight = document.getElementById('signUpRight');
    const switchToSignUp = document.getElementById('switchToSignUpBtn');
    const backToSignInLink = document.getElementById('backToSignInLink');
    
    // Helper to switch to Sign In view
    function showSignIn() {
      signInLeft.classList.add('active');
      signUpLeft.classList.remove('active');
      signInRight.classList.add('active');
      signUpRight.classList.remove('active');
    }
    
    // Helper to switch to Sign Up view
    function showSignUp() {
      signInLeft.classList.remove('active');
      signUpLeft.classList.add('active');
      signInRight.classList.remove('active');
      signUpRight.classList.add('active');
    }
    
    // Event: register button -> switch to sign up
    if (switchToSignUp) {
      switchToSignUp.addEventListener('click', (e) => {
        e.preventDefault();
        showSignUp();
      });
    }
    
    // Event: back to sign in link
    if (backToSignInLink) {
      backToSignInLink.addEventListener('click', (e) => {
        e.preventDefault();
        showSignIn();
      });
    }
    
    // Forgot password demo
    const forgotPwd = document.getElementById('forgotPwd');
    if (forgotPwd) {
      forgotPwd.addEventListener('click', () => {
        alert('✨ Demo: Password reset link would be sent to your email. (Feature coming soon)');
      });
    }
    
    // SIGN IN FORM submission (demo)
    const signinForm = document.getElementById('signinForm');
    if (signinForm) {
      signinForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('signin-email').value.trim();
        const pwd = document.getElementById('signin-password').value;
        if (!email || !pwd) {
          alert('Please fill in both email and password.');
          return;
        }
        alert(`🎉 Welcome back! (Demo sign in as ${email})\nRedirecting to dashboard...`);
        window.location.href = "/learner_dashboard.html"; 
      });
    }
    
    // SIGN UP FORM submission (demo + validation)
    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
      signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const fullname = document.getElementById('fullname-up').value.trim();
        const email = document.getElementById('email-up').value.trim();
        const password = document.getElementById('password-up').value;
        const confirm = document.getElementById('confirm-password-up').value;
        const termsChecked = document.getElementById('termsCheck').checked;
        
        if (!fullname || !email || !password || !confirm) {
          alert('Please fill in all fields.');
          return;
        }
        if (password !== confirm) {
          alert('❌ Passwords do not match. Please try again.');
          return;
        }
        if (password.length < 6) {
          alert('Password must be at least 6 characters.');
          return;
        }
        if (!termsChecked) {
          alert('Please agree to the Terms & Conditions.');
          return;
        }
        alert(`✅ Account created for ${fullname}!\nWelcome to LearnSpace 🚀\nYou can now sign in.`);
        // After signup, switch to sign in view
        showSignIn();
        document.getElementById('fullname-up').value = '';
        document.getElementById('email-up').value = '';
        document.getElementById('password-up').value = '';
        document.getElementById('confirm-password-up').value = '';
        document.getElementById('termsCheck').checked = false;
      });
    }