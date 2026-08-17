// ========================================
// DAY / NIGHT MODE
// ========================================

// Get the current hour
const hour = new Date().getHours();

// Apply day or night mode
if (hour >= 6 && hour < 18) {

    document.body.classList.add("day");

} else {

    document.body.classList.add("night");

}


// ========================================
// CONTACT ME BUTTON
// ========================================

// Find the Contact Me button
const contactButton = document.getElementById("contactButton");

// Run when Contact Me is clicked
contactButton.addEventListener("click", function () {

    // Open Gmail compose window
    window.open(
        "https://mail.google.com/mail/?view=cm&fs=1&to=harishvignesh2008@gmail.com&su=Portfolio%20Contact",
        "_blank"
    );

});
