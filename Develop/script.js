
var charRange = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ", "abcdefghijklnmopqrstuvwxyz", "0123456789", "~!@#$%^&*()-_=+"];

var userInput = [];

var password = "";

var generateBtn = document.querySelector("#generate");

function writePassword() {
    password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

function generatePassword() {
    var charLength = Number(prompt("How many characters would you like your password to be? (8-128)"));
    while ((charLength < 8 || charLength > 128) || Number.isInteger(charLength) === false) {
        charLength = Number(prompt("Length must be 8-128 characters!"));
    }

    var upperCase = confirm("Click OK if you would like to include uppercase characters");
    var lowerCase = confirm("Click OK if you would like to include lowercase characters");
    var numberCase = confirm("Click OK if you would like to include numeric characters");
    var specialCase = confirm("Click OK if you would like to include special characters (~!@#$%^&*()-_=+)");
    while (!upperCase && !lowerCase && !numberCase && !specialCase) {
      alert("You must select at least one character type!");
      upperCase = confirm("Click OK if you would like to include uppercase characters");
      lowerCase = confirm("Click OK if you would like to include lowercase characters");
      numeberCase = confirm("Click OK if you would like to include numeric characters");
      specialCase = confirm("Click OK if you would like to include special characters (~!@#$%^&*()-_=+)");
    }
}

generateBtn.addEventListener("click", writePassword);