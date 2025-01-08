const inputSlider=document.querySelector("[ data-lengthSlider]")
const lowercase = document.querySelector('#lowercase');
const numbers = document.querySelector('#numbers');
const symbols = document.querySelector('#symbols');
let lengthDisplay = document.querySelector('[lengthDisplay');
let generateBtn = document.querySelector("#generateBtn");
// console.log(lengthDisplay)
let slider = document.querySelector('input[type=range]');
let checkBoxes = document.querySelectorAll("input[type=checkbox]");
let indicator = document.querySelector('.indicator');
let copyMessage = document.querySelector("[copyMessage]");
let copyBtn = document.querySelector(".copyBtn");
let passwordDisplay = document.querySelector("input[passwordDisplay]");
const Symbols = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
let password="";
let passwordLength=15;
let checkcount=1;
handleSlider();
// set strength circle color to grey


// set passwordlength
function handleSlider(){
    inputSlider.value=passwordLength;
    lengthDisplay.innerText=passwordLength;
    //

}
function setIndicator(color){
     indicator.style.backgroundColor=color;
}
function getRandomInteger(min,max){
    Math.floor(Math.random()*(max-min))+min;
}
function genrateRandomNumber(){
    return getRandomInteger(0,9);
}
function lowerCase(){
    return String.fromCharCode(getRandomInteger(97,123));
}
function upperCase(){
    return String.fromCharCode(getRandomInteger(65,91));
}
function genrateSymbol(){
  const randNum=getrndInteger(0,symbols.length);
  return symbols.charAt(randNUm);
}

function calcStrength() {
    let hasUpper = false;
    let hasLower = false;
    let hasNumber = false;
    let hasSymbol = false;
    if (uppercase.checked) hasUpper = true;
    if (lowercase.checked) hasLower = true;
    if (numbers.checked) hasNumber = true;
    if (symbols.checked) hasSymbol = true;

    if (hasUpper && hasLower && (hasNumber || hasSymbol) && passwordLength >= 8) {
        setIndicator("#0f0");
    } else if (
        (hasLower || hasUpper) &&
        (hasNumber || hasSymbol) &&
        passwordLength >= 6
    ) {
        setIndicator("#ff0");
    } else {
        setIndicator("#f00");
    }
}

async function copyContent() {
    try {
        await navigator.clipboard.writeText(passwordDisplay.value);

        copyMessage.innerText = "Copied"
    }
    catch (e) {
        // alert("Something went wrong in CopyContent");
        copyMessage.innerText = "Failed";
    }

    copyMessage.classList.add('active');

    setTimeout(() => {
        copyMessage.classList.remove('active');
    }, 2000)
}