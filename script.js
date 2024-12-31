// Initialize Google Maps
let map;
let truckMarker;

function initMap() {
    // Basic map setup (centered at a default location)
    const center = { lat: 0.333055, lng: 32.618066 }; // Nakawa Division
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: center,
    });

    // Example truck location (for demo purposes)
    truckMarker = new google.maps.Marker({
        position: center,
        map: map,
        title: "Garbage Truck",
    });

    // Update truck location every 5 seconds (simulate movement)
    setInterval(updateTruckLocation, 5000);
}

// Simulate truck movement
function updateTruckLocation() {
    const randomLat = 0.333055 + (Math.random() * 0.01 - 0.005); // Random lat change
    const randomLng = 32.618066 + (Math.random() * 0.01 - 0.005); // Random lng change
    const newLocation = { lat: randomLat, lng: randomLng };

    truckMarker.setPosition(newLocation);
    map.setCenter(newLocation);
}

// Handle payment submission (dummy functionality)
document.getElementById("paymentForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const amount = document.getElementById("amount").value;
    alert(`Payment of $${amount} submitted (simulated)!`);
});

// Handle message sending
function sendMessage() {
    const message = document.getElementById("message").value;
    alert(`Message sent: ${message}`);
}

// Simulate an online call
function startCall() {
    alert("Starting a video call... (simulated)");
}
