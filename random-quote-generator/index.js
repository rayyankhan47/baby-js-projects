const quotes = [
    "The only way to do great work is to love what you do.",
    "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    "Do what you can, with what you have, where you are.",
    "Simplicity is the ultimate sophistication.",
    "Believe you can and you're halfway there."
];

const paragraphElement = document.getElementById("quote");

const usedIndexes = new Set();

const min = 0;
const max = quotes.length - 1;

const generateQuote = () => {

    let randomIndex = Math.floor(Math.random() * (max - min + 1)) + min;

    while (usedIndexes.has(randomIndex)) {
        randomIndex = Math.floor(Math.random() * (max - min + 1)) + min;
        console.log("while loop executed")
    }

    paragraphElement.textContent = quotes[randomIndex];
    console.log("quote added");

    usedIndexes.add(randomIndex);

    if (usedIndexes.length === quotes.length) {
        usedIndexes.clear()
    }
}

