/* START GAME BTN */
const btnPlay = document.querySelector("#play");
const intro = document.querySelector(".intro");
const match = document.querySelector(".match");
let pScoreCount = 0;
let cScoreCount = 0;

btnPlay.addEventListener("click", () => {
  intro.classList.toggle("fadeOut");
  match.classList.toggle("fadeIn");
});

//PLAYING
const play = () => {
  const playerOptions = document.querySelectorAll(".options button");
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

      // EVERYTHING UPDATES AFTER 1S
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
  const pScoreDisplay = document.querySelector(".player-score p");
  const cScoreDisplay = document.querySelector(".computer-score p");
  pScoreDisplay.textContent = pScoreCount;
  cScoreDisplay.textContent = cScoreCount;
};

// CHECK SCORE UP TO 12.
// const checkWinner = (winner) => {
//     if(pScoreCount === 12) {
//         winner.textContent = 'Congratulations! You Won!';
//     } else if (cScoreCount === 12) {
//         winner.textContent = "I'm Sorry, you lost.."
//     };
// };

// WHO WINS?
const compareHands = (playerChoice, computerChoice) => {
  const winner = document.querySelector(".winner");

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
      checkWinner(winner);
      return;
    } else {
      if (computerChoice === "scissors") {
        winner.textContent = "You Win :)";
        pScoreCount++;
        scoreKepper();
        checkWinner(winner);
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
      checkWinner(winner);
      return;
    } else {
      if (computerChoice === "paper") {
        winner.textContent = "You Win :)";
        pScoreCount++;
        scoreKepper();
        checkWinner(winner);
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
      checkWinner(winner);
      return;
    } else {
      if (computerChoice === "rock") {
        winner.textContent = "You Win :)";
        pScoreCount++;
        scoreKepper();
        checkWinner(winner);
        return;
      }
    }
  }
};

play();
