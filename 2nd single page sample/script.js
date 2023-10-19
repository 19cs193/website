document.addEventListener("DOMContentLoaded", function () {
    const loginButton = document.getElementById("loginBtn");
    const loginModal = document.getElementById("loginModal");
    const closeModal = document.getElementById("closeModal");
    const userLoginForm = document.querySelector(".user-login-form");
    const adminLoginForm = document.querySelector(".admin-login-form");

    loginButton.addEventListener("click", function () {
        loginModal.style.display = "block";
        userLoginForm.style.display = "block";
        adminLoginForm.style.display = "none";
        userLoginForm.classList.add("open");
    });

    closeModal.addEventListener("click", function () {
        loginModal.style.display = "none";
        userLoginForm.classList.remove("open");
        adminLoginForm.classList.remove("open");
    });
    
    // Toggle between User and Admin login forms
    const userLoginButton = document.querySelector(".login-button[data-form='user-login-form']");
    const adminLoginButton = document.querySelector(".login-button[data-form='admin-login-form']");

    userLoginButton.addEventListener("click", function () {
        userLoginForm.style.display = "block";
        adminLoginForm.style.display = "none";
        userLoginForm.classList.add("open");
        adminLoginForm.classList.remove("open");
        userLoginButton.style.display = "none";
        adminLoginButton.style.display = "inline";
    });

    adminLoginButton.addEventListener("click", function () {
        userLoginForm.style.display = "none";
        adminLoginForm.style.display = "block";
        adminLoginForm.classList.add("open");
        userLoginForm.classList.remove("open");
        adminLoginButton.style.display = "none";
        userLoginButton.style.display = "inline";
    });

    // Simulated login logic (replace with your actual logic)
    userLoginForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const username = document.getElementById("user-username").value;
        const password = document.getElementById("user-password").value;
        
        // Basic validation (replace with actual validation)
        if (username && password) {
            alert("User login successful.");
        } else {
            alert("Please enter valid credentials.");
        }
    });

    adminLoginForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const adminUsername = document.getElementById("admin-username").value;
        const adminPassword = document.getElementById("admin-password").value;
        
        // Basic validation (replace with actual validation)
        if (adminUsername && adminPassword) {
            alert("Admin login successful.");
        } else {
            alert("Please enter valid admin credentials.");
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    // Image slider logic
    let slideIndex = 0;
    showSlides();

    function showSlides() {
        let i;
        const slides = document.getElementsByClassName("mySlides");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }
        slides[slideIndex - 1].style.display = "block";
        setTimeout(showSlides, 5000); // Change image every 10 seconds (adjust as needed)
    }
});
//Testimonials section//
const testimonials = document.querySelectorAll('.testimonial');
let currentIndex = 0;
const interval = 5000; // Interval in milliseconds (5 seconds)

function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
        testimonial.style.opacity = i === index ? 1 : 0;
    });
}

function rotateTestimonials() {
    currentIndex = (currentIndex + 1) % testimonials.length;
    showTestimonial(currentIndex);
}

showTestimonial(currentIndex); // Display the first testimonial initially

setInterval(rotateTestimonials, interval);

