// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Last modified
document.getElementById("lastModified").textContent = document.lastModified;

// Static values
let temp = 28;
let wind = 10;

// Wind chill function (ONE LINE)
function calculateWindChill(t, v) {
    return (13.12 + 0.6215*t - 11.37*Math.pow(v,0.16) + 0.3965*t*Math.pow(v,0.16)).toFixed(1);
}

// Condition check
if (temp <= 10 && wind > 4.8) {
    document.getElementById("windchill").textContent =
        calculateWindChill(temp, wind) + " °C";
} else {
    document.getElementById("windchill").textContent = "N/A";
}