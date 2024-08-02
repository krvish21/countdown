// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC4YsuEBfu1f_PvIXZsvFv6Rlah4RpQW7E",
    authDomain: "sabaa-4d495.firebaseapp.com",
    databaseURL: "https://sabaa-4d495-default-rtdb.firebaseio.com",
    projectId: "sabaa-4d495",
    storageBucket: "sabaa-4d495.appspot.com",
    messagingSenderId: "78420941009",
    appId: "1:78420941009:web:d65d2872ace3fec43fcdf0"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// Function to calculate days from today
function calculateDays() {
    const today = new Date();
    const startDate = new Date(); // This can be changed to any specific date
    const timeDifference = today - startDate;
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    return daysDifference;
}

// Function to update the countdown in the Firebase database
function updateDatabase(days) {
    database.ref('sabaa-4d495-default-rtdb').set({
        'days_since_meeting': days
    });
}

function fetchDaysFromDatabase() {
    database.ref('sabaa-4d495-default-rtdb').once('days_since_meeting').then((snapshot) => {
        console.log(snapshot.val());
    });
}

// Function to display the countdown
function displayCountdown() {
    const days = calculateDays();
    document.getElementById('countdown').innerText = `Days since start: ${days}`;
    updateDatabase(days);
}

// Initial call to display countdown
displayCountdown();
