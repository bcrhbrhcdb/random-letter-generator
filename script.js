//import
import { symbols } from "./symbols.js";

//get stuff from index.html
const generateButton = document.getElementById("generateSymbol");
const generatedSymbol = document.getElementById("generatedSymbol");
const multipleSymbolButton = document.getElementById("generateMultipleSymbols");
const symbolCountInput = document.getElementById("symbolCount");

// Function to get a random symbol
function getRandomSymbol() {
    return symbols[Math.floor(Math.random() * symbols.length)];
}

// Function to get multiple random symbols
function getMultipleRandomSymbols(count) {
    let result = '';
    for (let i = 0; i < count; i++) {
        result += getRandomSymbol();
        // 20% chance to add a space between symbols
        if (Math.random() < 0.2 && i < count - 1) {
            result += '-';
        }
    }
    return result;
}

//generate random symbol
generateButton.addEventListener('click', () => {
    generatedSymbol.innerText = getRandomSymbol();
    console.log(generatedSymbol.innerText);
});

//multiple symbols
multipleSymbolButton.addEventListener("click", () => {
    const numberOfSymbols = parseInt(symbolCountInput.value);

    if (isNaN(numberOfSymbols) || numberOfSymbols < 2 || numberOfSymbols > 100000) {
        generatedSymbol.innerText = "Please enter a number between 2 and 100000";
        return;
    }

    generatedSymbol.innerText = getMultipleRandomSymbols(numberOfSymbols);
});
