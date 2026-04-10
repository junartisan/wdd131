// 1. Select the DOM elements
const full = document.querySelector("#full");
const worldfull = document.querySelector("#world-full");
const short = document.querySelector("#short");
const medium = document.querySelector("#medium");
const currentyear = document.querySelector("#currentyear"); // Matches your id="year"
const month = document.querySelector("#month");
const day = document.querySelector("#day");
const dayofweek = document.querySelector("#dayofweek");
const lastModified = document.querySelector("#lastModified")
// 2. Use the date object
const today = new Date();

// 3. Update elements ONLY if they exist in the HTML (using "if" checks)

if (full) {
    full.innerHTML = `Today is <span class="highlight">${new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(today)}</span>`;
}

if (worldfull) {
    worldfull.innerHTML = `UK: <span class="highlight">${new Intl.DateTimeFormat("en-UK", { dateStyle: "full" }).format(today)}</span>`;
}

if (short) {
    short.innerHTML = `Short: <span class="highlight">${new Intl.DateTimeFormat("en-US", { dateStyle: "short" }).format(today)}</span>`;
}

if (medium) {
    medium.innerHTML = `Medium: <span class="highlight">${new Intl.DateTimeFormat("en-US", { dateStyle: "medium" }).format(today)}</span>`;
}

// Fixed the variable name here to match 'currentyear' from above
if (currentyear) {
    currentyear.innerHTML = today.getFullYear();
}

if (month) {
    month.innerHTML = `getMonth(): <span class="highlight">${today.getMonth()}</span>`;
}

if (day) {
    day.innerHTML = `getDate(): <span class="highlight">${today.getDate()}</span>`;
}

if (dayofweek) {
    dayofweek.innerHTML = `getDay(): <span class="highlight">${today.getDay()}</span>`;
}


// 2. Add this block at the bottom of your script
if (lastModified) {
    // document.lastModified returns a string like "03/07/2026 14:30:00"
    lastModified.innerHTML = `Last Modification: <span class="highlight">${document.lastModified}</span>`;
}

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

/* =========================
   ARRAY + OBJECT
========================= */
const slides = [
    {
        title: "Modern Celestial Room",
        image: "../images/cebu-temple.png",
        description: "Clean and elegant design."
    },
    {
        title: "Minimalist Living Room",
        image: "../images/decorative-wall-mirrors.jpg",
        description: "Simple and relaxing atmosphere."
    },
    {
        title: "Temple Reworks ",
        image: "../images/Finishing-Work-on-the-Salt-Lake-Temples-Celestial-and-Sealing-Rooms.jpg",
        description: "Stylish and functional space."
    }
];

/* =========================
   STATE (localStorage)
========================= */
let currentIndex = localStorage.getItem("slideIndex")
    ? parseInt(localStorage.getItem("slideIndex"))
    : 0;

/* =========================
   FUNCTION 1: SHOW SLIDE
========================= */
function showSlide(index) {
    const slide = slides[index];

    document.getElementById("title").textContent = `${slide.title}`;
    document.getElementById("image").src = `${slide.image}`;
    document.getElementById("description").textContent = `${slide.description}`;

    localStorage.setItem("slideIndex", index);
}

/* =========================
   FUNCTION 2: NEXT
========================= */
function nextSlide() {
    currentIndex++;

    // CONDITIONAL
    if (currentIndex >= slides.length) {
        currentIndex = 0;
    }

    showSlide(currentIndex);
}

/* =========================
   FUNCTION 3: PREVIOUS
========================= */
function prevSlide() {
    currentIndex--;

    // CONDITIONAL
    if (currentIndex < 0) {
        currentIndex = slides.length - 1;
    }

    showSlide(currentIndex);
}

/* =========================
   FUNCTION 4: INIT
========================= */
function initSlider() {
    // ARRAY METHOD
    slides.forEach((slide, index) => {
        console.log(`Slide ${index}: ${slide.title}`);
    });

    showSlide(currentIndex);
}

/* =========================
   DOM + EVENT LISTENERS
========================= */
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("nextBtn").addEventListener("click", nextSlide);
    document.getElementById("prevBtn").addEventListener("click", prevSlide);

    initSlider();
});