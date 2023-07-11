//elements
let playbutton = document.getElementById("play-button");
let first = document.getElementById("center");
let rocket = document.getElementById("figure-jumping");
let b1 = document.getElementById("fb");
let b2 = document.getElementById("sb");
let b3 = document.getElementById("tb");
let second = document.getElementById("choose");
let keyboard = document.getElementById("keyboard");
let typerace = document.getElementById("game");
let countdownElement = document.getElementById("count-down");
let countdownElement1 = document.getElementById("count-down1");
let countdownElement2 = document.getElementById("count-down2");
let startcountdownElement = document.getElementById("start-count");
let startcountdownElement1 = document.getElementById("start-count1");
let startcountdownElement2 = document.getElementById("start-count2");
let times = document.getElementById("time")
let infoText = document.getElementById("info-text")
let highscore = document.getElementById("higher-score")
let scoreEl = document.getElementById("your-score")
let input = document.getElementById("input")
let gameOver = document.getElementById("game-over")
let gameOverSc = document.getElementById("game-overSc")
let lvlScore = document.getElementById("lvScore")
let sentGame = document.getElementById("gameSc")
let timesSc = document.getElementById("timeSc")
let infoTextSc = document.getElementById("info-textSc")
let highscoreSc = document.getElementById("higher-scoreSc")
let scoreElSc = document.getElementById("your-scoreSc")
let inputSc = document.getElementById("inputSc")
let lvlScoreSc = document.getElementById("lvScoreSc")

console.log(highscore)
var count = 3;
var count1 = 3;
var count2 = 3;




//event

function startGame() {
   first.style.display = "none";
   second.style.display = "block";
}

function secondfb() {
   let falseEl
   second.style.display = "none";
   rocket.style.display = "none";
   countdownElement.style.display = "block"
   setInterval(function countdown() {
      startcountdownElement.textContent = count;

      if (count === 0) {
         startcountdownElement.textContent = "Go!";
         startcountdownElement.style.display = "none"
         keyboard.style.display = "block"
         return;
      }

      count--;
   }, 1000);
   let oneLetter = randomLetter();
   let letterEl = document.getElementById(oneLetter)
   letterEl.classList.add("selected")

   document.addEventListener("keyup", function (e) {
      if (falseEl) {
         setTimeout(()=> falseEl.classList.remove("hit"), 100)
      }


      if (e.code == oneLetter) {
         letterEl.classList.remove("selected")
         oneLetter = randomLetter()
         letterEl = document.getElementById(oneLetter)
         letterEl.classList.add("selected")
      }else {
         console.log(e.code)
         falseEl = document.getElementById(e.code)
         console.log(falseEl)
         falseEl.classList.add ("hit")
      }

   })
}

function secondsb() {
   second.style.display = "none";
   rocket.style.display = "none";
   countdownElement1.style.display = "block"
   let id = setInterval(function countdown1() {

      if (count1 === 0) {
         clearInterval(id)
         startcountdownElement1.textContent = "Go!";
         startcountdownElement1.style.display = "none"
         typerace.style.display = "block"
         typeraceGame()
      } else {
         startcountdownElement1.textContent = count1;
         count1--;

      }

   }, 1000);
}

function secondtb() {
   second.style.display = "none";
   rocket.style.display = "none";
   countdownElement2.style.display = "block"
   let id1 = setInterval(function countdown1() {

      if (count2 === 0) {
         clearInterval(id1)
         startcountdownElement2.textContent = "Go!";
         startcountdownElement2.style.display = "none"
         sentGame.style.display = "block"
         sentencesGame()
      } else {
         startcountdownElement2.textContent = count2;
         count2--;

      }

   }, 1000);
}





// 


function typeraceGame(){


   let time = 60;
   let oneWord;
   let score = 0;
   let hScore;
   scoreEl.innerHTML = score

    let id = setInterval(function countdown1() {///////////////
               console.log( times.innerHTML)
               //  times.innerHTML.textContent =  times.innerHTML;

               if ( time <= 0) {
                clearInterval(id)
                gOver()
                  }else
               time--;
                   times.innerHTML =  time
               }, 1000);    //////////////////////


   if(!localStorage.score){
      localStorage.score = 0
   }
   hScore = localStorage.score
   oneWord = randomWord()
   infoText.innerHTML = oneWord
   console.log(highscore.innerHtml)
   highscore.innerHTML = hScore
   input.onchange = function () {
      if(input.value == oneWord){
         score++
         times.innerHTML = time
         if(score>=hScore){
            hScore = score
            localStorage.score = hScore
            highscore.innerHTML = hScore
         }
         scoreEl.innerHTML = score
         input.value = ""
         oneWord = randomWord()
         infoText.innerHTML = oneWord
      }else {
         input.value = ""
         oneWord = randomWord()
         infoText.innerHTML = oneWord
         time-= 2
         times.innerHTML = time
      }


    }
   }

function randomWord() {
   let i = Math.floor(Math.random()*words.length)
   return words [i]
}





function menu() {
   gameOver.style.display = "none";
   second.style.display = "block";  
}
function menuSc() {
   gameOverSc.style.display = "none";
   second.style.display = "block";  
}



function gOver(){
   lvlScore.innerHTML = scoreEl.innerHTML
   console.log("abd")
   gameOver.style.display = "block"
   typerace.style.display = "none"
}

function gOverSc() {
   lvlScoreSc.innerHTML = scoreElSc.innerHTML
   gameOverSc.style.display = "block"
   sentGame.style.display = "none"
}

function randomLetter() {
   let i = Math.floor(Math.random() * letter.length)
   return letter[i]
}

function randomSentences() {
   let i = Math.floor(Math.random() * sentences.length)
   return letter[i]
}

function sentencesGame(){


   let timeSc = 60;
   let oneSc;
   let scoreSc = 0;
   let hScoreSc;
   scoreElSc.innerHTML = scoreSc
   
    let id = setInterval(function countdown3() {///////////////
               console.log( times.innerHTML)
               //  times.innerHTML.textContent =  times.innerHTML;
   
               if ( timeSc <= 0) {
                clearInterval(id)
                gOverSc()
                  }else
               timeSc--;
                   timesSc.innerHTML =  timeSc
               }, 1000);    //////////////////////
   
   
   if(!localStorage.scoreSc){
      localStorage.scoreSc = 0
   }
   hScoreSc = localStorage.scoreSc
   oneSc = randomSentences()
   infoTextSc.innerHTML = oneSc
   console.log(highscoreSc.innerHtml)
   highscoreSc.innerHTML = hScoreSc
   inputSc.onchange = function () {
      if(inputSc.value == oneSc){
         scoreSc++
         timesSc.innerHTML = timeSc
         if(scoreSc>=hScoreSc){
            hScoreSc = scoreSc
            localStorage.scoreSc = hScoreSc
            highscoreSc.innerHTML = hScoreSc
         }
         scoreElSc.innerHTML = scoreSc
         inputSc.value = ""
         oneSc = randomSentences()
         infoTextSc.innerHTML = oneSc
      }else {
         inputSc.value = ""
         oneSc = randomSentences()
         infoTextSc.innerHTML = oneSc
         timeSc-= 2
         timesSc.innerHTML = timeSc
      }
   
   
    }
   }
   
   

   
   function randomSentences() {
      let i = Math.floor(Math.random()*sentences.length)
      return sentences [i]
   }