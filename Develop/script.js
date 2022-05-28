// Assignment code here
var lowLetter = "abcdefghijklmnopqrstuvwxyz"
var upLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var number = "0123456789"
var specialChar ="!@#$%^&*()_-=+><.,"
var finalPassword = ""
var generatePassword = function() {
  //step 1. click button to generate password
  //Step 2. When we click it prompts length of password 8-128 characters
  //Step 3. Choose if password needs lowercase letter, uppercase letter, numbers, and/or special characters
  //Step 4. Prompt whether at least one character type has been selected 
  //Step 5. Generate password that matches the criteria
  //Step 6. Display the password generated either in an alert or written to the page 

  var passwordLength = prompt("Please pick a password length between 8 and 128 characters");
  console.log(passwordLength);
  if (passwordLength >= 8 && passwordLength <=128){
    var lowLetterCheck = confirm("Does your password need lowercase letters?");
    console.log(lowLetterCheck);
    var upLetterCheck = confirm("Does your password need uppercase letters?");
    console.log(upLetterCheck);
    var numCheck = confirm("Does your password need numbers?")
    console.log(numCheck);
    var specialCharCheck = confirm("Does your password need special characters?")
    console.log(specialCharCheck);
    if (lowLetterCheck === true){
      var pickLow = Math.floor(Math.random()*lowLetter.length)
      finalPassword = finalPassword + lowLetter.charAt(pickLow)
    }
    if (upLetterCheck === true){
      var pickUp = Math.floor(Math.random()*upLetter.length)
      finalPassword = finalPassword + upLetter.charAt(pickUp)
    }
    if (numCheck === true){
      var pickNum = Math.floor(Math.random()*number.length)
      finalPassword = finalPassword + number.charAt(pickNum)
    }
    if (specialCharCheck ===  true){
      var pickSpecChar = Math.floor(Math.random()*specialChar.length)
      finalPassword = finalPassword + specialChar.charAt(pickSpecChar)
    }
  } else{
    alert("Please choose a password length between 8 and 128 characters")
  }
  return finalPassword
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
