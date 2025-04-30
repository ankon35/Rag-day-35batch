// JavaScript for Scroll-based Image Animation (Page 1 to Page 2 and back)

// Get elements
let page1Image = document.getElementById('page1-image');
let page2 = document.getElementById('page2');
let page2Image = document.getElementById('animated-image');

// Event listener for scroll
window.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY;
    const page2Top = page2.offsetTop;
    const page2Height = page2.offsetHeight;

    // Detect if the screen is mobile (or smaller width)
    const isMobile = window.innerWidth <= 768;

    // Check if user has scrolled past Page 1 to Page 2
    if (scrollPosition >= page2Top - window.innerHeight + 200) {
        // Animate image from Page 1 to left side of Page 2
        if (isMobile) {
            // For mobile screens, apply a 90-degree rotation and adjust translation
            page1Image.style.transform = 'translateX(0vw) translateY(106vh)'; // Adjust for mobile
        } else {
            // For desktop/tablet, apply normal transition
            page1Image.style.transform = 'translateX(-40vw) translateY(110vh)';
        }
        page2Image.style.transform = 'none'; // Reset position of image on Page 2
    } else {
        // Reverse the animation for scrolling back to Page 1
        page1Image.style.transform = 'none'; // Reset position of image on Page 1
        if (isMobile) {
            // For mobile, adjust translation to avoid overflow
            page2Image.style.transform = 'translateX(0vw) translateY(106vh)'; // Adjust for mobile
        } else {
            page2Image.style.transform = 'translateX(70vw) translateY(-70vh)'; // Normal reset
        }
    }
});
