// Assignment Code
var generateBtn = document.querySelector("#generate");

// Prompts that come up after you click generate password
while (isNaN(length) || length < 8 || length > 128) length = Number(prompt("Length must be 8-128 characters. How many characters would you like your password to be?"));

var uppers = confirm("Would you like to use uppercase letters?");
var lowers = confirm("Would you like to use lowercase letters?");
var numbers = confirm("Would you like to use numbers?");
var symbols = confirm("Would you like to use special characters?");

function getUserInputs(){
  //first check the values, and force the user to re-choose character types if they're invalid.
  while (!uppers && !lowers && !numbers && !symbols) {
    alert("You must select at least one character type!");
    uppers = confirm("Would you like to use uppercase letters?");
    lowers = confirm("Would you like to use lowercase letters?");
    numbers = confirm("Would you like to use numbers?");
    symbols = confirm("Would you like to use special characters?");
  }
  //then once that's all done, we can call buildPassword!
  writePassword()
}
getUserInputs() //runs the function here. We can run it again later if we ever need to.

// Write password to the #password input
function writePassword() {
 var password = generatePassword();
 var passwordText = document.querySelector("#password");
 passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function buildPassword() { //I renamed this because we already HAVE a writePassword function.
 var password = "";
 var allowed = {};

 //the four lines below aren't quite functioning as you want them to.
 //make sure "random" is a function you've defined if you're going to call random(somestuff)!
 if (uppers) password += rando(allowed.uppers = "QWERTYUIOPASDFGHJKLZXCVBNM");
 if (lowers) password += rando(allowed.lowers = "qwertyuiopasdfghjklzxcvbnm");
 if (numbers) password += rando(allowed.numbers = "1234567890");
 if (symbols) password += rando(allowed.symbols = "!@#$%^&*(){}[]=<>/,.");
 for (var i = password.length; i < length; i++) password += random(random(allowed).value);
 document.getElementById("password").value = randoSequence(password).join("");
};