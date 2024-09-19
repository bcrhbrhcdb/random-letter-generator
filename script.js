//import
import { symbols } from "./symbols.js";

//get stuff from index.html
const generateButton = document.getElementById("generateSymbol");
const generatedSymbol = document.getElementById("generatedSymbol");
const multipleSymbolButton = document.getElementById("generateMultipleSymbols");

//generate random symbol
generateButton.addEventListener('click', ()=>{
    const randomIndex = Math.floor(Math.random() * symbols.length);
    generatedSymbol.innerText = symbols[randomIndex];
    console.log(generatedSymbol);
})

//multiple symbols
multipleSymbolButton.addEventListener("click", () => {
    const multipleSymbolSelect = document.getElementById("moreSymbols");
    const numberOfSymbols = parseInt(multipleSymbolSelect.value);
    let generatedSymbols = '';

    if (isNaN(numberOfSymbols)) {
        generatedSymbol.innerText = "Please select a number of symbols";
        return;
    }

    for (let i = 0; i < numberOfSymbols; i++) {
        const randomIndex = Math.floor(Math.random() * symbols.length);
        generatedSymbols += symbols[randomIndex];
    }

    generatedSymbol.innerText = generatedSymbols;
})