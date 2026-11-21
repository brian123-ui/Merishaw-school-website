// ===============================
// AUTOMATIC IMAGE SLIDER
// ===============================

let slideIndex = 0;

// Start the slideshow
showSlides();

function showSlides() {

    let slides = document.getElementsByClassName("slides");
    let dots = document.getElementsByClassName("dot");

    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Move to the next slide
    slideIndex++;

    // Restart from the first slide
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    // Remove active class from all dots
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Display the current slide
    slides[slideIndex - 1].style.display = "block";

    // Highlight the current dot
    dots[slideIndex - 1].className += " active";

    // Change slide every 3 seconds
    setTimeout(showSlides, 3000);

}

// ===============================
// LOGOUT
// ===============================

const logoutBtn = document.getElementById("logoutBtn");

logoutBtn.addEventListener("click", function(e){

    e.preventDefault();

    let answer = confirm("Are you sure you want to logout?");

    if(answer){

        alert("Logged out successfully!");

        window.location.href = "index.html";

    }

});