console.log("Hi! This is the If Else Exercise");
//Testing the script
let value = "null"; // Assign your value here
//Declares the value variable
if (value === "I am a string") {
  console.log(true);
} else {
  if (value === "false") {
    console.log("The string 'false' is falsy");
  } else if (value === "null") {
    console.log("The null value is falsy");
  } else if (value === "undefined") {
    console.log("undefined is falsy");
  } else if (value === "0") {
    console.log("The number 0 is falsy (the only falsy number)");
  } else if (value === "") {
    console.log("The empty string is falsy (the only falsy string)");
  } 
}
//if else statement checks the falsy and truthines of the value variable
// then prints a statement based on its' findings