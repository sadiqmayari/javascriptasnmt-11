document.write("<h1>Muhammad Sadiq CCO-116650</h1>");

var firstName = prompt("your First Name?")
var lastName = prompt("your Last Name?")

alert(`Welcome! ${firstName} ${lastName}` )


var userMobile = prompt("Which is your Favourite Mobile")
document.write("<h2>My Favourite Mobile is "+ userMobile+"<br> String Lengt is: "+ userMobile.length+"</h2>");

document.write("<br><br>")

//indexof
var citizen = "Pakistani"
document.write(`<h2>String: ${citizen} <br>`)
document.write("Index of 'n' is: "+ citizen.indexOf("n")+"</h2>");

document.write("<br><br>")
//lastindexof
var newString = "Hello World"
document.write(`<h2>String: ${newString} <br>`)
document.write("Last Index of 'l' is: "+ newString.lastIndexOf("l")+"</h2>");

document.write("<br><br><br>")

//element at index
document.write(`<h2>String: ${citizen} <br>`)
document.write("Character at index 3 is: "+ citizen[3]
+'</h2>')

document.write("<br><br><br>")

//Q1 using concat method

document.write("<h2>Concat Method: <br>")
document.write("Welcome "+firstName.concat(" "+ lastName))


document.write("<br><br><br>")
// var sad="sadiq"
// document.write(sad.replace(4,"islam"))


//number as string and as number
var numberString = "472";
var numberNumber = 472;

document.write("Number: "+ numberString+"<br>")
document.write("Type: String<br>")
document.write("Number: "+ numberNumber+"<br>")
document.write("Type: Number<br>")

document.write("<br><br><br>");

//to uppercase
document.write("User Input to upper case<br>")
var userInput2 = prompt("Write any word:")
document.write(userInput2.toUpperCase())

document.write("<br><br><br>");

//to title case
document.write("User Input to title case<br>")
var titleCase=userInput2[0].toUpperCase()+userInput2.slice(1)
document.write(titleCase);


document.write("<br><br><br>");

// Prompt user to enter a username
var username = prompt("Enter your username:");

// Check if the username contains any special symbols
var isValid = true;

for (let i = 0; i < username.length; i++) {
    let charCode = username.charCodeAt(i);
    if (charCode === 33 || charCode === 44 || charCode === 46 || charCode === 64) {
        isValid = false;
        break;
    }
}

// Display the result
if (isValid) {
    alert("Username is valid. Welcome, " + username + "!");
} else {
    alert("Invalid username. Please enter a valid username without special symbols.");
}




// user input and index info
let bakery = ["cake", "apple pie", "cookie", "chips", "patties"];
var userInput = prompt("What are You looking for? : (example “cake”, “apple pie”, “cookie”, “chips”, “patties”")
userInput = userInput.toLowerCase()

var flag =false;
for (i=0; i<bakery.length; i++){

    if ( userInput === bakery[i]){
       flag = true;
       alert(userInput + " is available at index " + i + " in our bakery.")
       break
}       
}
if(!flag){
    alert("sorry we dont have "+userInput+" in our bakery.");
}


document.write("<br>");

//replace 
var city="Hyderabad"

var updatedCity =  city.replace("Hyder","Islam")
document.write("Replace The String<br>")
document.write("Main String: "+city+"<br>")
document.write("Updated String: "+ updatedCity)


document.write("<br><br><br>");

// Variable num
var num = 35.36;

// Convert num to string and remove the dot
var numAsString = num.toString().replace(".", "");

// Display the result in the browser
document.write("Original Number: " + num + "<br>");
document.write("Number as String without Dot: " + numAsString);

document.write("<br><br><br>");

// Variable num
var num = 35.36;

// Convert num to string and remove the dot
var numAsString = num.toString().replace(".", "");

// Display the result in the browser
document.write("Original Number: " + num + "<br>");
document.write("Number as String without Dot: " + numAsString);

document.write("<br><br><br>");

var university = "University of Karachi"

for (i=0;i<university.length;i++){
    document.write(university[i] + "<br>")
}

document.write("<br><br><br>");

// Prompt user to enter input
var userInput = prompt("Enter your input:");

// Check if the user input is not empty
if (userInput.length > 0) {
    // Get the last character of the input
    var lastCharacter = userInput.charAt(userInput.length - 1);

    // Display the result
    document.write("Last Character: " + lastCharacter);
} else {
    // Display a message if the user input is empty
    document.write("No input provided.");
}


document.write("<br><br><br>");
//find string and display count
var para = "The quick brown fox jumps over the lazy dog"
var paraUpdate = para.toLowerCase()
var find = "the"
var count =0
for (i=0;i<para.length;i++){
    if (paraUpdate.slice(i,i+find.length)===find){
        count++
    }
}
document.write("Text : 'The quick brown fox jumps over the lazy dog'<br> ")
document.write("There are "+count+" occurances of word 'The'")