$(document).ready(function () {
    var myScore = 0;
    var changeTime = 1000;
    const colors = ['redSquare', 'blueSquare', 'greenSquare', 'yellowSquare'];

    function startGame() {
        displayMessage('Choose a difficulty Level');
    };
    
    function displayScore() {
        $('#displayScore').html('<h1>Score: ' + myScore + '</h1>');
    }

    function displayMessage(message) {
        $('#displayMessage').html('<h1 style="font-size: 42px">' + message + '</h1>');
    }

    function displayText() {
        var squareNum = Math.floor((Math.random() * 4));
        $("#" + colors[squareNum] + "").text('Click Me!');
        setTimeout(() => {
            $("#" + colors[squareNum] + "").text('');
            if (myScore < 10) {
                displayText();
            }
            else {

                displayMessage('<img src="http://www.commenthaven.com/graphics/random/you-win.gif" border="0" alt="You Win picture from commenthaven.com" style="width: 400px;">');

                $('#playAgainDiv').html('<button id="playAgainBtn" class="btn btn-primary">Play Again</button>');

                $('#playAgainBtn').click(function () {
                    console.log(this);
                    window.location.reload();
                });
            }
        }, changeTime);
    };

    $('.levelBtn').click(function () {
        console.log("The clicker is working.");
        console.log(this.id);
        if (this.id === "level1") {
            changeTime = 2000;
            displayText();
        }
        if (this.id === "level2") {
            changeTime = 1000;
            displayText();
        }
        if (this.id === "level3") {
            changeTime = 800;
            displayText();
        }
        $('#levelBtnDiv').hide();
        displayMessage("Catch me if you can!")
    });

    $(".squareDiv").click(function () {
        var divText = $("#" + this.id + "").html();
        if (divText === "") {
            if (myScore < 10) {
                displayMessage("You missed! Try again!");
                myScore = myScore - 2;
            }
            displayScore();
        }
        else {
            if (myScore < 10) {
                displayMessage("You got it! Good job!");
                myScore = myScore + 1;
            }
            displayScore();
        }
    });

    startGame();

});