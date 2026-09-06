//navigation

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", function () {

        navLinks.classList.toggle("show");

    });

}


// Automatically display current year in footer

const yearElements = document.querySelectorAll("#year");

yearElements.forEach(function (element) {

    element.textContent = new Date().getFullYear();

});


// Static contact form demonstration

const contactForm = document.getElementById("contact-form");

const formMessage = document.getElementById("form-message");


if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();


        const name =
            document.getElementById("name").value;


        formMessage.textContent =
            "Thanks, " +
            name +
            "! Your message has been recorded for this demo.";


        contactForm.reset();

    });

}