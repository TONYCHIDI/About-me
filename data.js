const myFirstName = "ANTHONY";
const myLastName = "NNAMCHI";
let myMiddleNmae = "CHIDI";
let myHeight = "1.76 meters";
let myCountry = "NIGERIA";

let myFullName = `${myLastName} ${myFirstName} ${myMiddleNmae}`;
document.getElementById("my-name").innerHTML = "My name is " + myFullName;

let myHeightDetails = "I am " + myHeight + " tall";
document.getElementById("my-height").innerHTML = myHeightDetails;

let myCountryDescription = "I am from Federal Republic of " + myCountry;
document.getElementById("my-country").innerHTML = myCountryDescription;