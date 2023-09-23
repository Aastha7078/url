document.addEventListener("DOMContentLoaded", function () {
    const shortenForm = document.getElementById("shorten-form");
    const longUrlInput = document.getElementById("long-url");
    const shortenedUrlDiv = document.getElementById("shortened-url");
    const shortUrlAnchor = document.getElementById("short-url");

    shortenForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const longUrl = longUrlInput.value.trim();

        // You can replace this with your own URL shortening logic.
        // For this example, we'll simply display the input URL.
        const shortUrl = longUrl;

        shortUrlAnchor.href = shortUrl;
        shortUrlAnchor.textContent = shortUrl;
        shortenedUrlDiv.classList.remove("hidden");

        // Optional: Clear the input field after shortening.
        longUrlInput.value = "";
    });
});
