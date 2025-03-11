
let slideIndex = 0;
    const slides = document.querySelectorAll('.slide');

    function showSlides() {
        slides.forEach((slide, index) => {
            slide.classList.remove('active');
            if (index === slideIndex) {
                slide.classList.add('active');
            }
        });

        slideIndex = (slideIndex + 1) % slides.length;
    }

    setInterval(showSlides, 4000);
    showSlides();

    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
    
// Close menu when clicking outside or selecting a menu item
document.addEventListener('click', (event) => {
    if (!navLinks.contains(event.target) && !hamburger.contains(event.target)) {
        navLinks.classList.remove('active');
    }
});  


