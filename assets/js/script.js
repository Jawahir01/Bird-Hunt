let bullets = 10;
let counts = 0;
let endGame = document.getElementById("endGame");
let timeOut = document.getElementById("timeOut")
/**
There are 7 functions in this file.

Function with the largest signature take 1 arguments, while the median is 0.

Largest function has 12 statements in it, while the median is 1.

The most complex function has a cyclomatic complexity value of 5 while the median is 1.
**/

let result = document.getElementById("result");
let result2 = document.getElementById("timeresult");

endGame.style.display = "none";
timeOut.style.display = "none";

function initializeGame(event) {
    window.addEventListener("click", shootBullet);
}

function timer (event){
    window.addEventListener("play", countdown);
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
    }
}

//  Countdown 
    var timeLeft = 10;
    var elem = document.getElementById('countdown-number');
    var timerId = setInterval(countdown, 1000);
    
    function countdown() {
        elem.innerHTML = timeLeft;
        timeLeft--;
        if (timeLeft <= -1 ){
            clearTimeout(timerId);
            timeOut.style.display = 'block';
            result2.innerHTML = counts;
            window.removeEventListener("click", shootBullet);
        }
    }

//  sandclock timer 
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
      hourglass();
      setInterval(hourglass, 3000);

window.addEventListener('DOMContentLoaded', initializeGame);
window.addEventListener('DOMContentLoaded', timer);
