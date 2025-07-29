// Initialize page on load
window.addEventListener('load', function() {
  // Ensure login form and slider are visible by default
  const loginForm = document.querySelector('.login-form');
  const signupForm = document.querySelector('.signup-form');
  const loginSlider = document.querySelector('.login-slider');
  const signupSlider = document.querySelector('.signup-slider');
  
  loginForm.style.display = 'block';
  signupForm.style.display = 'none';
  loginSlider.style.display = 'block';
  signupSlider.style.display = 'none';
});

function handleLogin(event) {
  event.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  
  if (username && password) {
    alert(`Welcome, ${username}! Login successful.`);
    // Reset form
    document.querySelector('.login-form form').reset();
  }
}

function handleSignup(event) {
  event.preventDefault();
  const username = document.getElementById('signup-username').value;
  const email = document.getElementById('signup-email').value;
  const password = document.getElementById('signup-password').value;
  const confirmPassword = document.getElementById('confirm-password').value;
  
  if (password !== confirmPassword) {
    alert('Passwords do not match!');
    return;
  }
  
  if (username && email && password) {
    alert(`Account created successfully for ${username}! Welcome aboard.`);
    // Reset form
    document.querySelector('.signup-form form').reset();
    // Switch back to login form
    toggleForms();
  }
}

function toggleForms() {
  const loginForm = document.querySelector('.login-form');
  const signupForm = document.querySelector('.signup-form');
  const loginSlider = document.querySelector('.login-slider');
  const signupSlider = document.querySelector('.signup-slider');
  
  console.log('Login form display:', loginForm.style.display);
  console.log('Signup form display:', signupForm.style.display);
  
  if (loginForm.style.display === 'none' || loginForm.style.display === '') {
    // Switch to login form
    loginForm.style.display = 'block';
    signupForm.style.display = 'none';
    loginSlider.style.display = 'block';
    signupSlider.style.display = 'none';
    // Sync slider values
    document.getElementById('slider').value = document.getElementById('signupSlider').value;
    body.setAttribute('data-light', document.getElementById('slider').value);
  } else {
    // Switch to signup form
    loginForm.style.display = 'none';
    signupForm.style.display = 'block';
    loginSlider.style.display = 'none';
    signupSlider.style.display = 'block';
    // Sync slider values
    document.getElementById('signupSlider').value = document.getElementById('slider').value;
    body.setAttribute('data-light', document.getElementById('signupSlider').value);
  }
}
