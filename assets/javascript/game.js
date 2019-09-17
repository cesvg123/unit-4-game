var wins = 0;
var losses = 0;
var scoreTarget = 0;
var scoreTotal = 0;
var numberOfGems = 4;
var assignedGemValue = [];
var gemFiles = ["assets/images/pic-1.png", "assets/images/pic-2.png", "assets/images/pic-3.png", "assets/images/pic-4.png"];

$(document).ready(function () {
    resetGame();
    $(".gemImages").click(function () {
        var currentGemValue = ($(this).attr("scoreTotal-value"));
        currentGemValue = parseInt(currentGemValue);
        scoreTotal += currentGemValue;
        $("#progressToTarget").html("Your total score is: " + scoreTotal);
        if (scoreTotal === scoreTarget) {
            wins++;
            $("#gameWins").html("Wins: " + wins);
            resetGame();
        } else if (scoreTotal >= scoreTarget) {
            losses++;
            $("#gameLosses").html("Losses: " + losses);
            resetGame();
        }
    })
})

function resetGame() {
    scoreTarget = Math.floor((Math.random() * 120) + 19)
    $("#targetNumber").html("Target: " + scoreTarget);
    scoreTotal = 0;
    $("#progressToTarget").html("Your total score is: " + scoreTotal);
    $(".gemImage").empty();
    var gems = $("div").find("img");

    for (i = 0; i < gems.length; i++) {
        assignedGemValue[i] = Math.floor((Math.random() * 12) + 1);
        var gemImg = $("#g" + (i));
        gemImg.addClass("col-sm-2");
        gemImg.attr("src", gemFiles[i]);
        gemImg.attr("scoreTotal-value", assignedGemValue[i]);
        gemImg.attr("title", assignedGemValue[i]);
        $("gemImage").append(gemImg);
    }
}