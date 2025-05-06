// Check if the randomDogFactButton exists before attaching the event listener
const dogFactButton = document.getElementById("randomDogFactButton");

if (dogFactButton) {
    const clickSound = document.getElementById("clickSound");
    const dogFactElement = document.getElementById("dogFact");

    // Array of random dog facts
    const dogFacts = [
        "Puppies are born with their eyes closed and begin to open them around 10-14 days after birth.",
        "The Basenji dog is known for not barking, but it makes a variety of other sounds.",
        "A Greyhound can run as fast as 45 miles per hour.",
        "A dog’s wet nose helps to trap scent particles, enhancing their sense of smell.",
        "A dog's sense of smell is 40 times more powerful than a human's.",
		"The Great Dane holds the record for the tallest dog, with one measuring 44 inches at the shoulder.",
		"While they don’t sweat like humans, dogs sweat from their paws to help cool down.",
		"A dog’s heart rate can range from 60 to 160 beats per minute, depending on the breed, age, and physical condition.",
		"The oldest recorded dog lived to be 29 years and 5 months old. His name was Bluey, and he was an Australian Cattle Dog.",
		"Studies have shown that dogs can recognize and respond to human emotions, including happiness, sadness, and anger.",
		"Dogs can hear sounds at frequencies as high as 65,000 Hz (while humans can only hear sounds up to 20,000 Hz).",
    ];

    // Button click event
    dogFactButton.addEventListener("click", function() {
        // Play the click sound
        clickSound.play();

        // Generate a random index from the dogFacts array
        const randomFact = dogFacts[Math.floor(Math.random() * dogFacts.length)];

        // Display the random fact in the <p> element
        dogFactElement.textContent = randomFact;
    });
}

// Apply saved theme on page load
window.addEventListener("DOMContentLoaded", () => {
  const mode = localStorage.getItem("mode") === "dark"; // Get the theme mode from localStorage
  
  // Apply the dark mode state to <html> on load
  if (mode) {
    document.documentElement.classList.add("dark-mode");
    document.getElementById("input").checked = true; // Update the checkbox state
  } else {
    document.documentElement.classList.remove("dark-mode");
    document.getElementById("input").checked = false;
  }
});

// Handle toggle
document.getElementById('input').addEventListener('change', function () {
  const isDark = this.checked;
  localStorage.setItem("mode", isDark ? "dark" : "light"); // Save the theme to localStorage under the same key
  updateTheme(isDark); // Update the theme on the page
});

// Update theme across page elements
function updateTheme(isDark) {
  if (isDark) {
    document.documentElement.classList.add("dark-mode");
    document.querySelector("header")?.classList.add("dark-mode");
    document.querySelector("nav")?.classList.add("dark-mode");
    document.querySelectorAll(".button").forEach(btn => btn.classList.add("dark-mode"));
  } else {
    document.documentElement.classList.remove("dark-mode");
    document.querySelector("header")?.classList.remove("dark-mode");
    document.querySelector("nav")?.classList.remove("dark-mode");
    document.querySelectorAll(".button").forEach(btn => btn.classList.remove("dark-mode"));
  }
}
