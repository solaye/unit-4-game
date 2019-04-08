$(document).ready(function () {
    //set up global variables

    var targetNumber;
    var playerNumber = 0;
    var dubs = 0;
    var LsUp = 0;
    var crystalUno;
    var crystalDos;
    var crystalTres;
    var crystalQuatro;



    function randomNumbers() {

        targetNumber = Math.floor(Math.random() * 120) + 19;
        crystalUno = Math.floor(Math.random() * 12) + 1;
        crystalDos = Math.floor(Math.random() * 12) + 1;
        crystalTres = Math.floor(Math.random() * 12) + 1;
        crystalQuatro = Math.floor(Math.random() * 12) + 1;
        console.log(targetNumber);

    }

    function gameStart() {
        randomNumbers();
        totalScore = 0;
        playerNumber = 0;
        $("#targetNumber").text(targetNumber);
        $("#totalScore").text(playerNumber);
        $("#uno").attr("value", crystalUno);
        $("#dos").attr("value", crystalDos);
        $("#tres").attr("value", crystalTres);
        $("#quatro").attr("value", crystalQuatro)
        $("#dubs").text(dubs);
        $("#losses").text(LsUp);
    }

    function WsUp() {
        $("#Results").text("I didn't think it was possible but you did it");
        dubs++;
        $("#dubs").text(dubs);

    }

    function tryAgain() {
        $("#Results").text("Take this defeat with humility");
        LsUp++;
        $("#losses").text(LsUp);


    }

    gameStart();

    $(".crystalimg").on("click", function (event) {
        console.log(event.target.attributes[4].value);
        var crystalValue = parseInt(event.target.attributes[4].value);
        playerNumber = playerNumber + crystalValue;
        console.log(playerNumber);
        $("#totalScore").text(playerNumber);

        if (playerNumber === targetNumber) {
            WsUp();
            gameStart();

        } else if (playerNumber > targetNumber) {
            tryAgain();
            gameStart();
        }

    })







});