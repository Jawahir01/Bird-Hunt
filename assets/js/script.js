let bullets = 10;
let counts = 0;
let endGame = document.getElementById("endGame");
let result = document.getElementById("result");
endGame.style.display = "none";

function initializeGame(event) {
    window.addEventListener("click", shootBullet);
    
}

/**
JS doc here
**/
function shootBullet(event) {
    if ( bullets > 0 ) {
        bullets --;
        document.getElementById("currentBullets").innerHTML = bullets;
        if (event.target.nodeName == ("IMG")){
            document.getElementById("gun").play();
            event.target.style.display = "none";
            document.getElementById("currentScore").innerHTML = ++counts;
        } else if (event.target.nodeName != ("IMG")){
            document.getElementById("misshot").play();
        }
    } else if (bullets <= 0) {
        endGame.style.display = 'block' ;
        result.innerHTML = counts;
    }
}


window.addEventListener('DOMContentLoaded', initializeGame);


// If user successfuly shot the bird, the bird will disapear and it will be counted.
//The bullets will increment wither the player hits a bird or missed it.






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