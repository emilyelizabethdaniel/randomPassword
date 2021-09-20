var length = 0;
var includeLowerCaseLetters = true;
var includeUpperCaseLetters = true;
var includeNumbers = true;
var includeSpecialCharacters = true;


function askTheQuestions() {
    length = window.prompt("How long do you want your password to be?");
    var lengthAsInt = "";
    lengthAsInt = parseInt(length);
    if (length < 8 || length > 128) {
        alert("Please put in a value between 8-128");
        askTheQuestions();
    } else
        includeSpecialCharacters = window.confirm("Do you want your password to contain special characters?");
    includeCapitalLetters = window.confirm("Do you want your password to contain captial letters?");
    includeLowerCaseLetters = window.confirm("Do you want your password to contain lower case letters?");
    includeNumbers = window.confirm("Do you want your password to contain numbers?")
}

askTheQuestions();

function generateLowerCaseLetter() {
    var lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var random1 = Math.floor((Math.random() * lowercaseLetters.length));
    var randomLowercaseLetter = lowercaseLetters[random1];
    return randomLowercaseLetter;
}



console.log(generateLowerCaseLetter());

function generateCapitalLetter() {
    var capitalLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var random2 = Math.floor((Math.random() * capitalLetters.length));
    var randomCapitalLetter = capitalLetters[random2];
    return randomCapitalLetter
}
console.log(generateCapitalLetter());

function generateSpecialCharacter() {
    var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*"]
    var random3 = Math.floor((Math.random() * specialCharacters.length));
    var randomSpecialCharacter = specialCharacters[random3];
    return randomSpecialCharacter;
}
console.log(generateSpecialCharacter());

function generateRandomNumber() {
    var availableNumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
    var random4 = Math.floor((Math.random() * availableNumbers.length));
    var randomNumber = availableNumbers[random4];
    return randomNumber;
}
console.log(generateRandomNumber());

function generateNewCharacter() {
    var passwordCharOptions = [];
    if (includeLowerCaseLetters) {
        passwordCharOptions.push(generateRandomNumber());
    }

    if (includeLowerCaseLetters) {
        passwordCharOptions.push(generateLowerCaseLetter());
    }

    if (includeUpperCaseLetters) {
        passwordCharOptions.push(generateCapitalLetter());
    }

    if (includeNumbers) {
        passwordCharOptions.push(generateSpecialCharacter());
    }

    var random5 = Math.floor((Math.random() * passwordCharOptions.length));
    return passwordCharOptions[random5];
}



function generatePassword() {

    var newPassword = "";
    var passwordLength = length;
    for (var i = 0; i < passwordLength; i++) {
        newPassword = newPassword + generateNewCharacter();

    }
    return newPassword;
}


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);