var questions = {
    q1: {
        worth: 100,
        qText: "In the 'Road Runner and Coyote' cartoons, what famous sound does the Road Runner make?",
        a: "Ping! Ping!",
        b: "Beep! Beep!",
        c: "Aooga! Aooga!",
        d: "Vroom! Vroom!",
        correctAns: "Vroom! Vroom!"
    },
    q2: {
        worth: 200,
        qText: "Where should choking victims place their hands to indicate to others that they need help?",
        a: "Over the eyes",
        b: "On the knees",
        c: "Around the throat",
        d: "On the hips",
        correctAns: "Around the throat"
    },
    q3: {
        worth: 300,
        qText: "Which of these dance names is used to describe a fashionable dot?",
        a: "Hora",
        b: "Swing",
        c: "Lambada",
        d: "Polka",
        correctAns: "Polka" 
    },
    q4: {
        worth: 500,
        qText: "In what 'language' would you say 'ello-hay' to greet your friends?",
        a: "Bull Latin",
        b: "Dog Latin",
        c: "Duck Latin",
        d: "Pig Latin",
        correctAns: "Pig Latin"
    },
    q5: {
        worth: 1000,
        qText: "What part of a chicken is commonly called the 'drumstick'?",
        a: "Breast",
        b: "Wing",
        c: "Leg",
        d: "Gizzard",
        correctAns: "Leg" 
    },
    q6: {
        worth: 2000,
        qText: "What is the only position on a football team that can be 'sacked'?",
        a: "Center",
        b: "Wide receiver",
        c: "Tight end",
        d: "Quarterback",
        correctAns: "Quarterback"
    },
    q7: {
        worth: 4000,
        qText: "What god of love is often depicted as a chubby winged infant with a bow and arrow?",
        a: "Zeus",
        b: "Mercury",
        c: "Cupid",
        d: "Poseidon",
        correctAns: "Cupid"
    },
    q8: {
        worth: 8000,
        qText: "What Steven Spielberg film climaxes at a place called Devil's Tower?",
        a: "E.T.: The Extra-Terrestrial",
        b: "Jurassic Park",
        c: "Raiders of the Lost Ark",
        d: "Close Encounters of the Third Kind",
        correctAns: "Close Encounters of the Third Kind"
    },
    q9: {
        worth: 16000,
        qText: "In what U.S. town did the famous 1881 shoot-out at the O.K. Corral take place?",
        a: "Laramie",
        b: "Tombstone",
        c: "El Paso",
        d: "Dodge City",
        correctAns: "Tombstone"
    },
    q10: {
        worth: 32000,
        qText: "Which of the following months has no U.S. federal holiday?",
        a: "August",
        b: "February",
        c: "September",
        d: "November",
        correctAns: "August"
    },
    q11: {
        worth: 64000,
        qText: "What mythological beast is reborn from its own ashes?",
        a: "Phoenix",
        b: "Minotaur",
        c: "Dragon",
        d: "Golem",
        correctAns: "Phoenix"
    },
    q12: {
        worth: 125000,
        qText: "Who developed the first effective vaccine against polio?",
        a: "Albert Sabin",
        b: "Niels Bohr",
        c: "Louis Pasteur",
        d: "Jonas Salk",
        correctAns: "Jonas Salk"
    },
    q13: {
        worth: 250000,
        qText: "Which of the following is not a monotheistic religion?",
        a: "Islam",
        b: "Judaism",
        c: "Hinduism",
        d: "Christianity",
        correctAns: "Hinduism"
    },
    q14: {
        worth: 500000,
        qText: "What architect designed the glass pyramid in the courtyard of the Louvre?",
        a: "Phillip Johnson",
        b: "Le Corbusier",
        c: "Frank Gehry",
        d: "I.M. Pei",
        correctAns: "I.M. Pei"
    },
    q15: {
        worth: 1000000,
        qText: "Which of these U.S. Presidents appeared on the television series 'Laugh-In'?",
        a: "Lyndon Johnson",
        b: "Richard Nixon",
        c: "Jimmy Carter",
        d: "Gerald Ford",
        correctAns: "Richard Nixon"
    }
}

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