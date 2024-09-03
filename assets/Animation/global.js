
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

 
document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('toggleButton');
    const navContainer = document.getElementById('navContainer');

    toggleButton.addEventListener('click', function () {
        navContainer.classList.toggle('show');
        toggleButton.classList.toggle('open');

        if (navContainer.classList.contains('show')) {
            navContainer.style.maxHeight = navContainer.scrollHeight + 'px'; // Expands the menu
        } else {
            navContainer.style.maxHeight = null; // Collapses the menu
        }
    });
});


// pops card
document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const flagValue = urlParams.get('emailSuccess');
    const popupMessage = document.getElementById("popup-message");
    const popupHeading = document.getElementById("popup-heading");
    const popupPara = document.getElementById("popup-para");
    const closePopup = document.getElementById("close-popup");

    console.log("popupMessage:", popupMessage);
    console.log("popupHeading:", popupHeading);
    console.log("popupPara:", popupPara);
    console.log("closePopup:", closePopup);

    if (popupMessage && popupHeading && popupPara && closePopup) {
        if (flagValue === 'true') {
            popupHeading.innerHTML = "EMAIL SENT SUCCESSFULLY";
            popupPara.innerHTML = "Thanks for Your Interest"; 
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
    } else {
        console.error("One or more elements with the specified IDs were not found.");
    }
});