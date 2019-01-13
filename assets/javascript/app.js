var tq1 = "four";
var tq2 = "three";
var tq3 = "two";
var tq4 = "one";
var correct = 0;
var wrong = 0;
var time = 30;
var intervalID;

function reset() {
    correct = 0;
    wrong = 0;
}

function start() {
    intervalID = setInterval(countDown, 1000);
}

function stop() {
    clearInterval(intervalID);
}

function countDown() {
    time--;
    $("#time").text(time);
    if (time == 0) {
        stop();
        gameOver();
    }
}

function checkAnswers() {
    if ($("input[name='tq1']:checked").val() == tq1) {
        correct++;
        console.log(correct);
    }
    else {
        wrong++;
        console.log(wrong);
    }

    if ($("input[name='tq2']:checked").val() == tq2) {
        correct++;
        console.log(correct);
    }
    else {
        wrong++;
        console.log(wrong);
    }

    if ($("input[name='tq3']:checked").val() == tq3) {
        correct++;
        console.log(correct);
    }
    else {
        wrong++;
        console.log(wrong);
    }

    if ($("input[name='tq4']:checked").val() == tq4) {
        correct++;
        console.log(correct);
    }
    else {
        wrong++;
        console.log(wrong);
    }
}

function gameOver() {
    stop();
    checkAnswers();
    $("#correct").text("Correct: " + correct);
    $("#wrong").text("Wrong: " + wrong);
}

$(function() {
    $("#submit").on("click", gameOver);
    start();
});