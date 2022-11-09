// Assignment Code
var generateBtn = document.querySelector("#generate");


// generatePassword doesn't exist so make it exist.

function generatePassword() {

  var newPW = window.prompt(" Welcome Visitor! Let's get you a new password! For your password, please select a password length between 8 - 128 characters:")
  var selectLength = parseInt(newPW)
  console.log(newPW)

  // what if they answer with a password instead of how long they want it to be? we would do an if
  if (isNaN(selectLength)) {
    window.alert("Error NaN: Please use a numeracle value between 8 - 128 to choose a password length.")
    return "Not a number!"
  }
// should this be an else if?

   if (selectLength < 8 || selectLength > 128) {
    window.alert("ErrorLeng: Please select a numeracle value between 8 and 128 characters!")
    return "Please select a numeracle value between 8 and 128 characters!"
  }
  // I created 4 different prompt criterias giveLower giveUpper giveNumeric giveSpecial
  var giveNumeric = window.confirm("Can we include NUMBERS?")
  var giveSpecial = window.confirm("Can we include Special Symbols?")
  var giveUpper = window.confirm("Can we include UPPERcase letters?")
  var giveLower = window.confirm("Can we include LOWERcase letters?")

  //i started with arrays but was able to figure out the string approach for the char options
  var listUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var listLower = "abcdefghijklmnopqrstuvwxyz" 
  var listNumeric = "0123456789"
  var listSpecial = "!#*@<>?$}{'"

// var listUpper = "abcdefghijklmnopqrstuvwxyz" 


  var listMaster = ""


  if (giveSpecial) {
    listMaster = listMaster + listSpecial

  }
  if (giveNumeric) {
    listMaster = listMaster + listNumeric
  }
  if (giveUpper) {
    listMaster = listMaster + listUpper
  }
  if (giveLower) {
    listMaster = listMaster + listLower
  }
  console.log(listMaster) 
  if (listMaster === ""){
     window.alert('You must select at least one character set!')
    return "You must select at least one character set!"
  }
  // iterations go here?
  var finalPassword = "" 
  
  for( var i = 0; i < selectLength ; i++){ 
     var randomNumber = Math.floor(Math.random()* listMaster.length) 
     var randomChar = listMaster[randomNumber] 
     finalPassword = finalPassword + randomChar 
    // write random code to grab singular character from listMaster. 
    console.log (finalPassword)
  }

  return finalPassword
}





// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
