// ==========================================
// 1. STATE VARIABLES
// ==========================================
// Think of these as the "memory" of our app.
// We store data here so we can remember it when the user interacts.
let coins = 100;        // User starts with 100 coins
let likes = 0;          // Total likes count starts at 0
let copies = 0;         // Total copies count starts at 0
let callHistory = [];   // An empty list (array) to store details of calls made

// ==========================================
// 2. DOM ELEMENTS (Selecting HTML tags)
// ==========================================
// In order to change HTML from JavaScript, we first need to "select" the elements.
// We use document.getElementById('id-name') to find specific tags by their ID.
const coinsDisplay = document.getElementById('coins-display');         // The button showing coin count
const likesDisplay = document.getElementById('likes-display');         // The button showing like count
const copiesDisplay = document.getElementById('copies-display');       // The button showing copy count
const servicesContainer = document.getElementById('services-container'); // The big box where we will put our cards
const historyList = document.getElementById('history-list');           // The sidebar list for call history
const clearHistoryBtn = document.getElementById('clear-history-btn');  // The "Clear" button
