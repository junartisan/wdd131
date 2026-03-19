// Calculate Win Chill

const calculateWindChill 

function calculateWindChill (temp, speed) {
    // Check if conditions for wind chill are met
    if (temp <= 10 && speed >4.8) {
        const windChill = 13.12 + (0.6215 * temp) - (11.37 * Math.pow(speed, 0.16)) + (0.3965 * temp * Math.pow(speed, 0.16));
        return windChill.toFixed(1); // Return one decimal place
    } else {
        return "N/A";
    }
    return
}