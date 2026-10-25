
/* MOBILE NAVIGATION */

const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".navigation");

if (menuToggle && navigation) {

    menuToggle.addEventListener("click", () => {

        const isOpen = navigation.classList.toggle("open");

        menuToggle.setAttribute(
            "aria-expanded",
            String(isOpen)
        );

        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close navigation" : "Open navigation"
        );

    });

    navigation.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            navigation.classList.remove("open");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

        });

    });

}

const carouselImages = [
    "assets/image1.png",
    "assets/image2.png",
    "assets/image3.png"
];

let currentImage = 0;

const imageElement = document.getElementById("carousel-image");
const previousButton = document.getElementById("previous-image");
const nextButton = document.getElementById("next-image");

function changeImage(direction) {
    // Move to the previous or next image
    currentImage =
        (currentImage + direction + carouselImages.length)
        % carouselImages.length;

    // Display the selected image
    imageElement.src = carouselImages[currentImage];
}

// Previous arrow (↑)
previousButton.addEventListener("click", function () {
    changeImage(-1);
});

// Next arrow (↓)
nextButton.addEventListener("click", function () {
    changeImage(1);
});