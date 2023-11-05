document.addEventListener("DOMContentLoaded", function () {
    const scrollRevealOptions = {
        distance: "50px",
        origin: "bottom",
        duration: 1000,
    };

    function revealElement(selector, options, delay) {
        ScrollReveal().reveal(selector, {
            ...options,
            delay,
        });
    }

    // Add new elements and their animations here
    revealElement(".header__image img", { duration: 1000 }, 0);
    revealElement(".header__content h1", scrollRevealOptions, 500);
    revealElement(".header__content p", scrollRevealOptions, 1000);
    revealElement(".header__btns", scrollRevealOptions, 1500);

    revealElement(".about__container h2", scrollRevealOptions, 0);
    revealElement(".about__container .section__subheader", scrollRevealOptions, 500);
    revealElement(".about__container p", scrollRevealOptions, 1000);

    const debateListings = document.querySelectorAll(".debate-listing");
    debateListings.forEach((listing, index) => {
        revealElement(listing, scrollRevealOptions, index * 500);
    });

    revealElement(".contact__image img", { duration: 1000 }, 0);
    revealElement(".contact__content h2", scrollRevealOptions, 500);
    revealElement(".contact__content p", scrollRevealOptions, 1000);
    revealElement(".contact__content form", scrollRevealOptions, 1500);

    // Add actions for new elements here
    const registerButton = document.querySelector(".btn.btn__secondary");
    registerButton.addEventListener("click", function () {
        // Add code to handle registration or display a registration form.
    });

    const contactForm = document.querySelector("form");
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();
        
        // Add code to handle form submission and send user messages.
    });

    const navLinks = document.querySelectorAll(".nav__links .link a");
    navLinks.forEach((link) => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({ behavior: "smooth" });
        });
    });

    const socialMediaIcons = document.querySelectorAll(".footer__socials a");
    socialMediaIcons.forEach((icon) => {
        icon.addEventListener("click", function (event) {
            event.preventDefault();
            
            // Add code to open the corresponding social media profile or page.
        });
    });
});
