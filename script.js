// ==========================================
// 1. STATE VARIABLES
// ==========================================
let coins = 100;       
let likes = 0;         
let copies = 0;        
let callHistory = [];  
// ==========================================
// 2. DOM ELEMENTS (Selecting HTML tags)
// ==========================================

const coinsDisplay = document.getElementById('coins-display');      
const likesDisplay = document.getElementById('likes-display');        
const copiesDisplay = document.getElementById('copies-display');     
const servicesContainer = document.getElementById('services-container');
const historyList = document.getElementById('history-list');           
const clearHistoryBtn = document.getElementById('clear-history-btn');  
// ==========================================
// 3. SERVICE DATA
// ==========================================
const services = [
    {
        name: "National Emergency Number",
        englishName: "National Emergency",
        number: "999",
        tag: "All",
        icon: "./assets/emergency.png",
        bgClass: "bg-red-50" // Light red background for the icon
    },
    {
        name: "Police Helpline Number",
        englishName: "Police",
        number: "999",
        tag: "Police",
        icon: "./assets/police.png",
        bgClass: "bg-blue-50"
    },
    {
        name: "Fire Service Number",
        englishName: "Fire Service",
        number: "999",
        tag: "Fire",
        icon: "./assets/fire-service.png",
        bgClass: "bg-orange-50"
    },
    {
        name: "Ambulance Service",
        englishName: "Ambulance",
        number: "1994-999999",
        tag: "Health",
        icon: "./assets/ambulance.png",
        bgClass: "bg-red-50"
    },
    {
        name: "Women & Child Helpline",
        englishName: "Women & Child Helpline",
        number: "109",
        tag: "Help",
        icon: "./assets/emergency.png",
        bgClass: "bg-pink-50"
    },
    {
        name: "Anti-Corruption Helpline",
        englishName: "Anti-Corruption",
        number: "106",
        tag: "Govt.",
        icon: "./assets/emergency.png",
        bgClass: "bg-gray-50"
    },
    {
        name: "Electricity Helpline",
        englishName: "Electricity Outage",
        number: "16216",
        tag: "Electricity",
        icon: "./assets/emergency.png",
        bgClass: "bg-red-50"
    },
    {
        name: "Brac Helpline",
        englishName: "Brac",
        number: "16445",
        tag: "NGO",
        icon: "./assets/brac.png",
        bgClass: "bg-orange-50"
    },
    {
        name: "Bangladesh Railway Helpline",
        englishName: "Bangladesh Railway",
        number: "163",
        tag: "Travel",
        icon: "./assets/Bangladesh-Railway.png",
        bgClass: "bg-green-50"
    }
];

// ==========================================
// 4. FUNCTIONS
// ==========================================
function updateUI() {
    coinsDisplay.innerText = `${coins} 🪙`;
    likesDisplay.innerText = `${likes} ❤️`;
    copiesDisplay.innerText = `${copies} Copy`;
}
