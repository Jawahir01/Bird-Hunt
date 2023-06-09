let score = 0;
let bullets = 10;
let endGame = document.getElementById("endGame");
let timeOut = document.getElementById("timeEnd");
let result = document.getElementById("result");
let gameOver = document.getElementById("gameOver");
endGame.style.display = "none";
timeOut.style.display = "none";

/*  Start initialize the Game  */

function initializeGame(event) {
    startGame();
    hourglass();
    gameTimer();
    popupAnimals();
}

/* Create a function to make the hippo and the crocodile elements appear
 suddenly and randomly on the screen.*/

let width = window.innerWidth;
let height = window.innerHeight;

let crocodile = document.getElementById("crocodile");
let hippo = document.getElementById("hippo");

function popupAnimals() {

    let x = Math.floor(Math.random() * width);
    let y = Math.floor(Math.random() * height);
    let x1 = Math.floor(Math.random() * width);
    let y1 = Math.floor(Math.random() * height);

    // Set the position of the image elements to the random x and y coordinate.
    crocodile.style.left = x + "px";
    crocodile.style.top = y + "px";
    hippo.style.left = x1 + "px";
    hippo.style.top = y1 + "px";

    crocodile.style.opacity = 1;
    hippo.style.opacity = 1;
}

// Set a timer to call the popupAnimals function every 1 second.
let randomAppear = setInterval(popupAnimals, 1000);

// Create an array of the images and their corresponding points
let images = [
    { id: "flamingo_1", points: 20 },
    { id: "crow", points: 30 },
    { id: "pelican", points: 100 },
    { id: "blueBird_1", points: 50 },
    { id: "crane", points: 200 },
    { id: "flamingo_2", points: 20 },
    { id: "blueBird_2", points: 50 },
    { id: "flamingo_3", points: 20 },
    { id: "dragon", points: -50 },
    { id: "blueBird_3", points: 50 },
    { id: "turky", points: 500 },
    { id: "crocodile", points: -100 },
    { id: "hippo", points: -30 },
];

// Listen for clicks on all of the images

function startGame() {
    document.querySelectorAll('img').forEach(function () {
        window.addEventListener('click',shootBullet);
    });
}

// Create the game function 
function shootBullet(event) {
  
    if (bullets > 0) {
        bullets--;
        document.getElementById("currentBullets").innerHTML = bullets;
        let targetBird = event.target;   
        if (targetBird.nodeName == ("IMG")) {
            document.getElementById("gun").play();
            targetBird.style.display = "none";
            let point = images.find(i => i.id === targetBird.id).points;
            score += point;
            document.getElementById("currentScore").innerHTML = score;
        } else if (targetBird.nodeName != ("IMG")) {
            document.getElementById("misshot").play();
        }
    }

    if (bullets <= 0) {
        // Stop the timer

        clearInterval(timerId);
        window.removeEventListener("load", popupAnimals);
        clearInterval(randomAppear);
        clearInterval(hourGlass);

        // Check the user's points.

        if (score > 800) {
            gameOver.innerHTML = "Wow!! You are on fire";
        } else if (score> 400) {
            gameOver.innerHTML = "Well done! Nice shooting skills. ";
        } else if (score > 100) {
            gameOver.innerHTML = "Great job! You have the skills.";
        } else if (score > 10) {
            gameOver.innerHTML = "Good, but You need to practice.";
        } else if (score == 0) {
            gameOver.innerHTML = "Sorry! but .... ";
        } else if (score < 0) {
            gameOver.innerHTML = "Wrong Playing ... ";
        }
        endGame.style.display = 'block';
        result.innerHTML = score;
    }
}

let timeLeft = 15;
let elem = document.getElementById('countdown-number');
let timerId = setInterval(gameTimer, 1000);

function gameTimer() {
    elem.innerHTML = timeLeft;
    timeLeft--;
    if (timeLeft <= -1) {
        clearTimeout(timerId);
        clearInterval(hourGlass);
        timeOut.style.display = 'block';
        window.removeEventListener("load", popupAnimals);
        window.removeEventListener("click", shootBullet);
        clearInterval(randomAppear);
    }
}

let hourGlass = setInterval(hourglass, 1000);

//  Hour Glass Timer * font Awesome icon
function hourglass() {
    let a;
    a = document.getElementById("hourglass");
    a.innerHTML = "&#xf251;";
    setTimeout(function () {
        a.innerHTML = "&#xf252;";
    }, 1000);
    setTimeout(function () {
        a.innerHTML = "&#xf253;";
    }, 2000);
}

// Set an event listener to the initializeGame function once the page is loaded
window.addEventListener('DOMContentLoaded', initializeGame);
