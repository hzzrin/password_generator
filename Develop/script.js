
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
    var charLength = 0
    while ((charLength < 8 || charLength > 128) || Number.isInteger(charLength) === false) {
        charLength = parseInt(prompt("How many characters would you like your password to be? (8-128)"));
    }

    var upperCase = false
    var lowerCase = false
    var numericalCase = false
    var specialCase = false

    while (!upperCase && !lowerCase && !numericalCase && !specialCase) {

        upperCase = confirm("Click OK if you would like to include uppercase characters");
        lowerCase = confirm("Click OK if you would like to include lowercase characters");
        numericalCase = confirm("Click OK if you would like to include numeric characters");
        specialCase = confirm("Click OK if you would like to include special characters (~!@#$%^&*()-_=+)");
    }

    if (upperCase) {
        userInput.push(charRange[0]);
    }

    if (lowerCase) {
        userInput.push(charRange[1])
    }

    if (numericalCase) {
        userInput.push(charRange[2])
    }

    if (specialCase) {
        userInput.push(charRange[3])
    }

    var password = "";

    userInput = userInput.join("").split("");


    for (var i = 0; i < charLength; i++) {

        var index = (Math.floor(Math.random() * userInput.length));
        password = password + userInput[index]
    }

    return password

}


generateBtn.addEventListener("click", writePassword);