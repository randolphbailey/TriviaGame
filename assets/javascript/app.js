var questions = {
    q1: {
        worth: 100,
        qText: "In the 'Road Runner and Coyote' cartoons, what famous sound does the Road Runner make?",
        a: "Ping! Ping!",
        b: "Beep! Beep!",
        c: "Aooga! Aooga!",
        d: "Vroom! Vroom!",
        correctAns: "Beep! Beep!",
        correctDiv: "bdiv"
    },
    q2: {
        worth: 200,
        qText: "Where should choking victims place their hands to indicate to others that they need help?",
        a: "Over the eyes",
        b: "On the knees",
        c: "Around the throat",
        d: "On the hips",
        correctAns: "Around the throat",
        correctDiv: "cdiv"
    },
    q3: {
        worth: 300,
        qText: "Which of these dance names is used to describe a fashionable dot?",
        a: "Hora",
        b: "Swing",
        c: "Lambada",
        d: "Polka",
        correctAns: "Polka",
        correctDiv: "ddiv"
    },
    q4: {
        worth: 500,
        qText: "In what 'language' would you say 'ello-hay' to greet your friends?",
        a: "Bull Latin",
        b: "Dog Latin",
        c: "Duck Latin",
        d: "Pig Latin",
        correctAns: "Pig Latin",
        correctDiv: "ddiv"
    },
    q5: {
        worth: 1000,
        qText: "What part of a chicken is commonly called the 'drumstick'?",
        a: "Breast",
        b: "Wing",
        c: "Leg",
        d: "Gizzard",
        correctAns: "Leg",
        correctDiv: "cdiv"
    },
    q6: {
        worth: 2000,
        qText: "What is the only position on a football team that can be 'sacked'?",
        a: "Center",
        b: "Wide receiver",
        c: "Tight end",
        d: "Quarterback",
        correctAns: "Quarterback",
        correctDiv: "ddiv"
    },
    q7: {
        worth: 4000,
        qText: "What god of love is often depicted as a chubby winged infant with a bow and arrow?",
        a: "Zeus",
        b: "Mercury",
        c: "Cupid",
        d: "Poseidon",
        correctAns: "Cupid",
        correctDiv: "cdiv"
    },
    q8: {
        worth: 8000,
        qText: "What Steven Spielberg film climaxes at a place called Devil's Tower?",
        a: "E.T.: The Extra-Terrestrial",
        b: "Jurassic Park",
        c: "Raiders of the Lost Ark",
        d: "Close Encounters of the Third Kind",
        correctAns: "Close Encounters of the Third Kind",
        correctDiv: "ddiv"
    },
    q9: {
        worth: 16000,
        qText: "In what U.S. town did the famous 1881 shoot-out at the O.K. Corral take place?",
        a: "Laramie",
        b: "Tombstone",
        c: "El Paso",
        d: "Dodge City",
        correctAns: "Tombstone",
        correctDiv: "bdiv"
    },
    q10: {
        worth: 32000,
        qText: "Which of the following months has no U.S. federal holiday?",
        a: "August",
        b: "February",
        c: "September",
        d: "November",
        correctAns: "August",
        correctDiv: "adiv"
    },
    q11: {
        worth: 64000,
        qText: "What mythological beast is reborn from its own ashes?",
        a: "Phoenix",
        b: "Minotaur",
        c: "Dragon",
        d: "Golem",
        correctAns: "Phoenix",
        correctDiv: "adiv"
    },
    q12: {
        worth: 125000,
        qText: "Who developed the first effective vaccine against polio?",
        a: "Albert Sabin",
        b: "Niels Bohr",
        c: "Louis Pasteur",
        d: "Jonas Salk",
        correctAns: "Jonas Salk",
        correctDiv: "ddiv"
    },
    q13: {
        worth: 250000,
        qText: "Which of the following is not a monotheistic religion?",
        a: "Islam",
        b: "Judaism",
        c: "Hinduism",
        d: "Christianity",
        correctAns: "Hinduism",
        correctDiv: "cdiv"
    },
    q14: {
        worth: 500000,
        qText: "What architect designed the glass pyramid in the courtyard of the Louvre?",
        a: "Phillip Johnson",
        b: "Le Corbusier",
        c: "Frank Gehry",
        d: "I.M. Pei",
        correctAns: "I.M. Pei",
        correctDiv: "ddiv"
    },
    q15: {
        worth: 1000000,
        qText: "Which of these U.S. Presidents appeared on the television series 'Laugh-In'?",
        a: "Lyndon Johnson",
        b: "Richard Nixon",
        c: "Jimmy Carter",
        d: "Gerald Ford",
        correctAns: "Richard Nixon",
        correctDiv: "bdiv"
    }
}
var questionNumber = 1;
var currentQuestion = "q" + questionNumber;
var time = 30;
var intervalID;

function start() {
    time = 30;
    $(".timerText").text(time);
    intervalID = setInterval(countDown, 1000);
}

function stop() {
    clearInterval(intervalID);
}

function countDown() {
    time--;
    $(".timerText").text(time);
    if (time == 0) {
        stop();
        checkAnswers();
    }
}

function nextQuestion() {
    $("#question").text(questions[currentQuestion].qText);
    $("#aText").text(questions[currentQuestion].a);
    $("#bText").text(questions[currentQuestion].b);
    $("#cText").text(questions[currentQuestion].c);
    $("#dText").text(questions[currentQuestion].d);
    $("div[target='answer']").removeClass("bg-warning text-dark");
    $("span[target='answerText'").removeClass("selected");
    $("li").removeClass("activeList");
    $("#" + questions[currentQuestion].worth).addClass("activeList");
}

function checkAnswers() {
    console.log($(".selected").text());
    if ($(".selected").text() == questions[currentQuestion].correctAns) {
        stop();
        questionNumber++;
        currentQuestion = "q" + questionNumber;
        $(".selected").parent().parent().removeClass("bg-warning");
        $(".selected").parent().parent().addClass("bg-success");
        $(".timerText").text("Correct!");
        setTimeout(start, 5000);
        nextQuestion();
    }
    else {
        $("#" + questions[currentQuestion].correctDiv).addClass("bg-success");
        stop();
        $(".timerText").text("Game Over!");
    }
}

$(function() {
    $("#a").on("click", function() {
        $("div[target='answer']").removeClass("bg-warning text-dark");
        $("span[target='answerText'").removeClass("selected");
        $("#adiv").addClass("bg-warning text-dark");
        $("#aText").addClass("selected");
        console.log("A click");
    });
    $("#b").on("click", function() {
        $("div[target='answer']").removeClass("bg-warning text-dark");
        $("span[target='answerText'").removeClass("selected");
        $("#bdiv").addClass("bg-warning text-dark");
        $("#bText").addClass("selected");
        console.log("B click");
    });
    $("#c").on("click", function() {
        $("div[target='answer']").removeClass("bg-warning text-dark");
        $("span[target='answerText'").removeClass("selected");
        $("#cdiv").addClass("bg-warning text-dark");
        $("#cText").addClass("selected");
        console.log("C click");
    });
    $("#d").on("click", function() {
        $("div[target='answer']").removeClass("bg-warning text-dark");
        $("span[target='answerText'").removeClass("selected");
        $("#ddiv").addClass("bg-warning text-dark");
        $("#dText").addClass("selected");
        console.log("D click");
    });
    nextQuestion();
    $("#exampleModalCenter").modal();
});