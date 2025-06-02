

// document.addEventListener("DOMContentLoaded", function () {
//     // Define the target date (October 25, 2024, at midnight)
//     const targetDate = new Date("2024-10-25T00:00:00");

//     // Function to update the countdown
//     function updateCountdown() {
//         const now = new Date();
//         const difference = targetDate - now;

//         console.log("Current time:", now);  // Debugging current time
//         console.log("Target time:", targetDate);  // Debugging target time
//         console.log("Time difference:", difference);  // Debugging time difference in ms

//         // If the target date has passed, stop the countdown
//         if (difference <= 0) {
//             document.querySelector(".sermon-meta").innerText = "No upcoming event yet";
//             clearInterval(countdownInterval); // Stop further interval updates
//             return;
//         }

//         // Calculate remaining time units
//         const days = Math.floor(difference / (1000 * 60 * 60 * 24));
//         const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//         const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
//         const seconds = Math.floor((difference % (1000 * 60)) / 1000);

//         // Update the HTML with the countdown values
//         document.getElementById("days").innerText = days;
//         document.getElementById("hours").innerText = hours;
//         document.getElementById("minutes").innerText = minutes;
//         document.getElementById("seconds").innerText = seconds;
//     }

//     // Call the update function immediately to set initial values
//     updateCountdown();
//     // Set up interval to update countdown every second
//     const countdownInterval = setInterval(updateCountdown, 1000);
// });

document.addEventListener("DOMContentLoaded", function () {
    // Define the target date (October 25, 2024, at midnight)
    const targetDate = new Date("2025-06-08T10:30:00");

    // Function to update the countdown
    function updateCountdown() {
        const now = new Date();
        const difference = targetDate - now;

        // If the target date has passed, stop the countdown and show message
        if (difference <= 0) {
            document.getElementById("event-status").innerText = "No upcoming event yet";
            clearInterval(countdownInterval); // Stop further interval updates
            return;
        }

        // Calculate remaining time units
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        // Update the HTML with the countdown values
        document.getElementById("days").innerText = days;
        document.getElementById("hours").innerText = hours;
        document.getElementById("minutes").innerText = minutes;
        document.getElementById("seconds").innerText = seconds;
    }

    // Call the update function immediately to set initial values
    updateCountdown();
    // Set up interval to update countdown every second
    const countdownInterval = setInterval(updateCountdown, 1000);
});
