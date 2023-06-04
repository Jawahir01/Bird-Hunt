// Create a variable to store the score
let score = 0;
// Create a variable to store the bullets
let bullets = 15;
// Create a variable to stroe the End Game Message block.
let endGame = document.getElementById("endGame");
// Create a variable to store Time End message block
let timeOut = document.getElementById("timeEnd");
// Create a variable to store the Result
let result = document.getElementById("result");

//..let result2 = document.getElementById("timeresult");

// Hide The End Game message block
endGame.style.display = "none";
// Hide The Time End message block
timeOut.style.display = "none";



/* Create a function that will be called later from the DOMContentLoaded event
listener, and call the startGame() function, the hourglass() function, the gameTime()
 function and the popAnimals() function
*/
function initializeGame(event) {
    startGame();
    hourglass();
    gameTimer();
    popupAnimals();
}

// Create a function to make the image elements appear suddenly and randomly on the screen.

// Get the width and height of the screen.
var width = window.innerWidth;
var height = window.innerHeight;

// Create a variable to store the elements of the hippo and corocodile images.
var image1 = document.getElementById("b12");
var image2 = document.getElementById("b13");

// Now create the function
function popupAnimals() {

    // Get a random x and y coordinate.
    var x = Math.floor(Math.random() * width);
    var y = Math.floor(Math.random() * height);
    var x1 = Math.floor(Math.random() * width);
    var y1 = Math.floor(Math.random() * height);

    // Set the position of the image elements to the random x and y coordinate.
    image1.style.left = x + "px";
    image1.style.top = y + "px";
    image2.style.left = x1 + "px";
    image2.style.top = y1 + "px";

    // Set the opacity of the image elements to 1.
    image1.style.opacity = 1;
    image2.style.opacity = 1;
}

// Set a timer to call the popupAnimals function every 1.5 seconds.
var randomAppear = setInterval(popupAnimals, 1500);

// Create an array of the images and their corresponding points
var images = [
    { id: "b1", points: 20 },
    { id: "b2", points: 30 },
    { id: "b3", points: 100 },
    { id: "b4", points: 50 },
    { id: "b5", points: 200 },
    { id: "b6", points: 30 },
    { id: "b7", points: 50 },
    { id: "b8", points: 20 },
    { id: "b9", points: -20 },
    { id: "b10", points: 50 },
    { id: "b11", points: 500 },
    { id: "b12", points: -10 },
    { id: "b13", points: -15 },
];

// Listen for clicks on all of the images

function startGame() {
    document.querySelectorAll('img').forEach(function () {
        window.addEventListener('click',shootBullet);
    });
}

// Create the game function 
function shootBullet(event) {
    // Chick if the user has bullets and decrement the bullets on each shot
    if (bullets > 0) {
        bullets--;
        // Display the left bullets 
        document.getElementById("currentBullets").innerHTML = bullets;
        // Create a varaiblr that takes the target event (click)
        var image = event.target;   
        // If the user clicked on an image element
        if (image.nodeName == ("IMG")) {
            // Play the shot sount
            document.getElementById("gun").play();
            // Hide the clicked image 
            image.style.display = "none";
            // Create a variable that loops through the images and get each image's point 
            let point = images.find(i => i.id === image.id).points;
            // Add or subtract points from the score based on the image
            score += point;
            // Display the score on the screen
            document.getElementById("currentScore").innerHTML = score;
        } else if (image.nodeName != ("IMG")) {
            // If the user did not click on an image play a different
            document.getElementById("misshot").play();
        }
    }
    // If the user finished the bullets
    if (bullets <= 0) {
        // Stop the timer
        clearInterval(timerId);
        // Stop the popupAnimals function 
        window.removeEventListener("load", popupAnimals);
        clearInterval(randomAppear);
        clearInterval(hourGlass);
        // Check the user's points.
        if (score > 800) {
            // Display a message if the user got more than 800 points.
            document.getElementById("endtitle").innerHTML = "Wow!! You are on fire";
            endGame.style.display = 'block';

        } else if (score> 400) {
            // Display a message if the user got between 500 and 800 points.
            document.getElementById("endtitle").innerHTML = "Well done! Nice shooting skills. ";
            endGame.style.display = 'block';

        } else if (score > 100) {
            // Display a message if the user got between 100 and 400 points.
            document.getElementById("endtitle").innerHTML = "Good job! You have the skills.";
            endGame.style.display = 'block';

        } else if (score > 10) {
            // Display a message if the user got between 10 and 100 points.
            document.getElementById("endtitle").innerHTML = "Not bad! You need to practice.";
            endGame.style.display = 'block';

        } else if (score == 0) {
            // Display a message if the user got 0 points.
            document.getElementById("endtitle").innerHTML = "You scored nothing .... ";
            endGame.style.display = "block";

        }
        // Display the total points
        result.innerHTML = score;
    }
}

//Creat a gameTimer function

//Create a varaible to store the time
var timeLeft = 25;
// Create a varaible to store the element of the timeleft
var elem = document.getElementById('countdown-number');

// Set a timer to call the gameTimer function every 1 second
var timerId = setInterval(gameTimer, 1000);

function gameTimer() {
    // Display the time 
    elem.innerHTML = timeLeft;
    timeLeft--;
    // If the time ends
    if (timeLeft <= -1) {
        // Stop the Timer
        clearTimeout(timerId);
        // Stop the Hour Glass Timer
        clearInterval(hourGlass);
        // Display the time out message
        timeOut.style.display = 'block';
        // Stope the pop up animals function  
        window.removeEventListener("load", popupAnimals);
        // Stop the game function
        window.removeEventListener("click", shootBullet);    // raise a question?!!
        clearInterval(randomAppear);
    }
}

//  Hour Glass Timer * font Awesome icon
function hourglass() {
    var a;
    a = document.getElementById("div1");
    a.innerHTML = "&#xf251;";
    setTimeout(function () {
        a.innerHTML = "&#xf252;";
    }, 1000);
    setTimeout(function () {
        a.innerHTML = "&#xf253;";
    }, 2000);
}
// Set a timer to call the hour function every 1 second
var hourGlass = setInterval(hourglass, 1000);


// Set an event listener to the initializeGame function once the page is loaded
window.addEventListener('DOMContentLoaded', initializeGame);
