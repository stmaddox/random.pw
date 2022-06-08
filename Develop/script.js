// Assignment code here
function generatePassword() {
  var char = "abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+=-,.<>?ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var pwLength = 8; 
  var password = "";
  for (var i=0;i<pwLength.length;++i) {
    password =+ char.charAt(Math.floor(Math.random() * char.length));
  }
  return generatePassword();
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
