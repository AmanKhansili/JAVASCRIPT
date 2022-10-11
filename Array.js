/*<In JavaScript, array is a single variable that is used to store diffrent elements & list of elements and access them by a single variable.>/

/<The includes() method return true,False if an array contains a spacified value.>*/

var guestList = ["Aman", "Abhi", "Beeru", "Karan", "Mayank", "Bhatt", "Khatti", "Panday"];

var Name = prompt("Enter Your Name");

if (guestList.includes(Name)) {
    alert("Welcome");
}
else {
    alert("Try next time")
}