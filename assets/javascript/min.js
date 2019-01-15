//set questions, answers, and other values
var questions = [
    {
        worth: 100,
        qText: "In the 'Road Runner and Coyote' cartoons, what famous sound does the Road Runner make?",
        a: "A: Ping! Ping!",
        b: "B: Beep! Beep!",
        c: "C: Aooga! Aooga!",
        d: "D: Vroom! Vroom!",
        correctAns: "b",
        correctDiv: "bdiv"
    },
    {
        worth: 200,
        qText: "Where should choking victims place their hands to indicate to others that they need help?",
        a: "A: Over the eyes",
        b: "B: On the knees",
        c: "C: Around the throat",
        d: "D: On the hips",
        correctAns: "c",
        correctDiv: "cdiv"
    },
    {
        worth: 300,
        qText: "Which of these dance names is used to describe a fashionable dot?",
        a: "A: Hora",
        b: "B: Swing",
        c: "C: Lambada",
        d: "D: Polka",
        correctAns: "d",
        correctDiv: "ddiv"
    },
    {
        worth: 500,
        qText: "In what 'language' would you say 'ello-hay' to greet your friends?",
        a: "A: Bull Latin",
        b: "B: Dog Latin",
        c: "C: Duck Latin",
        d: "D: Pig Latin",
        correctAns: "d",
        correctDiv: "ddiv"
    },
    {
        worth: 1000,
        qText: "What part of a chicken is commonly called the 'drumstick'?",
        a: "A: Breast",
        b: "B: Wing",
        c: "C: Leg",
        d: "D: Gizzard",
        correctAns: "c",
        correctDiv: "cdiv"
    },
    {
        worth: 2000,
        qText: "What is the only position on a football team that can be 'sacked'?",
        a: "A: Center",
        b: "B: Wide receiver",
        c: "C: Tight end",
        d: "D: Quarterback",
        correctAns: "d",
        correctDiv: "ddiv"
    },
    {
        worth: 4000,
        qText: "What god of love is often depicted as a chubby winged infant with a bow and arrow?",
        a: "A: Zeus",
        b: "B: Mercury",
        c: "C: Cupid",
        d: "D: Poseidon",
        correctAns: "c",
        correctDiv: "cdiv"
    },
    {
        worth: 8000,
        qText: "What Steven Spielberg film climaxes at a place called Devil's Tower?",
        a: "A: E.T.: The Extra-Terrestrial",
        b: "B: Jurassic Park",
        c: "C: Raiders of the Lost Ark",
        d: "D: Close Encounters of the Third Kind",
        correctAns: "d",
        correctDiv: "ddiv"
    },
    {
        worth: 16000,
        qText: "In what U.S. town did the famous 1881 shoot-out at the O.K. Corral take place?",
        a: "A: Laramie",
        b: "B: Tombstone",
        c: "C: El Paso",
        d: "D: Dodge City",
        correctAns: "b",
        correctDiv: "bdiv"
    },
    {
        worth: 32000,
        qText: "Which of the following months has no U.S. federal holiday?",
        a: "A: August",
        b: "B: February",
        c: "C: September",
        d: "D: November",
        correctAns: "a",
        correctDiv: "adiv"
    },
    {
        worth: 64000,
        qText: "What mythological beast is reborn from its own ashes?",
        a: "A: Phoenix",
        b: "B: Minotaur",
        c: "C: Dragon",
        d: "D: Golem",
        correctAns: "a",
        correctDiv: "adiv"
    },
    {
        worth: 125000,
        qText: "Who developed the first effective vaccine against polio?",
        a: "A: Albert Sabin",
        b: "B: Niels Bohr",
        c: "C: Louis Pasteur",
        d: "D: Jonas Salk",
        correctAns: "d",
        correctDiv: "ddiv"
    },
    {
        worth: 250000,
        qText: "Which of the following is not a monotheistic religion?",
        a: "A: Islam",
        b: "B: Judaism",
        c: "C: Hinduism",
        d: "D: Christianity",
        correctAns: "c",
        correctDiv: "cdiv"
    },
    {
        worth: 500000,
        qText: "What architect designed the glass pyramid in the courtyard of the Louvre?",
        a: "A: Phillip Johnson",
        b: "B: Le Corbusier",
        c: "C: Frank Gehry",
        d: "D: I.M. Pei",
        correctAns: "d",
        correctDiv: "ddiv"
    },
    {
        worth: 1000000,
        qText: "Which of these U.S. Presidents appeared on the television series 'Laugh-In'?",
        a: "A: Lyndon Johnson",
        b: "B: Richard Nixon",
        c: "C: Jimmy Carter",
        d: "D: Gerald Ford",
        correctAns: "b",
        correctDiv: "bdiv"
    }];
var q = 0;
var time, intervalID, winnings;
function start() {
    time = 30;
    $("#timerText").text(time);
    intervalID = setInterval(countDown, 1000);
}
function stop() {
    clearInterval(intervalID);
}
function countDown() {
    time--;
    $("#timerText").text(time);
    if (time == 0) {
        stop();
        checkAnswers();
    }
}
function millionaire() {
    $("#timerText").text("Millionaire!");
}
function walkAway() {
    stop();
    $("li").removeClass("activeList");
    q--;
    $("#" + questions[q].worth).addClass("activeList");
    let moneyText = "Congratulations!  You won " + $("#" + questions[q].worth).text() + "!";
    $("#timerText").text(moneyText);
}
function nextQuestion() {
    $("#question").text(questions[q].qText);
    $("#a").text(questions[q].a);
    $("#b").text(questions[q].b);
    $("#c").text(questions[q].c);
    $("#d").text(questions[q].d);
    $(".ans").removeClass("bg-success text-dark selected");
    $("li").removeClass("activeList");
    $("#" + questions[q].worth).addClass("activeList");
}
function checkAnswers() {
    if ($(".selected").text().slice(0,1).toLowerCase() == questions[q].correctAns) {
        stop();
        q++;
        if (q == 15) {
            stop();
            millionaire();
        }
        else {
        $(".selected").parent().removeClass("bg-warning").addClass("bg-success");
        $("#timerText").html("Correct!<br><h1>Next Question in 5 Seconds</h1>");
        setTimeout(start, 5000);
        setTimeout(nextQuestion, 5000);
        }
    }
    else {
        if (q <= 4) { winnings = "$0"; }
        else if (q >= 5 && q <= 9) { winnings = "$1,000"; }
        else { winnings = "$32,000"; }
        $("#" + questions[q].correctDiv).addClass("bg-success");
        stop();
        $("#timerText").text("Wrong Answer! You win " + winnings);
    }
}
function clicky() {
    let letter = event.target.id;
    letter = letter.slice(0,1);
    $(".ans").removeClass("bg-warning text-dark selected");
    $("#" + letter + "div").addClass("bg-warning text-dark");
    $("#" + letter).addClass("selected");
}
$(function() {
    $(".ans").on("click", clicky);      //Listen for clicks on answers
    $("#ins").modal();   //Instructions pop-up.  Game initializes on confirmation.
});