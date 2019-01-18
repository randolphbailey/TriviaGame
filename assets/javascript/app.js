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

//Question number
var q = 0;
//Initialize time value, interval var and current winnings var.
var time, intervalID, winnings;

//start 30 second timer and update HTML on page, call countDown function to decrement time
function start() {
    time = 30;
    $("#timerText").text(time);
    intervalID = setInterval(countDown, 1000);
}

//stop the timer
function stop() {
    clearInterval(intervalID);
}

//decrement time elapsed and check to see if time has run out
function countDown() {
    time--;
    $("#timerText").text(time);
    if (time == 0) {
        stop();
        checkAnswers();
    }
}

//Run if person correctly guesses million dollar question
function millionaire() {
    $("#timerText").text("Millionaire!");
}

//Run if person wished to walk away with current money
function walkAway() {
    stop();
    //changes question back to previously correct answer, outputs amount won and updates value list
    $("li").removeClass("activeList");
    q--;
    $("#" + questions[q].worth).addClass("activeList");
    let moneyText = "Congratulations!  You won " + $("#" + questions[q].worth).text() + "!";
    $("#timerText").text(moneyText);
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

    //increment question value
    $("li").removeClass("activeList");
    $("#" + questions[q].worth).addClass("activeList");
}

//Checks to see if answer is correct or wrong
function checkAnswers() {
    //shows if a button has actually been clicked
    console.log($(".selected").text());

    //check if answer given is correct
    if ($(".selected").text().slice(0,1).toLowerCase() == questions[q].correctAns) {
        
        //stop the timer
        stop();

        //increment question number in preparation for loading of next question since the answer was correct
        q++;

        //Check to see if contestant has won the million dollars
        if (q == 15) {
            stop();
            millionaire();
        }
        else {
        //change correct answer background from selected orange to correct green
        $(".selected").parent().removeClass("bg-warning").addClass("bg-success");

        //Set timer area to show correct answer
        $("#timerText").html("Correct!<br><h1>Next Question in 5 Seconds</h1>");

        //Set two 5 second timeouts.  First will restart 30 second clock.  Second loads next question.
        setTimeout(start, 5000);
        setTimeout(nextQuestion, 5000);
        }
    }
    //run this on wrong answer
    else {
        //Checkpoint logic
        if (q <= 4) { winnings = "$0"; }
        else if (q >= 5 && q <= 9) { winnings = "$1,000"; }
        else { winnings = "$32,000"; }

        //Set background of correct answer to green.  Leave selected wrong answer as orange
        $("#" + questions[q].correctDiv).addClass("bg-success");
        
        //Stop timer
        stop();

        //Show game over
        $("#timerText").text("Wrong Answer! You win " + winnings);

        //Game code terminates
    }
}

//handles click events on answers
function clicky() {
    
    //get letter clicked
    let letter = event.target.id;

    //Log what was clicked for debugging purposes
    console.log(letter + " click");

    //Trim target ID if div clicked
    letter = letter.slice(0,1);

    //This line blanks out all answers, ensuring only one can be selected at a time.
    $(".ans").removeClass("bg-warning text-dark selected");

    //Add background color to currently selected answer
    //Currently selected answer is denoted internally by adding a blank "selected" CSS class
    $("#" + letter + "div").addClass("bg-warning text-dark");
    $("#" + letter).addClass("selected");
}




/*
EVENT LISTENING AND GAME INITIALIZATION CODE
*/
$(function() {
    $(".ans").on("click", clicky);      //Listen for clicks on answers, runs function "clicky" when fired
    $("#ins").modal();   //Instructions pop-up.  Game initializes on confirmation.
});