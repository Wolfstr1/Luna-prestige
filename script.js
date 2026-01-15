/**
 * LUNA PRESTIGE - FRAGRANCE MENU
 * This script handles the filtering and display of perfumes 
 * based on the Gender categories from the provided menu.
 */

// 1. DATA: An array of objects containing the perfume information from the image
const perfumes = [
    // --- FOR MEN ---
    { name: "Acqua di Gio", house: "Giorgio Armani", type: "Male", notes: "Sea Notes, Lime, Jasmine, Cedar" },
    { name: "Aventus", house: "Creed", type: "Male", notes: "Pineapple, Birch, Musk, Blackcurrant" },
    { name: "Boss", house: "Hugo", type: "Male", notes: "Apple, Cinnamon, Sandalwood" },
    { name: "Chanel Bleu", house: "Chanel", type: "Male", notes: "Grapefruit, Incense, Ginger, Cedar" },
    { name: "Eros Flame", house: "Versace", type: "Male", notes: "Chinotto, Black Pepper, Rosemary, Vanilla" },
    { name: "Sauvage Elixir", house: "Dior", type: "Male", notes: "Licorice, Lavender, Nutmeg, Cinnamon" },
    { name: "Ultra Male", house: "Jean Paul Gaultier", type: "Male", notes: "Pear, Lavender, Mint, Vanilla" },

    // --- FOR WOMEN ---
    { name: "Black Opium", house: "Yves Saint Laurent", type: "Female", notes: "Coffee, Vanilla, Pear, Pink Pepper" },
    { name: "Cloud", house: "Ariana Grande", type: "Female", notes: "Whipped Cream, Coconut, Praline, Lavender" },
    { name: "English Pear and Freesia", house: "Jo Malone London", type: "Female", notes: "Pear, Melon, Freesia, Patchouli" },
    { name: "Good Girl", house: "Carolina Herrera", type: "Female", notes: "Almond, Coffee, Tuberose, Tonka Bean" },
    { name: "Libre", house: "Yves Saint Laurent", type: "Female", notes: "Lavender, Mandarin Orange, Vanilla" },
    { name: "Eclat", house: "Lanvin", type: "Female", notes: "Lilac, Peony, Green Tea, Peach Blossom" },

    // --- UNISEX ---
    { name: "Baccarat", house: "Maison Francis Kurkdjian", type: "Unisex", notes: "Saffron, Jasmine, Amberwood, Fir Resin" },
    { name: "Bianco Latte", house: "Giardini Di Toscana", type: "Unisex", notes: "Caramel, Coumarin, Honey, Vanilla" },
    { name: "By The Fireplace", house: "Maison Martin Margiela", type: "Unisex", notes: "Chestnut, Vanilla, Cloves, Guaiac Wood" },
    { name: "Santal 33", house: "Le Labo", type: "Unisex", notes: "Sandalwood, Leather, Papyrus, Cardamom" },
    { name: "Tobacco Vanille", house: "Tom Ford", type: "Unisex", notes: "Tobacco Leaf, Vanilla, Spices, Cacao" }
];

/**
 * 2. THE FUNCTION: This is the core logic of the application.
 * It filters the data and updates the HTML view.
 */
function filterPerfumes(gender) {
    // Select the display area in our HTML
    const displayArea = document.getElementById('perfume-display');
    
    // Clear the current items so we can show the new filtered ones
    displayArea.innerHTML = "";

    // Filter the array: If gender is 'All', show everything. 
    // Otherwise, only show items where the type matches the button clicked.
    const filtered = perfumes.filter(p => gender === 'All' || p.type === gender);

    // Loop through the filtered list and create the HTML structure for each card
    filtered.forEach(p => {
        const card = `
            <div class="col-md-4">
                <div class="perfume-card">
                    <span class="category-tag">${p.type}</span>
                    <h3>${p.name}</h3>
                    <p class="text-muted small">${p.house}</p>
                    <hr>
                    <p class="description-text">
                        <strong>Key Notes:</strong> ${p.notes}
                    </p>
                </div>
            </div>
        `;
        // Append the new card to the display area
        displayArea.innerHTML += card;
    });
}

// 3. INITIAL LOAD: Ensure the page displays all perfumes when it first opens
filterPerfumes('All');