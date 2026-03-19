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

// --- WIND CHILL CALCULATION ---

// 1. Select the weather elements
const tempElement = document.querySelector("#temp");
const speedElement = document.querySelector("#speed");
const chillElement = document.querySelector("#windchill");

// 2. Check if all elements exist before running the math
if (tempElement && speedElement && chillElement) {
    // Get values from the HTML text
    const t = parseFloat(tempElement.textContent);
    const s = parseFloat(speedElement.textContent);

    // Function to calculate wind chill (Metric)
    function calculateWindChill(temp, speed) {
        if (temp <= 10 && speed > 4.8) {
            const wc = 13.12 + (0.6215 * temp) - (11.37 * Math.pow(speed, 0.16)) + (0.3965 * temp * Math.pow(speed, 0.16));
            return `${wc.toFixed(1)}°C`;
        } else {
            return "N/A";
        }
    }

    // 3. Display the result in the span
    chillElement.textContent = calculateWindChill(t, s);
}