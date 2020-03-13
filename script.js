// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword(numbers) {
  var numbers = "0123456789";
  var lowers = "abcdefghijklmnopqrstuvwxyz";
  var uppers = lowers.toUpperCase();
  var specials = "!$%^&*()-=+[]{};#:@~,./<>?";   // space has been removed as it is not a valid password character choice
  var numberArr = numbers.split("");
  var lowerArr = lowers.split("");
  var upperArr = uppers.split("");
  var specialArr = specials.split("");
  var tmpPwd = "";
  var newPassword = "";
  var pwdLength = -1;

  while (pwdLength<8 || pwdLength > 128) {
    var pwdLength = prompt("Enter desired password length (between 8 and 128 characters") * 1;
  }
 
  var specialCheck = confirm("Do you want your password to contain special characters? (e.g. #$%^&)");
  var numberCheck = confirm("Do you want your password to contain numbers?");
  var upperCheck = confirm("Do you want your password to contain upper case characters?");
  var lowerCheck = confirm("Do you want your password to contain lower case characters?");

  if (specialCheck) {      // add special characters string to temporary password string if user selects
    tmpPwd+=specials;
  }
  if (numberCheck) {           // add numbers string to temporary password string if user selects
    tmpPwd+=numbers;
  }
  if (upperCheck) {       // add upper-case characters to temporary password string if user selects
    tmpPwd+=uppers;
  }
  if (lowerCheck) {       //add upper-case characters to temporary password string if user selects
    tmpPwd+=lowers;
  }
  if (specialCheck || numberCheck || upperCheck || lowerCheck) {
    var passwordArr = tmpPwd.split("");
    for (let i = 0; i < pwdLength; i++) {
      let r = Math.floor(Math.random() * passwordArr.length);

    newPassword = newPassword + passwordArr[r];
    console.log (r);
    }
  }
  else {
    alert("Password must contain valid characters!");
  }

  return newPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
