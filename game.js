let gameBoxes = document.querySelectorAll(".game > div");
let winner = document.querySelector(".sw-winner");
let newGame = document.querySelector(".nw-gm");
let resetGAme = document.querySelector(".reset");
let turnX = true; //player x first turn 


//sounds
const SoundX = new Audio("assets/sounds/x-sound.mp3");
const soundO = new Audio("assets/sounds/o-sound.mp3");
const soundWIn = new Audio("assets/sounds/win-sound.mp3");
const soundNewGm = new Audio("assets/sounds/new-reset.mp3");

//2d array that indicates chancess oof winning
let winningChances = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

// for loop for implementing 'X' & 'O' after clicking of users
for (let i = 0; i<gameBoxes.length ; i++) {
    gameBoxes[i].addEventListener("click",() => {
             
          if(turnX ===true){
                gameBoxes[i].innerText ="X";
                SoundX.play();
                turnX = false ;
             }else{
                gameBoxes[i].innerText="O";
                soundO.play();
                turnX = true;
             }   
             gameBoxes[i].disabled  = true;
             if (i === (gameBoxes.length-1)) {
             }
          let isWinner = checkwinner();
            
    });
}

const checkwinner = () => {
for (let chances of winningChances) {
    let val1 = gameBoxes[chances[0]].innerText;
    let val2 = gameBoxes[chances[1]].innerText;
    let val3 = gameBoxes[chances[2]].innerText;
     if (val1 != "" && val2 !="" && val3 != "") {
        if(val1 === val2 && val2 === val3){
                   showWinner(val1);

         }
     }  
  }
};

//function to show winner
let showWinner = (val) =>{
    winner.innerText = `Congrulations!\n~${val} is Winner~`;
    winner.style.display ="block";
     soundWIn.play();
    document.querySelector(".reset").style.display = "none";
}

let reset = () => {
           for (let box of gameBoxes) {
             box.innerText="";
           }
           turnx = true ;
           winner.style.display ="none" ;
           resetGAme.style.display ="block";
           soundNewGm.play();

}


newGame.addEventListener("click",reset);
resetGAme.addEventListener("click",reset);
