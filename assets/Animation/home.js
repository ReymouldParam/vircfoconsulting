// section2
document.addEventListener("DOMContentLoaded", function () {
    const section2 = document.querySelector('.section2');
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        // Check if the element is intersecting the viewport
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // Stop observing after animation triggers
        }
      });
    }, { threshold: 0.5 }); // Trigger when 50% of the element is visible
  
    // Add 'hidden' class initially so the element starts off hidden
    section2.classList.add('hidden');
  
    // Observe the section2 element
    observer.observe(section2);
  });
// section3
document.addEventListener("DOMContentLoaded", function () {
    const section3 = document.querySelector('.section3');
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // Stop observing after animation triggers
        }
      });
    }, { threshold: 0.5 }); // Trigger when 50% of the element is visible
  
    // Add 'hidden' class initially so the element starts off hidden
    section3.classList.add('hidden');
  
    // Observe the section3 element
    observer.observe(section3);
  });
//   section4
document.addEventListener("DOMContentLoaded", function () {
    const section4 = document.querySelector('.section4');
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // Stop observing after animation triggers
        }
      });
    }, { threshold: 0.5 }); // Trigger when 50% of the element is visible
  
    // Observe the section4 element
    observer.observe(section4);
  });