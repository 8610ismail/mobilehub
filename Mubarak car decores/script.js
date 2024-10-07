function Search(){
    const input = document.getElementById('search');
    const form = document.getElementById ('form');
    if (form.style.display === 'flex') {
        form.style.display = 'none';
    } else {
        form.style.display = 'flex';
    }
}
function searchProduct(event) {
    // Prevent page refresh (in case you are working inside a form)
    if (event) {
        event.preventDefault();
    }

    // Get the search input value
    const searchValue = document.getElementById("search").value.toLowerCase();
    
    // Get all product divs
    const products = document.querySelectorAll("#product-container .photo");
    
    // Loop through products and show/hide based on search input
    products.forEach(product => {
        const productName = product.querySelector("p").textContent.toLowerCase();
        
        if (productName.includes(searchValue)) {
            product.style.display = "block";  // Show matching product
        } else {
            product.style.display = "none";  // Hide non-matching product
        }
    });
}
const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');
const chatContainer = document.getElementById('chat-container');
const chatIcon = document.getElementById('chat-icon');

// Example prompts and responses
const botResponses = {
    "hello": "Hello! How can I help you with your mobile service today?",
    "services": "We offer mobile repair, data plans, and device upgrades.",
    "repair": "We can repair broken screens, batteries, and more. What do you need help with?",
    "data plans": "We offer multiple data plans. Please let us know your budget.",
    "upgrade": "Looking for an upgrade? We have the latest devices available!",
    "contact": "You can reach us at (555) 123-4567 or email us at support@mobileservice.com.",
    "location": "We are located at 123 Mobile St., Tech City.",
    "offers": "We have special discounts on selected data plans and accessories.",
    "track order": "Please provide your order number to track your order.",
    "bye": "Goodbye! Feel free to come back if you need more help!"
};

function toggleChat() {
    if (chatContainer.style.display === "none" || chatContainer.style.display === "") {
        chatContainer.style.display = "flex";
    } else {
        chatContainer.style.display = "none";
    }
}

function sendMessage() {
    const userMessage = userInput.value.trim().toLowerCase();
    if (userMessage === "") return;

    displayMessage(userMessage, "user-message");
    userInput.value = "";

    // Generate bot response
    setTimeout(() => {
        const response = botResponses[userMessage] || "I'm sorry, I didn't understand that. Can you please rephrase?";
        displayMessage(response, "bot-message");
    }, 500);
}

function displayMessage(message, className) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add(className);
    messageDiv.textContent = message;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;  // Auto-scroll to the bottom
}
function Burger(){
    const navham = document.getElementById('nav-ham');

    if (navham.style.display === 'flex') {
        navham.style.display = 'none';
    } else {
        navham.style.display = 'flex';
    }
}