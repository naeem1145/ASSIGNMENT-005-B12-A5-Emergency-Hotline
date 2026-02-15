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
        bgClass: "bg-red-50"
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


// Function: Render (Create) the Service Cards
function renderServices() {

    servicesContainer.innerHTML = '';


    services.forEach((service, index) => {

        const card = document.createElement('div');


        card.className = "bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition duration-300";


        card.innerHTML = `
            <div class="flex justify-between items-start mb-4">
                <div class="${service.bgClass} p-3 rounded-full">
                    <img src="${service.icon}" alt="${service.name}" class="w-8 h-8 object-contain">
                </div>
                <!-- Like Button: We pass 'this' to refer to the button itself when clicked -->
                <button class="text-gray-400 hover:text-red-500 transition like-btn" onclick="handleLike(this)">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                    </svg>
                </button>
            </div>
            
            <h3 class="font-bold text-gray-900 text-lg mb-1">${service.name}</h3>
            <p class="text-gray-500 text-sm mb-3">${service.englishName}</p>
            
            <div class="mb-4">
                <span class="text-2xl font-bold text-gray-800">${service.number}</span>
            </div>
            
            <div class="mb-6">
                <span class="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-medium">${service.tag}</span>
            </div>
            
            <div class="flex gap-3">
                <!-- Copy Button: Calls handleCopy with the number -->
                <button onclick="handleCopy('${service.number}')" class="flex-1 bg-gray-50 text-gray-700 font-semibold py-2 px-4 rounded-lg border border-gray-200 hover:bg-gray-100 transition flex justify-center items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5" />
                    </svg>
                    Copy
                </button>
                <!-- Call Button: Calls handleCall with name and number -->
                <button onclick="handleCall('${service.name}', '${service.number}')" class="flex-1 bg-[#00A63E] text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-700 transition flex justify-center items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                    Call
                </button>
            </div>
        `;

        servicesContainer.appendChild(card);
    });
}

// ==========================================
// 5. INTERACTION FUNCTIONS
// ==========================================

function handleLike(btn) {

    if (btn.classList.contains('text-red-500')) {

        btn.classList.remove('text-red-500', 'fill-current');
        btn.querySelector('svg').style.fill = 'none';
        likes--;
    } else {

        btn.classList.add('text-red-500', 'fill-current');
        btn.querySelector('svg').style.fill = 'currentColor';
        likes++;
    }

    updateUI();
}

//Handle copy with counting 
function handleCopy(number) {

    navigator.clipboard.writeText(number).then(() => {

        copies++;
        alert(`Copied: ${number}`);
        updateUI();
    }).catch(err => {

        console.error('Failed to copy text: ', err);
    });
}

// Handle Clicking the Call Button
function handleCall(name, number) {

    if (coins < 20) {
        alert("Not enough coins! You need at least 20 coins to make a call.");
        return;
    }


    coins -= 20;
    updateUI();

    const time = new Date().toLocaleTimeString();
    addToHistory(name, number, time);

    alert(`Calling ${name} (${number})...`);
}

// Add a row to the sidebar history
function addToHistory(name, number, time) {
   
    const emptyMsg = historyList.querySelector('p.text-center');
    if (emptyMsg) {
        emptyMsg.remove();
    }


    const item = document.createElement('div');
    item.className = "bg-gray-50 p-3 rounded-lg border border-gray-100 text-sm";


    item.innerHTML = `
        <div class="font-bold text-gray-800">${name}</div>
        <div class="text-gray-500 text-xs">${number}</div>
        <div class="text-right text-xs text-gray-400 mt-1">${time}</div>
    `;

 
    historyList.prepend(item);
}


clearHistoryBtn.addEventListener('click', () => {
   
    historyList.innerHTML = '<p class="text-gray-400 text-center text-sm py-4">No calls yet.</p>';
});

// ==========================================
// 6. INITIALIZATION
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    updateUI();         
    renderServices();   
});
