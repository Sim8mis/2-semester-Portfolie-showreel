
const projectCards = document.querySelectorAll(".project-card");

const overlay = document.getElementById("project-overlay");
const popupImage = document.getElementById("popup-image");
const popupTitle = document.getElementById("popup-title");
const popupDescription = document.getElementById("popup-description");
const closeButton = document.getElementById("popup-close");

function openProject(card) {
    const image = card.querySelector("img");

    // Load the selected project's information
    popupImage.src = image.src;
    popupImage.alt = image.alt;

    popupTitle.textContent = card.dataset.title;
    popupDescription.textContent = card.dataset.description;

    // Show the popup
    overlay.classList.add("active");
    overlay.setAttribute("aria-hidden", "false");

    document.body.style.overflow = "hidden";
    closeButton.focus();
}

function closeProject() {
    overlay.classList.remove("active");
    overlay.setAttribute("aria-hidden", "true");

    document.body.style.overflow = "";
}

// Open a project when its image is clicked
projectCards.forEach(function (card) {
    card.addEventListener("click", function () {
        openProject(card);
    });
});

// Close button
closeButton.addEventListener("click", closeProject);

// Close when clicking the dark background
overlay.addEventListener("click", function (event) {
    if (event.target === overlay) {
        closeProject();
    }
});

// Close with Escape
document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && overlay.classList.contains("active")) {
        closeProject();
    }
});
