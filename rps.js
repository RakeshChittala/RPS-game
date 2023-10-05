

let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};
updateScore();

function updateScore(){
  let you_win=document.getElementById("win");
  let you_loss=document.getElementById("loss");
  let r_win=document.getElementById("rwin");
  you_win.textContent=score.wins;
  you_loss.textContent=score.losses;
  r_win.textContent=score.losses;
  console.log(score.wins)
   

}
 

let rock=document.getElementById("rock");
let paper=document.getElementById("paper");
let scisssor=document.getElementById("scissor");

rock.addEventListener('click',()=>{
     playGame("rock")
      
})
paper.addEventListener('click',()=>{
    playGame("paper")
})
scissor.addEventListener('click',()=>{
    playGame("scissors")
})


 

function playGame(playerMove) {
    let roboMove = robotMove();
    console.log(playerMove,roboMove)
    let result = '';
    
    if (playerMove === 'scissors') {
      if (roboMove === 'rock') {
        result = 'You lose.';
      } else if (roboMove === 'paper') {
        result = 'You win.';
      } else if (roboMove === 'scissors') {
        result = 'Tie.';
      }
  
    } else if (playerMove === 'paper') {
      if (roboMove === 'rock') {
        result = 'You win.';
      } else if (roboMove === 'paper') {
        result = 'Tie.';
      } else if (roboMove === 'scissors') {
        result = 'You lose.';
      }
      
    } else if (playerMove === 'rock') {
      if (roboMove === 'rock') {
        result = 'Tie.';
      } else if (roboMove === 'paper') {
        result = 'You lose.';
      } else if (roboMove === 'scissors') {
        result = 'You win.';
      }
    }
    

    if (result === 'You win.') {
      score.wins += 1;
    } else if (result === 'You lose.') {
      score.losses += 1;
    } else if (result === 'Tie.') {
      score.ties += 1;
    }
    
    localStorage.setItem('score', JSON.stringify(score));
    updateScore();


    let y_move=document.getElementById("y_move");
    let r_move=document.getElementById("r_move");
    let result1=document.getElementById("result");
    console.log(result1)
    y_move.src=`game-images/${playerMove}.png`
    r_move.src=`game-images/${roboMove}.png`
    result1.textContent=result
  return result
}

let reset=document.getElementById("reset-btn");
reset.addEventListener('click',()=>{
  //console.log("yes")
  let you_win=document.getElementById("win");
  let you_loss=document.getElementById("loss");
  let r_win=document.getElementById("rwin");
  you_win.textContent=0;
  you_loss.textContent=0;
  r_win.textContent=0;
    localStorage.removeItem('score')
})
  
 
 
 
function robotMove(){
  let randomNumber=Math.random()

  let robotMove=""

  if (randomNumber>=0 && randomNumber<=1/2){
      robotMove="rock";
  }
  else if(randomNumber>=1/2 && randomNumber<=2/3){
      robotMove="paper";
  }
  else if(randomNumber>=2/3 && randomNumber<=1){
      robotMove="scissors"
  }
return robotMove;
}

 