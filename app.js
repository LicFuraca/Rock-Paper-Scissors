/* START GAME BTN */
const btnPlay = document.querySelector("#play");
// INTRO, MATCH and WINNER
const intro = document.querySelector(".intro");
const match = document.querySelector(".match");
const winner = document.querySelector(".winner");
// BUTTONS
const restartBtn = document.querySelector('.restart-btn');
const playerOptions = document.querySelectorAll(".options button");
//SCORE AND DIV
const optionsDiv = document.querySelector(".options");
const pScoreDisplay = document.querySelector(".player-score p");
const cScoreDisplay = document.querySelector(".computer-score p");

let pScoreCount = 0;
let cScoreCount = 0;

//START GAME BUTTON EVENT
btnPlay.addEventListener("click", () => {
  intro.classList.toggle("fadeOut");
  match.classList.toggle("fadeIn");
});

//RESTART BUTTON EVENT
restartBtn.addEventListener('click', () => {
  const playerHand = document.querySelector(".player-hand");
  const computerHand = document.querySelector(".computer-hand");
  pScoreCount = 0;
  cScoreCount = 0;
  pScoreDisplay.textContent = pScoreCount;
  cScoreDisplay.textContent = cScoreCount;
  winner.textContent = 'Choose your option';
  playerHand.src = './rock.png';
  computerHand.src = './rock.png';
  restartBtn.classList.toggle('fadeIn');
  restartBtn.classList.toggle('fadeOut');
  optionsDiv.classList.remove('fadeOut');
  // optionsDiv.classList.toggle('fadeIn');
});

//PLAYING
const play = () => {
  const playerHand = document.querySelector(".player-hand");
  const computerHand = document.querySelector(".computer-hand");

  // FINISH ANIMATION AFTER EACH PLAY
  const hands = document.querySelectorAll(".hands img");

  for (hand of hands) {
    hand.addEventListener("animationend", function () {
      this.style.animation = "";
    });
  }

  playerOptions.forEach((option) => {
    option.addEventListener("click", function () {
      //COMPUTER CHOICE
      const options = ["rock", "paper", "scissors"];
      const computerNumber = Math.floor(Math.random() * 3);
      const computerChoice = options[computerNumber];

      // EVERYTHING UPDATES AFTER 1 S
      setTimeout(() => {
        compareHands(this.textContent, computerChoice);
        playerHand.src = `./${this.textContent}.png`;
        computerHand.src = `./${computerChoice}.png`;
      }, 1000); 

      playerHand.style.animation = "shakePlayerHand 1s ease";
      computerHand.style.animation = "shakeComputerHand 1s ease";
    }); // EVENT LISTENER
  }); // FOREACH
}; // PLAYFUNCTION

// UPDATE SCORES
const scoreKepper = () => {
  pScoreDisplay.textContent = pScoreCount;
  cScoreDisplay.textContent = cScoreCount;

  if(pScoreCount === 10) {
    winner.textContent = 'Congratulations! you WON!';
    optionsDiv.classList.toggle('fadeOut');
    restartBtn.classList.toggle('fadeIn');
    restartBtn.classList.toggle('fadeOut');
  };

  if(cScoreCount === 10) {
    winner.textContent = "I'm sorry, you LOST!";
    optionsDiv.classList.toggle('fadeOut');
    restartBtn.classList.toggle('fadeIn');
    restartBtn.classList.toggle('fadeOut');
  };
};

// WHO WINS?
const compareHands = (playerChoice, computerChoice) => {
  

  // CHECK TIE
  if (playerChoice === computerChoice) {
    winner.textContent = "Tie :|";
    return;
  }

  // CHECK ROCK
  if (playerChoice === "rock") {
    if (computerChoice === "paper") {
      winner.textContent = "You Lose :(";
      cScoreCount++;
      scoreKepper();
      return;
    } else {
      if (computerChoice === "scissors") {
        winner.textContent = "You Win :)";
        pScoreCount++;
        scoreKepper();
        return;
      }
    }
  }
  //CHECK SCISSORS
  if (playerChoice === "scissors") {
    if (computerChoice === "rock") {
      winner.textContent = "You Lose :(";
      cScoreCount++;
      scoreKepper();
      return;
    } else {
      if (computerChoice === "paper") {
        winner.textContent = "You Win :)";
        pScoreCount++;
        scoreKepper();
        return;
      }
    }
  }
  // CHECK PAPER
  if (playerChoice === "paper") {
    if (computerChoice === "scissors") {
      winner.textContent = "You Lose :(";
      cScoreCount++;
      scoreKepper();
      return;
    } else {
      if (computerChoice === "rock") {
        winner.textContent = "You Win :)";
        pScoreCount++;
        scoreKepper();
        return;
      }
    }
  }
};



play();
