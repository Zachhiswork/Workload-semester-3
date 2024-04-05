class Players {
    constructor(name, age, occupation, country) {
        this.name = name;
        this.age = age;
        this.occupation = occupation;
        this.country = country;
    }
}

var msgl1 = document.getElementById("message1");
var msgl2 = document.getElementById("message2");
var msgl3 = document.getElementById("message3");

var answer = Math.floor(Math.random() * 100) + 1;
var no_of_guesses = 0;
var guessed_nums = [];
var player1 = new Players(document.getElementById("player1Name").value, 20, "Gamer", "USA");
var player2 = new Players(document.getElementById("player2Name").value, 20, "Gamer", "Canada");
var currentPlayer = player1;

function play() {
    var user_guess = document.getElementById("guess").value;
    if (user_guess < 1 || user_guess > 100) {
        alert("Please enter a number between 1 and 100.");
    } else {
        guessed_nums.push(user_guess);
        no_of_guesses += 1;

        if (user_guess < answer) {
            msgl1.textContent = "Your guess is too low.";
        } else if (user_guess > answer) {
            msgl1.textContent = "Your guess is too high.";
        } else if (user_guess == answer) {
            msgl1.textContent = "YOU GUESSED CORRECT";
            msgl2.textContent = "The number was: " + answer;
            msgl3.textContent = "You guessed it in " + no_of_guesses + " guesses";
            document.getElementById("my_btn").disabled = true;
        }

        // Toggle players
        currentPlayer = (currentPlayer === player1) ? player2 : player1;

        // Update messages
        msgl2.textContent = "No. of guesses: " + no_of_guesses;
        msgl3.textContent = "Guessed numbers are: " + guessed_nums.join(', ');
    }
}

// https://www.youtube.com/watch?v=gPbpGWFl8mQ