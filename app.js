// ==========================================
// BHASHARAKSHAK - MAIN JAVASCRIPT
// ==========================================

document.addEventListener("DOMContentLoaded", function () {

    console.log("BhashaRakshak website loaded successfully.");

    // Current year automatically update
    const yearElement = document.querySelector(".copyright");

    if (yearElement) {
        const currentYear = new Date().getFullYear();

        yearElement.innerHTML =
            `© ${currentYear} BhashaRakshak | Language Preservation Project`;
    }

});