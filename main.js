var questions = [{"question":"the firs nechanical computer designrd by charles Babbage wase called ?",
         "option1":"Abacus",
         "option2":"Analytical Engine",
         "option3":"Calculator",
         "option4":"processor",
         "answer":"2"
    },{"question":"The basic operations performed by a computer are ?",
         "option1":"Arithmetic operation",
         "option2":"Logical operation",
         "option3":"Storage and relative",
         "option4":"All the above",
         "answer":"4"
    },{"question":"Who is the father of Internet ?",
         "option1":"Chares Babbage",
         "option2":"Vint Cerf",
         "option3":"Denis Riche",
         "option4":"Martin Cooper",
         "answer":"2"
    },{"question":"What type of operating system MS-DOS is??",
         "option1":"ACommand Line Interface",
         "option2":"Graphical User Interface",
         "option3":"Multitasking",
         "option4":"Menu Driven Interface",
         "answer":"1"
    },{"question":"Web pages are written using ?",
         "option1":"FTP",
         "option2":"HTTP",
         "option3":"HTML",
         "option4":"URL",
         "answer":"3"
    },
    
]


var currentQuestion = 0;
var Score = 0;
var totQuestions = questions.length;

var container = document.getElementById('quizContainer');
var questionEl = document.getElementById('question');
var opt1 = document.getElementById('opt1');
var opt2 = document.getElementById('opt2');
var opt3 = document.getElementById('opt3');
var opt4 = document.getElementById('opt4');
var nextButton = document.getElementById('nextButton');
var resultCont = document.getElementById('result');

function loadQuestion (questionIndex) {
   var q = questions[questionIndex];
   questionEl.textContent=(questionIndex + 1)+ '. ' + q.question;
   opt1.textContent = q.option1;
   opt2.textContent = q.option2;
   opt3.textContent = q.option3;
   opt4.textContent = q.option4;

};
function loadNextQuestion (){
    var selectedOption = document.querySelector('input[type=radio]:checked');
    if(!selectedOption){
        alert('please select your answer!');
        return;
    }
    var answer = selectedOption.value;
    
    if(questions[currentQuestion].answer == answer){
        Score+=10;
    }
    
    selectedOption.checked = false;
    currentQuestion++;
    if(currentQuestion == totQuestions ){
        nextButton.textContent = 'Finish';
    }
    if(currentQuestion == totQuestions){
        container.style.display ='none';
        resultCont.style.display='';
        // document.getElementById('result')= 'your Scour is:'+ Score;
        resultCont.textContent= 'yours Score is '+ Score;
        return;
    }
    loadQuestion(currentQuestion);
}

loadQuestion(currentQuestion);

