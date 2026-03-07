// scripts/getdates.js

// Wait for the DOM to be fully loaded (though defer ensures this, but it's good practice)
document.addEventListener('DOMContentLoaded', function() {
    // 1. Dynamically set the current year in the footer
    const currentYearSpan = document.getElementById('currentyear');
    if (currentYearSpan) {
        const today = new Date();
        const year = today.getFullYear();
        currentYearSpan.textContent = year;
    }

    // 2. Dynamically set the last modified date/time in the second footer paragraph
    const lastModifiedParagraph = document.getElementById('lastModified');
    if (lastModifiedParagraph) {
        // document.lastModified returns a string like "03/07/2026 14:35:12"
        lastModifiedParagraph.innerHTML = `Last modified: ${document.lastModified}`;
    }
});

// Additional safety: if DOMContentLoaded already fired, run immediately.
// But with defer and placing script in head, DOMContentLoaded is safe.
// The code above handles both.