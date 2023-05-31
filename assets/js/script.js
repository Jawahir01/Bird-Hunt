let bullets = 10;
let counts = 0;
let endGame = document.getElementById("endGame");
let timeOut = document.getElementById("timeOut")
let result = document.getElementById("result");
endGame.style.display = "none";
timeOut.style.display = "none";

function initializeGame(event) {
    window.addEventListener("click", shootBullet);
    
     
}
function GameTimer(event){
    document.addEventListener("load", countdown);
}

/**
JS doc here
**/

//

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
    }
}


//  Countdown 
    var timeLeft = 10;
    var elem = document.getElementById('countdown-number');
    var timerId = setInterval(countdown, 1000);
    
    function countdown() {
        elem.innerHTML = timeLeft;
        timeLeft--;
        if (timeLeft == -1 ){
            clearTimeout(timerId);
            timeOut.style.display = 'block';
        }
    }

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
      setInterval(hourglass, 5000);

window.addEventListener('DOMContentLoaded', initializeGame);
window.addEventListener('DOMContentLoaded', GameTimer);





// If user successfuly shot the bird, the bird will disapear and it will be counted.
//The bullets will increment wither the player hits a bird or missed it.




//

/*let bullets = 10;
let counts = 0;
let endGame = document.getElementById("endGame");
let result = document.getElementById("result")

window.onload = function (event){
    endGame.style.display = "none";
}

 If user successfuly shot the bird, the bird will disapear and it will be counted.
//The bullets will increment wither the player hits a bird or missed it.

window.onclick = function (event){
    if (bullets == 0) {
        endGame.style.display = 'block' ;
        result.innerHTML = counts;

    }else if ( bullets > 0 ) {
        bullets --;
        document.getElementById("currentBullets").innerHTML = bullets;

        if (event.target.nodeName == ("IMG")){
            document.getElementById("gun").play();
            event.target.style.display = "none";
            document.getElementById("currentScore").innerHTML = ++counts;
        } else if (event.target.nodeName != ("IMG")){
            document.getElementById("misshot").play()
        };

    }
}

// If the player ran out of bullets the game ends and his score is counted*/
// function mytest(){
//     console.log("hello from inside mytest function");
// }

// window.addEventListener('DOMContentLoaded', mytest);