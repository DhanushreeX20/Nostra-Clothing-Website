// ---------- OFFER BAR CLOSE ----------
const offerClose = document.getElementById("offer-close");
const offerBar = document.querySelector(".offer-bar");

if (offerClose && offerBar) {
  offerClose.addEventListener("click", () => {
    offerBar.style.display = "none";
  });
}
//------------------sidenavbar-----------
const sideNavbar = document.querySelector(".side-navbar");
const sideNavbarActivate = document.getElementById("side-navbar-activate");
const sideNavbarClose = document.getElementById("side-navbar-close");

if (sideNavbarActivate && sideNavbar) {
  sideNavbarActivate.addEventListener("click", () => {
    sideNavbar.style.left = "0";
  });
}

if (sideNavbarClose && sideNavbar) {
  sideNavbarClose.addEventListener("click", () => {
    sideNavbar.style.left = "-100%";
  });
}
//---------------contact form-----------
// Select form and inputs
const form = document.querySelector(".contact-form form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

form.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form from refreshing page

  // Basic Validation
  if (nameInput.value.trim() === "") {
    alert("Please enter your name");
    return;
  }

  if (emailInput.value.trim() === "" || !validateEmail(emailInput.value)) {
    alert("Please enter a valid email");
    return;
  }

  if (messageInput.value.trim() === "") {
    alert("Please enter your message");
    return;
  }

  // If everything is valid
  alert("✅ Thank you! Your message has been sent successfully.");

  // Clear form fields
  form.reset();
});

// Email Validation Function
function validateEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}

