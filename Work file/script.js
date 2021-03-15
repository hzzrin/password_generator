// Define variables for characters input 

var generateBtn = document.querySelector("#generate");

var charLength;
var upperConfirm;
var lowerConfirm;
var numberConfirm;
var specialConfirm;
var userInput;

// Setting values for numbers and special characters  

var numberCase = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

var specialCase = ["!", "@", "#", "$", "%", "&", "^", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", 
                    " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

/* Setting values for lowercases and uppercases using string toUpperCase () method. 
this function allows the lowercase letters to be replaced with uppercase letters when needed*/

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", 
                  "t", "u", "v", "w", "x", "y", "z"];

var upperInput = [];
var toUpper = function (make) {
  return make.toUpperCase();
};

upperCase = lowerCase.map(toUpper);


// Writing password function to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Adding event listener to generate button 

generateBtn.addEventListener("click", writePassword);


// Writing functions for the users to start

/* Asking users to choose the number of characters between 8 to 128.
if the users don't choose between these numbers, they are asked to do it again */

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
  

  // Asking users to choose at least one character type if they choose 'cancel' for all options 

  if (!upperConfirm && !lowerConfirm && !numberConfirm && !specialConfirm) {
    userInput = alert("Please choose at least one character type");
  } 


  // Writing condition if the user chooses four options 

  else if (upperConfirm && lowerConfirm && numberConfirm && specialConfirm) {
    userInput = lowerCase.concat(upperCase, numberCase, specialCase);
  }

  // Writing condition if the user chooses three options

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

  // Writing condition if the user chooses two options

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

  // Writing condition if the user chooses one option

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

  // Setting empty variable for password input 

  var passwordInput = [];

  // Setting Loop for random selection 
  for (var i = 0; i < charLength; i++) {
    var allCharacters = userInput[Math.floor(Math.random() * userInput.length)];
    passwordInput.push(allCharacters);
  }

  // Setting output of the password 

  var password = passwordInput.join("");
  return password;

}