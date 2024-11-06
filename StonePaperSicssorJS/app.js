let userScore = 0;
let compScore = 0;
const msg = document.querySelector("#msg");
let userScoreId = document.querySelector("#user-score");
let compScoreId = document.querySelector("#comp-score");
const choices = document.querySelectorAll(".choice");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin)
    {
        userScore++;
        userScoreId.innerText = `${userScore}`;
        msg.innerText = `you beat the ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else
    {
        compScore++;
        compScoreId.innerText = `${compScore}`;
        msg.innerText = `You beat by the ${compChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    const  compChoice = genCompChoice();
    if(userChoice === compChoice)
    {
        msg.innerText = "It's a DRAW, Choose Again";
        msg.style.backgroundColor = "#081b31";
    }
    else{
        let userWin = true;
        if(userChoice === "rock")
        {
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper")
        {
            userWin = compChoice === "scissors" ? false : true;
        }
        else if(userChoice === "scissors")
        {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id"); 
        playGame(userChoice);
    });
});