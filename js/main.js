document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".btn");
    const modals = document.querySelectorAll(".modal");
    const spans = document.querySelectorAll(".close");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const modal = document.getElementById(button.getAttribute("data-modal"));
            modal.style.display = "block";
        });
    });

    spans.forEach(span => {
        span.addEventListener("click", () => {
            const modal = document.getElementById(span.getAttribute("data-modal"));
            modal.style.display = "none";
        });
    });

    window.addEventListener("click", (event) => {
        modals.forEach(modal => {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        });
    });
});
