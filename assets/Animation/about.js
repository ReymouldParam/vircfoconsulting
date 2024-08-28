// section5
document.addEventListener("DOMContentLoaded", function() {
    const section = document.querySelector('.section5');
    const options = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                section.classList.add('scrolled-into-view');
                observer.unobserve(entry.target);  // Stop observing after triggering the animation
            }
        });
    }, options);

    observer.observe(section);
});

// cardsanimation
document.addEventListener('DOMContentLoaded', () => {
    const section = document.querySelector('.section4');
  
    // Create an Intersection Observer instance
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add 'animate' class to reveal and animate the section
          section.classList.add('animate');
          // Optionally, you can stop observing after the animation has been triggered
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1 // Adjust the threshold as needed
    });
  
    // Start observing the section
    observer.observe(section);
  });