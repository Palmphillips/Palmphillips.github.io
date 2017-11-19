// This is the js code for our bootstrap example.

// you can put an alert in your js to see if it's being loaded correctly
// alert("hi");

// global variables go out here
var globalCount = 0;

// we can also attach event handlers
window.onload = setupPage;

// you could also write this as an anonymous function
// window.onload = function () {
//     // function contents here
// };

function setupPage() {
    // this will log to the console in the inspection panel in your browser
    console.log("setting up the page!");

    // this is also where we can attach event handlers to buttons and things
    // you can either write functions specific to a certain element or 
    // functions that can adapt based on how the user interacted with the page
    // document.getElementById("yellowPageButton").onclick = turnYellow;
     document.getElementById("yellowPageButton").onclick = changeColor;
     document.getElementById("greenPageButton").onclick = changeColor;
    document.getElementById("bluePageButton").onclick = changeColor;

}


function sayHello() {
    console.log("hello there!");

    // local variables go in functions
    var message = navigator.userAgent;
    alert("You are using the folling browser: " + message);
}

function turnYellow() {
    if (document.body.style.backgroundColor == "yellow") {
        document.body.style.backgroundColor = "white";
    } else {
        document.body.style.backgroundColor = "yellow";
    }
}

function changeColor(e) {
    // this refers to the DOM element that was interacted with
    console.log(this.id);
    // the variable e refers to the actual event
    console.log(e);

    var color = "white";
    if (this.id.startsWith("yellow")) {
        color = "yellow";
    } else if (this.id.startsWith("green")) {
        color = "green";
    } else if (this.id.startsWith("blue")) {
        color = "blue";
    }
    document.body.style.backgroundColor = color;
}
