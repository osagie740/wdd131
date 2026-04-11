// ARRAY + OBJECTS ✅
const restaurants = [
    { name: "Mama Put", price: "cheap", rating: 4 },
    { name: "Chicken Republic", price: "cheap", rating: 5 },
    { name: "KFC Lagos", price: "top", rating: 5 },
    { name: "Bukka Hut", price: "cheap", rating: 4 }
];

// LOAD FROM LOCAL STORAGE
const saved = localStorage.getItem("lastFilter");
if (saved) {
    filterRestaurants(saved);
} else {
    displayRestaurants(restaurants);
}

// FUNCTION 1 ✅
function displayRestaurants(list) {
    const container = document.getElementById("restaurantList");
    if (!container) return;

    container.innerHTML = list.map(r =>
        `<div class="card">
            <h3>${r.name}</h3>
            <p>Rating: ${r.rating}</p>
        </div>`
    ).join("");
}

// FUNCTION 2 + CONDITION ✅
function filterRestaurants(type) {
    localStorage.setItem("lastFilter", type);

    if (type === "all") {
        displayRestaurants(restaurants);
    } else {
        const filtered = restaurants.filter(r => r.price === type);
        displayRestaurants(filtered);
    }
}

// FORM EVENT ✅
const form = document.getElementById("contactForm");

if (form) {
    form.addEventListener("submit", function(e) {
        e.preventDefault();
        alert("Message submitted!");
    });
}