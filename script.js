// =============================
// Ganda Glow JavaScript
// =============================

// Greeting Message on Home Page
const heroTitle = document.querySelector(".hero h2");

if (heroTitle) {
    const hour = new Date().getHours();

    if (hour < 12) {
        heroTitle.textContent = "🌞 Good Morning! Welcome to Ganda Glow";
    }
    else if (hour < 18) {
        heroTitle.textContent = "☀️ Good Afternoon! Welcome to Ganda Glow";
    }
    else {
        heroTitle.textContent = "🌙 Good Evening! Welcome to Ganda Glow";
    }
}

// Contact Form Validation
const form = document.getElementById("contactForm");

if (form) {
    form.addEventListener("submit", function(event){
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if(name === "" || email === "" || message === ""){
            alert("Please complete all fields before submitting.");
            return;
        }

        alert("Thank you for contacting Ganda Glow! We will get back to you soon.");
        form.reset();
    });
}