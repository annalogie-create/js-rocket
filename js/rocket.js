var timer = null;
var countdownNumber = 10;

var changeState = function (state) {
    document.body.className = "body-state"+state;
    clearInterval(timer);
    countdownNumber = 10;
    //countdown
    if (state == 2){
        timer = setInterval(function(){
            document.getElementById("countdown").innerHTML = countdownNumber;
            countdownNumber = countdownNumber -1; 
            if (countdownNumber <= -1){
                countdownNumber = 10;
                document.getElementById("countdown").innerHTML = countdownNumber
                changeState(3);
            } 
        },1000)
    //success or failure?
    }else if (state == 3){
        var randomNumber = Math.round(Math.random()*10); 
        var success = setTimeout(function()
        {  
            if(randomNumber > 1){
                changeState(4);
            }else{
                changeState(5);
            }
        },2000);
    }
}