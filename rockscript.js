let userscore = 0;
let compscore = 0;

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const msg = document.querySelector("#msg");
const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const ranIdx = Math.floor(Math.random()*3);
    return options[ranIdx];
};

const drawGame = () => {
    console.log("Game Was Draw");
    msg.innerText = "Game Was Draw.Play Again.";
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin,userChoice,compChoice) => {
    if (userWin) {
        userscore++ ;
        userScorePara.innerText = userscore;
        console.log("You Win!");
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compscore++ ;
        compScorePara.innerText = compscore;
        console.log("You Lose!");
        msg.innerText = `You Lose. ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playgame = (userChoice) => {
    console.log("user Choice =", userChoice);
    const compChoice = genCompChoice();
    console.log("comp choice =", compChoice);

    if (userChoice === compChoice) {
        drawGame();
    } else { 
        let userWin = true ;
        if (userChoice === "rock") {
            userWin = compChoice === "paper"? false: true;
        } else if (userChoice === "paper") {
            userWin = compChoice ==="scissors"? false: true;
        } else {
            userWin = compChoice ==="rock"? false: true;
        };
        showWinner(userWin,userChoice,compChoice);
}
};

const choices = document.querySelectorAll(".choice");
choices.forEach((choice) => {
    const userChoice = choice.getAttribute("id");
    choice.addEventListener("click", () => {
        playgame(userChoice);
    });
});

