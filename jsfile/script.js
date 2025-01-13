
//************************* NAVIGATION BAR ACTIVE ************************
    // Select all navigation links
    const navLinks = document.querySelectorAll('.navbar a');

    // Add a click event listener to each link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Remove the 'active' class from all links
            navLinks.forEach(nav => nav.classList.remove('active'));

            // Add the 'active' class to the clicked link
            this.classList.add('active');
        });
    });


// ******************** SMOOTH SCROLL TO SECTIONS ************************

document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.navbar a');

    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
});


//*********************** POPUP BOX FOR EXPERIENCE ***********************

// popup box for grid card 1 (wordpress experience)
function togglePopup(popupId) {
    const popup = document.getElementById(popupId);
    popup.classList.add('active');
    document.body.classList.add('no-scroll');
}
// popup box for grid card 2 (photoshop experience)
function closePopup(popupId) {
    const popup = document.getElementById(popupId);
    popup.classList.remove('active');
    document.body.classList.remove('no-scroll');
}


// *********************** SCRIPT FOR PERSONAL-PHOTO (position: fixed;) *********************** 
document.addEventListener("DOMContentLoaded", function () {
    const photo = document.getElementById("personal-photo");
    const footer = document.getElementById("footer");

    // Function to handle scroll logic
    const onScroll = () => {
        const footerTop = footer.getBoundingClientRect().top; // Distance from viewport top to footer top
        const viewportHeight = window.innerHeight;

        if (footerTop <= viewportHeight) {
            // Footer is visible; pin the photo to the footer's top edge
            photo.style.position = "absolute";
            photo.style.top = `${window.scrollY + footerTop - photo.height - 0}px`; // Gap from top edge of footer, and bottom edge of the photo
        } else {
            // Footer is not visible; keep the photo fixed
            photo.style.position = "fixed";
            photo.style.top = "10%"; // Keeps the photo fixed on top with a slight margin
        }
    };

    // Attach scroll event listener
    window.addEventListener("scroll", onScroll);
});

// hamborgor meno

document.addEventListener('DOMContentLoaded', () => {
    const burgerMenu = document.querySelector('.burger-menu');
    const navBar = document.querySelector('.navbar');

    burgerMenu.addEventListener('click', () => {
        burgerMenu.classList.toggle('active');
        navBar.classList.toggle('active');
    });
});
