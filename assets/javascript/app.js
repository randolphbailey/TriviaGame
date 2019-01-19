//set questions, answers, and other values
var questions = [
    {
        worth: "$100",
        qText: "In the 'Road Runner and Coyote' cartoons, what famous sound does the Road Runner make?",
        a: "A: Ping! Ping!",
        b: "B: Beep! Beep!",
        c: "C: Aooga! Aooga!",
        d: "D: Vroom! Vroom!",
        correctAns: "b"
    },
    {
        worth: "$200",
        qText: "Where should choking victims place their hands to indicate to others that they need help?",
        a: "A: Over the eyes",
        b: "B: On the knees",
        c: "C: Around the throat",
        d: "D: On the hips",
        correctAns: "c"
    },
    {
        worth: "$300",
        qText: "Which of these dance names is used to describe a fashionable dot?",
        a: "A: Hora",
        b: "B: Swing",
        c: "C: Lambada",
        d: "D: Polka",
        correctAns: "d"
    },
    {
        worth: "$500",
        qText: "In what 'language' would you say 'ello-hay' to greet your friends?",
        a: "A: Bull Latin",
        b: "B: Dog Latin",
        c: "C: Duck Latin",
        d: "D: Pig Latin",
        correctAns: "d"
    },
    {
        worth: "$1,000",
        qText: "What part of a chicken is commonly called the 'drumstick'?",
        a: "A: Breast",
        b: "B: Wing",
        c: "C: Leg",
        d: "D: Gizzard",
        correctAns: "c"
    },
    {
        worth: "$2,000",
        qText: "What is the only position on a football team that can be 'sacked'?",
        a: "A: Center",
        b: "B: Wide receiver",
        c: "C: Tight end",
        d: "D: Quarterback",
        correctAns: "d"
    },
    {
        worth: "$4,000",
        qText: "What god of love is often depicted as a chubby winged infant with a bow and arrow?",
        a: "A: Zeus",
        b: "B: Mercury",
        c: "C: Cupid",
        d: "D: Poseidon",
        correctAns: "c"
    },
    {
        worth: "$8,000",
        qText: "What Steven Spielberg film climaxes at a place called Devil's Tower?",
        a: "A: E.T.: The Extra-Terrestrial",
        b: "B: Jurassic Park",
        c: "C: Raiders of the Lost Ark",
        d: "D: Close Encounters of the Third Kind",
        correctAns: "d"
    },
    {
        worth: "$16,000",
        qText: "In what U.S. town did the famous 1881 shoot-out at the O.K. Corral take place?",
        a: "A: Laramie",
        b: "B: Tombstone",
        c: "C: El Paso",
        d: "D: Dodge City",
        correctAns: "b"
    },
    {
        worth: "$32,000",
        qText: "Which of the following months has no U.S. federal holiday?",
        a: "A: August",
        b: "B: February",
        c: "C: September",
        d: "D: November",
        correctAns: "a"
    },
    {
        worth: "$64,000",
        qText: "What mythological beast is reborn from its own ashes?",
        a: "A: Phoenix",
        b: "B: Minotaur",
        c: "C: Dragon",
        d: "D: Golem",
        correctAns: "a"
    },
    {
        worth: "$125,000",
        qText: "Who developed the first effective vaccine against polio?",
        a: "A: Albert Sabin",
        b: "B: Niels Bohr",
        c: "C: Louis Pasteur",
        d: "D: Jonas Salk",
        correctAns: "d"
    },
    {
        worth: "$250,000",
        qText: "Which of the following is not a monotheistic religion?",
        a: "A: Islam",
        b: "B: Judaism",
        c: "C: Hinduism",
        d: "D: Christianity",
        correctAns: "c"
    },
    {
        worth: "$500,000",
        qText: "What architect designed the glass pyramid in the courtyard of the Louvre?",
        a: "A: Phillip Johnson",
        b: "B: Le Corbusier",
        c: "C: Frank Gehry",
        d: "D: I.M. Pei",
        correctAns: "d"
    },
    {
        worth: "$1,000,000",
        qText: "Which of these U.S. Presidents appeared on the television series 'Laugh-In'?",
        a: "A: Lyndon Johnson",
        b: "B: Richard Nixon",
        c: "C: Jimmy Carter",
        d: "D: Gerald Ford",
        correctAns: "b"
    }];

//Question number
var q = 0;
//Initialize time value, timer interval var, next question interval var, and current winnings var.
var time, intervalID, winnings, nextID;

//start 1 second timer that calls "countDown" function to update timer value on the page
//countDown function contains logic to clear interval when timer reaches 0
function start() {
    time = 30;
    $(".timerText").text(time);
    intervalID = setInterval(countDown, 1000);
}

//stop the timer
function stop() {
    clearInterval(intervalID);
}

//decrement time elapsed, update timer value in HTML, and check to see if time has run out
function countDown() {
    time--;
    $(".timerText").text(time);
    if (time == 0) {
        stop();
        checkAnswers();
    }
}

//Resets game without needing to reload page.
function reset() {
    q = 0;
    stop();
    clearTimeout(nextID);
    nextQuestion();
    start();
}

//Run if person correctly guesses million dollar question
function millionaire() {
    $(".timerText").text("Millionaire!").addClass("gold");
}

//Run if person wished to walk away with current money
function walkAway() {
    stop();
    //changes question back to previously correct answer, outputs amount won and updates value list
    q--;
    $("li").removeClass("activeList");
    let moneyText = $("li:contains('" + questions[q].worth + "')").last().addClass("activeList").text();
    $(".timerText").text("Congratulations!  You won " + moneyText + "!");
}

//Loads the next question
function nextQuestion() {
    //set next question
    $("#question").text(questions[q].qText);

    //set answers for next question
    $("#a").text(questions[q].a);
    $("#b").text(questions[q].b);
    $("#c").text(questions[q].c);
    $("#d").text(questions[q].d);

    //blank out background colors for active guess and correct answer
    $(".ans").removeClass("bg-success text-dark selected");

    //increment question value.  "last()" required because 2nd jQuery search will return 500, and 500,000; 1,000 and 1,000,000
    $("li").removeClass("activeList");
    $("li:contains('" + questions[q].worth + "')").last().addClass("activeList");
}

//Checks to see if answer is correct or wrong
function checkAnswers() {
    //shows if a button has actually been clicked
    console.log($(".selected").text());

    //stop timer
    stop();

    //check if answer given is correct
    if ($(".selected").attr("id") == questions[q].correctAns) {

        //increment question number in preparation for loading of next question since the answer was correct
        q++;

        //Check to see if contestant has won the million dollars
        if (q == 15) {
            stop();
            millionaire();
        }
        else {
        //change correct answer background from "selected orange" to "correct green"
        $(".selected").removeClass("bg-warning").addClass("bg-success");

        //Set timer area to show correct answer
        $(".timerText").html("Correct!<br><h1>Next Question in 3 Seconds</h1>");

        //Set 3 second timeout.  Runs two functions to both start clock and load next question.
        nextID = setTimeout(function() { start(); nextQuestion(); }, 3000);
        }
    }
    //run this on wrong answer
    else {
        //Checkpoint logic
        if (q <= 4) { winnings = "$0"; }
        else if (q >= 5 && q <= 9) { winnings = "$1,000"; }
        else { winnings = "$32,000"; }

        //Set background of correct answer to green.  Leave selected wrong answer as orange
        $("#" + questions[q].correctAns).addClass("bg-success");

        //Show game over
        $(".timerText").text("Wrong Answer! You win " + winnings);
    }
}

//handles click events on answers
function clicky() {
    
    //This line blanks out all answers, ensuring only one can be selected at a time.
    $(".ans").removeClass("bg-warning text-dark selected");

    //Re-Add background color only to currently selected answer
    //Currently selected answer is denoted internally by adding a blank "selected" CSS class
    $("#" + event.target.id).addClass("selected bg-warning text-dark");
}


/*
EVENT LISTENING AND GAME INITIALIZATION CODE
*/
$(function() {
    $(".ans").on("click", clicky);      //Listen for clicks on answers, runs function "clicky" when fired
    $("#ins").modal();   //Instructions pop-up.  Game initializes on confirmation.
});