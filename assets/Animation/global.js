
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

document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('toggleButton');
    const navContainer = document.getElementById('navContainer');
  
    toggleButton.addEventListener('click', function () {
      navContainer.classList.toggle('show'); // Show/hide the menu
      toggleButton.classList.toggle('open'); // Animate the toggle button
    });
  });
  
// pop cards
  document.addEventListener("DOMContentLoaded", function () {
    const popupMessage = document.getElementById("popup-message");
    const popupOverlay = document.getElementById("popup-overlay");
    const popupHeading = document.getElementById("popup-heading");
    const popupPara = document.getElementById("popup-para");
    const closeBtn = document.getElementById("close-btn");
  
    // Simulate a condition to show the popup
    popupHeading.innerText = "Sample Heading";
    popupPara.innerText = "This is a sample message.";
    popupMessage.style.display = "block";
    popupOverlay.style.display = "block";
  
    // Close the popup
    closeBtn.addEventListener("click", function () {
      popupMessage.style.display = "none";
      popupOverlay.style.display = "none";
    });
  
    // Close when clicking overlay
    popupOverlay.addEventListener("click", function () {
      popupMessage.style.display = "none";
      popupOverlay.style.display = "none";
    });
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
