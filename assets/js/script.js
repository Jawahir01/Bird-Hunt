let bullets = 10;
let counts = 0;


window.onclick = function (event){
    if ( bullets > 0 ){
        bullets --;
        document.getElementById("currentBullets").innerHTML = bullets;
        
        if (event.target.nodeName == ("IMG")){
            document.getElementById("gun").play();
            event.target.style.display = "none";
            document.getElementById("currentScore").innerHTML = ++counts;
        } else if (event.target.nodeName != ("IMG")){
            document.getElementById("misshot").play();
        }
    }
}