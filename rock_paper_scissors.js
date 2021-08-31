const choices = ["rock", "paper", "scissors"];


function computerChoice() {


    const randomNumber = Math.floor(Math.random() * 3);
    const pcChoice = choices[randomNumber];
    return pcChoice
}

// console.log(computerChoice());

function userChoiceEvent(type) {
    var buttonChoice = document.getElementById("btn-" + type)
    buttonChoice.addEventListener("click", function () {

        document.getElementById("display-text").innerHTML = getWinner(computerChoice(), type)
    })

}


const buttonPlay = document.getElementById("play");
buttonPlay.addEventListener("click", function () {
    userChoiceEvent("rock");
    userChoiceEvent("paper");
    userChoiceEvent("scissors");
    buttonPlay.style.display = "none"


});

// computerChoice()

function getWinner(pcChoice, userChoice) {
    switch (userChoice) {
        case "rock":
            switch (pcChoice) {
                case "rock":
                    return "Equality!";
                case "paper":
                    return "Commputer wins!";
                case "scissors":
                    return "User wins!"
                default:
            }
            break;
        case "paper":
            switch (pcChoice) {
                case "rock":
                    return "User wins!";
                case "paper":
                    return "Equality!";
                case "scissors":
                    return "Commputer wins!"
                default:

            }
            break;
        case "scissors":
            switch (pcChoice) {
                case "rock":
                    return "Commputer wins!";
                case "paper":
                    return "User wins!";
                case "scissors":
                    return "Equality!"
                default:
            }
            break;
        default:
            break;

    }

}
