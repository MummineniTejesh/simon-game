var buttonColors=["red","green","yellow","blue"];

var gamePattern=[];
var userPattern=[];

var start=false;
var level=0;

document.addEventListener("keydown",function(){
    if(start!==true)
    {
        sequence();
        start=true;
    }
});

// document.querySelectorAll("#btn").addEventListener("click",function(){
//     var userColor=document.querySelector(this.classList).className();
//     userPattern.push(userColor);
//     playTheSound(userColor);
//     document.querySelector("."+buttonColors[rannumber]).classList.add("pressed");
//     setTimeout(function(){
//         document.querySelector("."+buttonColors[rannumber]).classList.remove("pressed");
//     },100);
//     checkAnswer(userColor.length-1);
// });
for(var i=0;i<4;i++)
{
    document.querySelectorAll("button")[i].addEventListener("click",function (){
        var btn=this.classList[0];
        console.log(btn);
        userPattern.push(btn);
        checkAnswer(userPattern.length-1);
        playTheSound(btn);
        document.querySelector("."+btn).classList.add("pressed");
        setTimeout(function(){
            document.querySelector("."+btn).classList.remove("pressed");
        },100);
        
    });
}

function checkAnswer(level){
    if (gamePattern[level] === userPattern[level]) {
        if (userPattern.length === gamePattern.length){
          setTimeout(function () {
            sequence();
          }, 1000);
        }
      } else {
        playTheSound("wrong");
        document.querySelector("body").classList.add("gameover");
        document.querySelector("h1").innerText="Game Over, Press Any Key to Restart";
  
        setTimeout(function () {
        document.querySelector("body").classList.remove("gameover");
        }, 200);
  
        startOver();
      }
}

function sequence()
{
    userPattern=[];
    level++;
    document.querySelector("h1").innerText="level "+level;
    var rannumber=Math.floor(Math.random()*4);
    gamePattern.push(buttonColors[rannumber]);
    document.querySelector("."+buttonColors[rannumber]).classList.add("pressed");
    setTimeout(function(){
        document.querySelector("."+buttonColors[rannumber]).classList.remove("pressed");
    },100);
    playTheSound(buttonColors[rannumber]);
}

function playTheSound(sound)
{
    var aud=new Audio("sounds/"+sound+".mp3");
    aud.play();
}

function startOver() {
    level = 0;
    gamePattern = [];
    start = false;
  }