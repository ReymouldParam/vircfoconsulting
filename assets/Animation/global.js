// pop-up card
document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const flagValue = urlParams.get('emailSuccess');
    const popupMessage = document.getElementById("popup-message");
    const popupHeading = document.getElementById("popup-heading");
    const popupPara = document.getElementById("popup-para");
    const closePopup = document.getElementById("close-popup");

    if (flagValue === 'true') {
        popupHeading.innerHTML = "EMAIL SENT SUCCESSFULLY";
        popupPara.innerHTML = "Thanks for Your Interest"; // Clear any existing message
        popupMessage.style.display = "block";
    } else if (flagValue === 'false') {
        popupHeading.innerHTML = "EMAIL NOT SENT";
        popupPara.innerHTML = "There was an error sending your message. Please try again later.";
        popupMessage.style.display = "block";
    }

    closePopup.addEventListener("click", function () {
        popupMessage.style.display = "none";
    });

    // Get the current URL without the query parameters
    const baseUrl = window.location.href.split('?')[0];

    // Replace the current state with a new state without the query parameters
    history.replaceState(null, null, baseUrl);
});
// about-section1
// Wait for the entire page to load
window.addEventListener('load', () => {
    // Find the element with the class 'about-section1'
    const aboutSection = document.querySelector('.about-section1');
    
    // Check if the element exists to avoid errors
    if (aboutSection) {
        // Add the 'in-view' class to the element
        aboutSection.classList.add('in-view');
    } else {
        // Log an error if the element is not found
        console.error('Element with class ".about-section1" not found.');
    }
});

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

// nav toggler
document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('toggleButton');
    const navContainer = document.getElementById('navContainer');

    toggleButton.addEventListener('click', function () {
        navContainer.classList.toggle('show');
    });
});

