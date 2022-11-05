// Assignment Code
var generateBtn = document.querySelector("#generate");


// generatePassword doesn't exist so make it exist.

function generatePassword () {

  var newPW = window.prompt (" Welcome Visitor! Let's get you a new password! For your password, please select a password length between 8 - 128 characters:")
  var selectLength = parseInt(newPW)
  console.log(newPW)

  // what if they answer with a password instead of how long they want it to be? we would do an if
  if (isNaN(selectLength)){
    window.alert("Error NaN: Please use a numeracle value between 8 - 128 to choose a password length.")
    return
  }

  if (selectLength < 8 || selectLength > 128){
    window.alert("ErrorLeng: Please select a numeracle value between 8 and 128 characters!")
    return
  }
  // I created 4 different prompt criterias giveLower giveUpper giveNumeric giveSpecial
  var giveNumeric = window.confirm( "Can we include NUMBERS in your password?")
  var giveSpecial = window.confirm("Can we include Special Symbols in your password?")
  var giveUpper = window.confirm("Can we include UPPERcase letters in your password?")
  var giveLower = window.confirm("Can we include LOWERcase letters in your password?")
  
// is there a shorter way to make arrays taht include all of the possible choices we have for pw?
var listLower = ["A", "B","C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var listUpper = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p","q", "r", "s", "t", "u","v","w", "x", "y", "z"]
var listNumeric =["0", "1","2", "3", "4", "5", "6", "7", "8", "9"]
var listSpecial =["!", "#", "*","@","&"]

var listMaster = []
console.log(listMaster)

if (giveSpecial === true) {
  listMaster.push(listSpecial)
}
if (giveNumeric === true) {
  listMaster.push(listNumeric)
}
if (giveUpper === true){
  listMaster.push(listUpper)
}
if (giveLower === true){
  listMaster.push(listLower)
}

// iterations go here?

}




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
