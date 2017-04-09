var wellPaperScissorsApp = {
        playersChoice: function () {
        var playersChoice = prompt('Please enter one of the following: "well", "paper", "scissors"');
        return playersChoice;
    },
    computersChoice: function () {
        var randomNumber = Math.random();
        var computersChoice = "";
        if (randomNumber <= 0.33) {
            computersChoice = "well";
        }
        else if (randomNumber <= 0.66) {
            computersChoice = "paper";
        }
        else {
            computersChoice = "scissors";
        }
            return computersChoice;
    },
    winnerIs: function() {
        var playersChoice = this.playersChoice();
        var computersChoice = this.computersChoice();
        var appHTML = document.querySelector(".app");
        var h2Player = document.createElement("h2");
        var h2Computer = document.createElement("h2");
        var h1 = document.createElement("h1");
        h2Player.append("Your choice: " + playersChoice);
        h2Computer.append("Computer's choice: " + computersChoice);
        console.log("Your choice: " + playersChoice);
        console.log("Computer's choice: " + computersChoice);

        if (
            playersChoice === "well" && computersChoice === "scissors" ||
            playersChoice === "paper" && computersChoice === "well" ||
            playersChoice === "scissors" && computersChoice === "paper"
            ) {
            h1.innerHTML = "You win!";

        } else if (
            playersChoice === "well" && computersChoice === "well" ||
            playersChoice === "paper" && computersChoice === "paper" ||
            playersChoice === "scissors" && computersChoice === "scissors"
            ) {
            h1.innerHTML = "It's a draw!";
        } else {
            h1.innerHTML = "Computer wins!";
        }
        appHTML.append(h2Player, h2Computer, h1)
    }
    
}


wellPaperScissorsApp.winnerIs();

