//set questions, answers, and other values
var questions = [
    {
        worth: 100,
        qText: "In the 'Road Runner and Coyote' cartoons, what famous sound does the Road Runner make?",
        a: "Ping! Ping!",
        b: "Beep! Beep!",
        c: "Aooga! Aooga!",
        d: "Vroom! Vroom!",
        correctAns: "Beep! Beep!",
        correctDiv: "bdiv"
    },
    {
        worth: 200,
        qText: "Where should choking victims place their hands to indicate to others that they need help?",
        a: "Over the eyes",
        b: "On the knees",
        c: "Around the throat",
        d: "On the hips",
        correctAns: "Around the throat",
        correctDiv: "cdiv"
    },
    {
        worth: 300,
        qText: "Which of these dance names is used to describe a fashionable dot?",
        a: "Hora",
        b: "Swing",
        c: "Lambada",
        d: "Polka",
        correctAns: "Polka",
        correctDiv: "ddiv"
    },
    {
        worth: 500,
        qText: "In what 'language' would you say 'ello-hay' to greet your friends?",
        a: "Bull Latin",
        b: "Dog Latin",
        c: "Duck Latin",
        d: "Pig Latin",
        correctAns: "Pig Latin",
        correctDiv: "ddiv"
    },
    {
        worth: 1000,
        qText: "What part of a chicken is commonly called the 'drumstick'?",
        a: "Breast",
        b: "Wing",
        c: "Leg",
        d: "Gizzard",
        correctAns: "Leg",
        correctDiv: "cdiv"
    },
    {
        worth: 2000,
        qText: "What is the only position on a football team that can be 'sacked'?",
        a: "Center",
        b: "Wide receiver",
        c: "Tight end",
        d: "Quarterback",
        correctAns: "Quarterback",
        correctDiv: "ddiv"
    },
    {
        worth: 4000,
        qText: "What god of love is often depicted as a chubby winged infant with a bow and arrow?",
        a: "Zeus",
        b: "Mercury",
        c: "Cupid",
        d: "Poseidon",
        correctAns: "Cupid",
        correctDiv: "cdiv"
    },
    {
        worth: 8000,
        qText: "What Steven Spielberg film climaxes at a place called Devil's Tower?",
        a: "E.T.: The Extra-Terrestrial",
        b: "Jurassic Park",
        c: "Raiders of the Lost Ark",
        d: "Close Encounters of the Third Kind",
        correctAns: "Close Encounters of the Third Kind",
        correctDiv: "ddiv"
    },
    {
        worth: 16000,
        qText: "In what U.S. town did the famous 1881 shoot-out at the O.K. Corral take place?",
        a: "Laramie",
        b: "Tombstone",
        c: "El Paso",
        d: "Dodge City",
        correctAns: "Tombstone",
        correctDiv: "bdiv"
    },
    {
        worth: 32000,
        qText: "Which of the following months has no U.S. federal holiday?",
        a: "August",
        b: "February",
        c: "September",
        d: "November",
        correctAns: "August",
        correctDiv: "adiv"
    },
    {
        worth: 64000,
        qText: "What mythological beast is reborn from its own ashes?",
        a: "Phoenix",
        b: "Minotaur",
        c: "Dragon",
        d: "Golem",
        correctAns: "Phoenix",
        correctDiv: "adiv"
    },
    {
        worth: 125000,
        qText: "Who developed the first effective vaccine against polio?",
        a: "Albert Sabin",
        b: "Niels Bohr",
        c: "Louis Pasteur",
        d: "Jonas Salk",
        correctAns: "Jonas Salk",
        correctDiv: "ddiv"
    },
    {
        worth: 250000,
        qText: "Which of the following is not a monotheistic religion?",
        a: "Islam",
        b: "Judaism",
        c: "Hinduism",
        d: "Christianity",
        correctAns: "Hinduism",
        correctDiv: "cdiv"
    },
    {
        worth: 500000,
        qText: "What architect designed the glass pyramid in the courtyard of the Louvre?",
        a: "Phillip Johnson",
        b: "Le Corbusier",
        c: "Frank Gehry",
        d: "I.M. Pei",
        correctAns: "I.M. Pei",
        correctDiv: "ddiv"
    },
    {
        worth: 1000000,
        qText: "Which of these U.S. Presidents appeared on the television series 'Laugh-In'?",
        a: "Lyndon Johnson",
        b: "Richard Nixon",
        c: "Jimmy Carter",
        d: "Gerald Ford",
        correctAns: "Richard Nixon",
        correctDiv: "bdiv"
    }];


var questionNumber = 0;
var time;
var intervalID;

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
    questionNumber--;
    $("#" + questions[questionNumber].worth).addClass("activeList");
    let moneyText = "Congratulations!  You won " + $("#" + questions[questionNumber].worth).text() + "!";
    $("#timerText").text(moneyText);
}

//Loads the next question
function nextQuestion() {
    //set next question
    $("#question").text(questions[questionNumber].qText);

    //set answers for next question
    $("#aText").text(questions[questionNumber].a);
    $("#bText").text(questions[questionNumber].b);
    $("#cText").text(questions[questionNumber].c);
    $("#dText").text(questions[questionNumber].d);

    //blank out background colors for active guess and correct answer
    $("div[target='answer'], span[target='answerText']").removeClass("bg-success text-dark selected");

    //increment question value
    $("li").removeClass("activeList");
    $("#" + questions[questionNumber].worth).addClass("activeList");
}

//Checks to see if answer is correct or wrong
function checkAnswers() {
    //shows if a button has actually been clicked
    console.log($(".selected").text());

    //check if answer given is correct
    if ($(".selected").text() == questions[questionNumber].correctAns) {
        
        //stop the timer
        stop();

        //increment question number in preparation for loading of next question since the answer was correct
        questionNumber++;

        //Check to see if contestant has won the million dollars
        if (questionNumber == 15) {
            stop();
            millionaire();
        }
        else {
        //change correct answer background from selected orange to correct green
        $(".selected").parent().parent().removeClass("bg-warning").addClass("bg-success");

        //Set timer area to show correct answer
        $("#timerText").text("Correct!");

        //Set two 5 second timeouts.  First will restart 30 second clock.  Second loads next question.
        setTimeout(start, 5000);
        setTimeout(nextQuestion, 5000);
        }
    }
    //run this on wrong answer
    else {
        //Set background of correct answer to green.  Leave selected wrong answer as orange
        $("#" + questions[questionNumber].correctDiv).addClass("bg-success");
        
        //Stop timer
        stop();

        //Show game over
        $("#timerText").text("Game Over!");

        //Game code terminates
    }
}

//handles click events on answers
function clicky() {
    
    //get letter clicked
    let letter = event.target.id;

    //Log what was clicked for debugging purposes
    console.log(letter + " click");

    //Clean up retrieved ids
    letter = letter.slice(0,1);

    //This line blanks out all answers, ensuring only one can be selected at a time.
    $("div[target='answer'], span[target='answerText']").removeClass("bg-warning text-dark selected");

    //Add background color to currently selected answer
    //Currently selected answer is denoted internally by adding a blank "selected" CSS class
    $("#" + letter + "div").addClass("bg-warning text-dark");
    $("#" + letter + "Text").addClass("selected");
}




/*
EVENT LISTENING AND GAME INITIALIZATION CODE
*/
$(function() {
    $(".ans").on("click", clicky);      //Listen for clicks on answers
    $("#exampleModalCenter").modal();   //Instructions pop-up.  Game initializes on confirmation.
});