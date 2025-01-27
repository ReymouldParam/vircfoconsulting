
// header 
window.addEventListener('DOMContentLoaded', (event) => {
    const navItems = document.querySelectorAll('.nav-item');

    navItems.forEach(item => {
        // Check if the href matches the current URL
        if (item.href === window.location.href) {
            item.classList.add('active');
        }
    });
});

// mobiel nav-items

document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.querySelector(".toggle-button");
  const navContainer = document.querySelector(".nav-container");

  toggleButton.addEventListener("click", function () {
    navContainer.classList.toggle("active");
    toggleButton.classList.toggle("open");
  });
});
  
// pop cards
document.addEventListener("DOMContentLoaded", function () {
  const popupMessage = document.getElementById("popup-message");
  const popupOverlay = document.getElementById("popup-overlay");
  const popupHeading = document.getElementById("popup-heading");
  const popupPara = document.getElementById("popup-para");
  const closeBtn = document.getElementById("close-btn");

  // Simulate a condition (replace with actual logic or URL parameters)
  const urlParams = new URLSearchParams(window.location.search);
  const mailStatus = urlParams.get("emailSuccess"); // e.g., mailStatus=true or mailStatus=false

  if (popupMessage && popupHeading && popupOverlay) {
    if (mailStatus === "true") {
      // Mail sent successfully
      popupHeading.innerText = "EMAIL SENT SUCCESSFULLY";
      popupPara.innerText = "Thank you for reaching out! We will get back to you shortly.";
      popupMessage.style.display = "block";
      popupOverlay.style.display = "block";
    } else if (mailStatus === "false") {
      // Mail sending failed
      popupHeading.innerText = "EMAIL NOT SENT";
      popupPara.innerText = "Oops! Something went wrong. Please try again later.";
      popupMessage.style.display = "block";
      popupOverlay.style.display = "block";
    }
  }

  // Close the popup when the close button is clicked
  closeBtn.addEventListener("click", function () {
    popupMessage.style.display = "none";
    popupOverlay.style.display = "none";
  });

  // Close the popup when the overlay is clicked
  popupOverlay.addEventListener("click", function () {
    popupMessage.style.display = "none";
    popupOverlay.style.display = "none";
  });

  // Optionally, clear URL parameters after displaying the popup
  const baseUrl = window.location.href.split("?")[0];
  history.replaceState(null, null, baseUrl);
});

// navbar effect 
// Navbar scroll effect
window.addEventListener('scroll', function () {
    var header = document.querySelector('.header');

    if (window.scrollY > 0) {
        header.classList.add('fullwidth');
    } else {
        header.classList.remove('fullwidth');
    }
});
