//import

import { symbols } from "./symbols.js";

//get stuff from index.html

const generateButton = document.getElementById("generateSymbol");
const generatedSymbol = document.getElementById("generatedSymbol");
const multipleSymbol = document.getElementById("generateMultipleSymbols")

//generate random symbol

generateButton.addEventListener('click', ()=>{
    const randomIndex = Math.floor(Math.random() * symbols.length);
    generatedSymbol.innerText = symbols[randomIndex];
})

//multiple symbols

multipleSymbol.addEventListener("click",()=>{
    const multipleSymbol = document.getElementById("multipleSymbol");
    const numberOfSymbols = 0;
    switch (numberOfSymbols){
        
    }
    const randomMultipleIndex = Math.floor(Math.random() * symbols.length);
 })
 