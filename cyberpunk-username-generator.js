// Array of cyberpunk-themed words for each part of the username
const prefixes = ["Neon", "Shadow", ... ]; // Your array of prefixes
const suffixes = ["Byte", "Punk", ... ]; // Your array of suffixes

// Function to generate a random cyberpunk username
function generateCyberpunkUsername() {
    // Randomly select a prefix and a suffix
    const randomPrefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    const randomSuffix = suffixes[Math.floor(Math.random() * suffixes.length)];

    // Construct and return the username
    return randomPrefix + randomSuffix;
}

// Example usage
const username = generateCyberpunkUsername();
console.log("Your cyberpunk username is: " + username);
