let bullets = 15;
let counts = 0;
let endGame = document.getElementById("endGame");
let timeOut = document.getElementById("timeOut");
let result = document.getElementById("result");
let result2 = document.getElementById("timeresult");

endGame.style.display = "none";
timeOut.style.display = "none";

function initializeGame(event) {
    window.addEventListener("click", shootBullet);
    window.addEventListener("play", countdown);
    window.addEventListener("play", appear);
}

function shootBullet(event) {
    if (bullets > 0) {
        bullets--;
        document.getElementById("currentBullets").innerHTML = bullets;
        if (event.target.nodeName == ("IMG")) {
            document.getElementById("gun").play();
            event.target.style.display = "none";
            document.getElementById("currentScore").innerHTML = ++counts;
        } else if (event.target.nodeName != ("IMG")) {
            document.getElementById("misshot").play();
        }
    }

    if (bullets <= 0 ){
        endGame.style.display = 'block';
        result.innerHTML = counts;
        clearInterval(timerId);
        window.removeEventListener("play", appear);
        clearInterval(randomAppear);
        clearInterval(hourGlass);

    }
}

//  Countdown Game Timer
    var timeLeft = 10;
    var elem = document.getElementById('countdown-number');
    var timerId = setInterval(countdown, 1000);
    
    function countdown() {
        elem.innerHTML = timeLeft;
        timeLeft--;
        if (timeLeft <= -1 ){
            clearTimeout(timerId);
            clearInterval(hourGlass);
            timeOut.style.display = 'block';
            result2.innerHTML = counts;
            window.removeEventListener("play", appear);
            window.removeEventListener("click", shootBullet);    // raise a question
            clearInterval(randomAppear);
        }
    }

//  Sandclock Timer 
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

      var hourGlass= setInterval(hourglass, 3000);


// .
var images = [
  { src: "assets/images/crocodile.gif",},
  {src: "assets/images/hippo.gif",},
];

// Get the width and height of the screen.
var width = document.wi;
var height = window.innerHeight;

// Create two image elements.
var image1 = document.createElement("img");
var image2 = document.createElement("img");

// Set the src of the image elements to the images in the array.
image1.src = images[0].src;
image2.src = images[1].src;

// Add the image elements to the document.
document.body.appendChild(image1);
document.body.appendChild(image2);

// Set the opacity of the image elements to 0.
image1.style.opacity = 0;
image2.style.opacity = 0;

// Create a function to make the image elements appear suddenly and randomly on the screen.
function appear() {
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

// Set a timer to call the appear function every 1.5 seconds.
var randomAppear = setInterval(appear, 1500);


window.addEventListener('DOMContentLoaded', initializeGame);

