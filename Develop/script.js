// Define variables 

var generateBtn = document.querySelector("#generate");

var charLength;
var upperConfirm;
var lowerConfirm;
var numberConfirm;
var specialConfirm;
var userInput;

// Setting numbers and special characters  
var numberCase = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

var specialCase = ["!", "@", "#", "$", "%", "&", "^", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", 
                    " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

// Setting lowercases and uppercases using string toUpperCase () method. 

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", 
                  "t", "u", "v", "w", "x", "y", "z"];

var upperInput = [];
var toUpper = function (make) {
  return make.toUpperCase();
};

upperCase = lowerCase.map(toUpper);


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Adding event listener to generate button 
generateBtn.addEventListener("click", writePassword);


// Functions for users to start 

function generatePassword () {
  charLength = prompt("How many characters would you like your password to be (8-128)?");
  
  if (charLength < 8 || charLength > 129) {
    charLength = prompt("Please choose between 8 and 128");
  } else {
    upperConfirm = confirm("Would you like to include uppercase characters?");
    lowerConfirm = confirm("Would you like to include lowercase characters?");
    numberConfirm = confirm("Would you like to include numbers?");
    specialConfirm = confirm("Would you like to include special characters (~!@@#$%%^&*()_+?)?")
  };

  if (!upperConfirm && !lowerConfirm && !numberConfirm && !specialConfirm) {
    userInput = alert("Please choose at least one character type");
  } 

  // if the user chooses four options 

  else if (upperConfirm && lowerConfirm && numberConfirm && specialConfirm) {
    userInput = lowerCase.concat(upperCase, numberCase, specialCase);
  }

  // if the user chooses three options

  else if (upperConfirm && lowerConfirm && numberConfirm) {
    userInput = lowerCase.concat(upperCase, numberCase);
  }

  else if (upperConfirm && lowerConfirm && specialConfirm) {
    userInput = lowerCase.concat(upperCase, specialCase);
  }

  else if (upperConfirm && numberConfirm && specialConfirm) {
    userInput = upperCase.concat(numberCase, specialCase);
  }

  else if (lowerConfirm && numberConfirm && specialConfirm) {
    userInput = lowerCase.concat(numberCase, specialCase);
  }

  // If the user chooses two options

  else if (upperConfirm && lowerConfirm) {
    userInput = lowerCase.concat(upperCase);
  }

  else if (upperConfirm && numberConfirm) {
    userInput = upperCase.concat(numbers);
  }

  else if (upperConfirm && specialConfirm) {
    userInput = upperCase.concat(specialCase);
  }

  else if (lowerConfirm && numberConfirm) {
    userInput = lowerCase.concat(numberCase);
  }

  else if (lowerConfirm && specialConfirm) {
    userInput = lowerCase.concat(specialCase);
  }

  else if (numberConfirm && specialConfirm) {
    userInput = numbers.concat(special);
  }

  // if the user chooses one option

  else if (upperConfirm) {
    userInput = upperCase;
  }

  else if (lowerConfirm) {
    userInput = lowerCase;
  }

  else if (numberConfirm) {
    userInput = numberCase;
  }

  else if (specialConfirm) {
    userInput = specialCase;
  }

  // Empty variable for password input 

  var passwordInput = [];

  // Loop for random selection 
  for (var i = 0; i < charLength; i++) {
    var allCharacters = userInput[Math.floor(Math.random() * userInput.length)];
    passwordInput.push(allCharacters);
  }

  // output of the password 

  var password = passwordInput.join("");
  return password;

}