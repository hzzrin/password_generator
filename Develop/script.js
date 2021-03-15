// Define variables 

var generateBtn = document.querySelector("#generate");

var length;
var upperconfirm;
var lowerConfirm;
var numberConfirm;
var specialConfirm;
var userInput;


// Setting lowercases and uppercases using string toUpperCase () method. 

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var Upperinput = [];
var toUpper = function (make) {
  return make.toUpperCase();
};

upperCase = lowerCase.map(toUpper);


// Setting numbers and special characters  
var numberCase = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialCase = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Adding event listener to generate button 
generateBtn.addEventListener("click", writePassword);

