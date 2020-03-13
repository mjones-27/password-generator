// Assignment Code
var generateBtn = document.querySelector("#generate");
var number = "0123456789";
var lower = "abcdefghijklmnopqrstuvwxyz";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var special = " !$%^&*()-=+[]{};#:@~,./<>?";
var numberArr = number.split("");
var lowerArr = lower.split("");
var upperArr = upper.split("");
var specialArr = special.split("");
// TODO: force password length check - and maybe make sure it's a number?
var pwdLength = prompt("Enter desired password length (between 8 and 128 characters") * 1;
var specialChars = confirm("Do you want your password to have special characters? (e.g. #$%^&)");
var lowerChars = confirm("Do you want your password to have lower case characters?");
var upperChars = confirm("Do you want your password to have upper case characters?");


// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  var password = "12345";
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
