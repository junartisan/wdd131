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


const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Alabang Philippines Temple",
        location: "Alabang, Muntinlupa City, Philippines",
        dedicated: "2026, January, 18",
        area: 2620,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/alabang-philippines-temple/alabang-philippines-temple-67738-thumb.jpg"
    },
    {
        templeName: "Cebu Philippines Temple",
        location: "Cebu City, Philippines",
        dedicated: "2010, June, 13",
        area: 8000,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/cebu-city-philippines-temple/cebu-city-philippines-temple-56045-thumb.jpg"
    },
    {
        templeName: "Manila Philippines Temple",
        location: "Quezon City, Philippines",
        dedicated: "1984",
        area: 10000,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manila-philippines/800x500/manila-philippines-temple-lds-993617-wallpaper.jpg"

    },

    
  ];


function createTempleCard() {
    temples.forEach(temple => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedication = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = temple.templeName;
        location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
        dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
        area.innerHTML = `<span class="label">Size:</span> ${temple.area}`;
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName} Temple`);
        img.setAttribute("loading", "lazy");

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(img);

        document.querySelector(".res-grid").appendChild(card);
    })
}

createTempleCard();

// Temple Card filter 
function displayTemples(filteredTemples) {
  const container = document.querySelector(".res-grid");
  container.innerHTML = ""; // Clear current cards

  filteredTemples.forEach(temple => {
      let card = document.createElement("section");
      // ... (Keep your existing card creation logic here) ...
      card.innerHTML = `
          <h3>${temple.templeName}</h3>
          <p><span class="label">Location:</span> ${temple.location}</p>
          <p><span class="label">Dedicated:</span> ${temple.dedicated}</p>
          <p><span class="label">Size:</span> ${temple.area} sq ft</p>
          <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
      `;
      container.appendChild(card);
  });
}

// Step 2: Add Filter Logic
const oldLink = document.querySelector("#old");
const newLink = document.querySelector("#new");
const homeLink = document.querySelector("#home");

// Old Filter: Dedicated before 1900
oldLink.addEventListener("click", () => {
  const oldTemples = temples.filter(temple => {
      const year = parseInt(temple.dedicated.split(",")[0]);
      return year < 1990;
  });
  displayTemples(oldTemples);
});

// New Filter: Dedicated after 2000
newLink.addEventListener("click", () => {
  const newTemples = temples.filter(temple => {
      const year = parseInt(temple.dedicated.split(",")[0]);
      return year > 2000;
  });
  displayTemples(newTemples);
});

// Home Filter: Show all
homeLink.addEventListener("click", () => {
  displayTemples(temples);
});

// Initial load
displayTemples(temples);