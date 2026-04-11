const restaurants = [
    { name: "Mama Put", price: "cheap", rating: 4, image: "images/ewedu.jfif" },
    { name: "Chicken Republic", price: "cheap", rating: 5, image: "images/chicken.jfif" },
    { name: "KFC Lagos", price: "top", rating: 5, image: "images/burger.jfif" },
    { name: "Dominos Pizza", price: "top", rating: 4, image: "images/pizza.jfif" },
    { name: "Shawarma Spot", price: "cheap", rating: 4, image: "images/shawarma.jfif" },
    { name: "Jollof House", price: "top", rating: 5, image: "images/jellof.jfif" }
];

// Load last filter
const saved = localStorage.getItem("filter");

if (saved) {
    filterRestaurants(saved);
} else {
    displayRestaurants(restaurants);
    displayFeatured();
}

// Display restaurants
function displayRestaurants(list) {
    const container = document.getElementById("restaurantList");
    if (!container) return;

    container.innerHTML = list.map(r => `
        <div class="card">
            <img src="${r.image}" alt="${r.name}" loading="lazy">
            <h3>${r.name}</h3>
            <p>Rating: ${r.rating}</p>
        </div>
    `).join("");
}

// Filter
function filterRestaurants(type) {
    localStorage.setItem("filter", type);

    if (type === "all") {
        displayRestaurants(restaurants);
    } else {
        const filtered = restaurants.filter(r => r.price === type);
        displayRestaurants(filtered);
    }
}

// Featured section
function displayFeatured() {
    const container = document.getElementById("featured");
    if (!container) return;

    container.innerHTML = restaurants.slice(0, 3).map(r => `
        <div class="card">
            <img src="${r.image}" alt="${r.name}" loading="lazy">
            <h3>${r.name}</h3>
        </div>
    `).join("");
}

// Form handling
const form = document.getElementById("contactForm");

if (form) {
    form.addEventListener("submit", function(e) {
        e.preventDefault();
        alert("Message sent successfully!");
    });
}