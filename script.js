import { db, collection, getDocs } from "./firebase.js";

// Function to load menu items from Firestore
async function loadMenu() {
    const menuContainer = document.getElementById("menu-items");
    menuContainer.innerHTML = "<p>Loading menu...</p>"; // Show loading text

    try {
        const menuRef = collection(db, "menu");
        const querySnapshot = await getDocs(menuRef);
        menuContainer.innerHTML = ""; // Clear loading message

        querySnapshot.forEach(doc => {
            const item = doc.data();
            const menuItem = createMenuItem(item); // Create menu item element
            menuContainer.appendChild(menuItem); // Append to container
        });
    } catch (error) {
        console.error("Error loading menu:", error);
        menuContainer.innerHTML = "<p>Error loading menu. Please try again.</p>";
    }
}

// Function to create a menu item element
function createMenuItem(item) {
    const card = document.createElement("div");
    card.classList.add("card", item.category);

    // Image with fallback in case the link is broken
    const img = document.createElement("img");
    img.src = item.image || 'placeholder.jpg'; // Fallback image
    img.alt = item.name;
    img.onerror = () => img.src = 'placeholder.jpg'; // Set fallback image if broken link

    const cardContent = document.createElement("div");
    cardContent.classList.add("card-content");

    const cardTitle = document.createElement("div");
    cardTitle.classList.add("card-title");
    cardTitle.textContent = item.name;

    const cardDescription = document.createElement("div");
    cardDescription.classList.add("card-description");
    cardDescription.textContent = item.description;

    const cardPrice = document.createElement("div");
    cardPrice.classList.add("card-price");
    cardPrice.textContent = `${item.price} ETB`;

    // Append all content inside card
    cardContent.appendChild(cardTitle);
    cardContent.appendChild(cardDescription);
    cardContent.appendChild(cardPrice);
    card.appendChild(img);
    card.appendChild(cardContent);

    return card;
}

// Filter items by category
function filterCategory(category) {
    const allItems = document.querySelectorAll('.card');
    allItems.forEach(item => {
        // Show items that match the category or show all items if 'all' is selected
        if (category === 'all' || item.classList.contains(category)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// Load menu on page load
window.onload = loadMenu;
