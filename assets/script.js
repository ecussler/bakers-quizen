/* TODO
- create timer
- function to subtract time if they get answer wrong
- displaying questions
- display correct/incorrect answer at bottom
- tally scores and display high scores list
- try again 
*/

// QUESTIONS ARRAY //
let questionsArray = [{
    id: 0, 
    q: `Traditionally, what is the crust on a cheesecake made of?`, 
    answer: [{text: `Graham cracker`, isCorrect: true}, 
        {text: `Ladyfingers`, isCorrect: false }, 
        {text: 'Pastry', isCorrect: false}, 
        {text: 'Oreos', isCorrect: false}
    ],
},
{
    id: 1, 
    q: `What gives brown sugar its color? `, 
    answer: [{text: 'Molasses', isCorrect: true}, 
        {text: 'Golden corn syrup', isCorrect: false }, 
        {text: 'Vanilla extract', isCorrect: false}, 
        {text: 'Maple syrup', isCorrect: false}
    ]
},
{
    id: 2, 
    q: `What are the two main ingredients in an American buttercream?`,
    answer: [{text: `Egg whites and butter`, isCorrect: false}, 
        {text: `Granulated sugar and butter`, isCorrect: false}, 
        {text: `Powdered sugar and shortening`, isCorrect: false}, 
        {text: `Powdered sugar and butter`, isCorrect: true}
    ]
}, 
{
    id: 3, 
    q: `Who is the "male judge" on the Great British Baking Show?`,
    answer: [{text: `Anton Ego`, isCorrect: false}, 
        {text: `Paul Hollywood`, isCorrect: true}, 
        {text: `Duff Goldman`, isCorrect: false}, 
        {text: `Samuel Girard`, isCorrect: false}
    ]
}, 
{
    id: 4, 
    q: `Traditionally, what cheese is used to fill cannoli?`,
    answer: [{text: `Sweetened cream cheese`, isCorrect: false}, 
        {text: `Mascarpone`, isCorrect: false}, 
        {text: `Blended cottage cheese`, isCorrect: false}, 
        {text: `Sweetened ricotta`, isCorrect: true}
    ]
}, 
{
    id: 5, 
    q: `In the bread making, what is the process of folding and pressing dough to create gluten?`,
    a: [{text: `Leavening`, isCorrect: false}, 
        {text: `Kneading`, isCorrect: true}, 
        {text: `Proofing`, isCorrect: false}, 
        {text: `Laminating`, isCorrect: false}
    ]
},  
{
    id: 6, 
    q: `When baking a cake, which of the following is NOT a possible rising agent?`,
    a: [{text: `Powdered sugar`, isCorrect: true}, 
        {text: `Eggs`, isCorrect: false}, 
        {text: `Steam`, isCorrect: false}, 
        {text: `Baking powder`, isCorrect: false}
    ]
},
{
    id: 7, 
    q: `What are the two main ingredients of a chocolate ganache?`,
    a: [{text: `Chocolate and butter`, isCorrect: false}, 
        {text: `Chocolate and heavy cream`, isCorrect: true}, 
        {text: `Chocolate and whole milk`, isCorrect: false}, 
        {text: `Chocolate and more chocolate`, isCorrect: false}
    ]
},
{
    id: 8, 
    q: `Which wheat-based flour has the LEAST amount of gluten in it?`,
    a: [{text: `All-purpose flour`, isCorrect: false}, 
        {text: `Bread flour`, isCorrect: false}, 
        {text: `Cake flour`, isCorrect: true}, 
        {text: `Pastry flour`, isCorrect: false}
    ]
}, 
{
    id: 9, 
    q: `In pie baking, what is the process called when the crust is baked fully before adding any filling?`,
    a: [{text: `Full baking`, isCorrect: false}, 
        {text: `Par-baking`, isCorrect: false}, 
        {text: `Blind baking`, isCorrect: true}, 
        {text: `Shell baking`, isCorrect: false}
    ]
},
{
    id: 10, 
    q: `When fed sugar or starch, yeast releases tiny bubbles of what, causing your dough to rise?`,
    a: [{text: `Caffeine`, isCorrect: false}, 
        {text: `Carbon dioxide`, isCorrect: true}, 
        {text: `Oxygen`, isCorrect: false}, 
        {text: `Water`, isCorrect: false}
    ]
},
{ 
    id: 11, 
    q: `What can you use instead of eggs to make a vegan meringue?`,
    a: [{text: `Coconut cream`, isCorrect: false}, 
        {text: `Flax egg`, isCorrect: false}, 
        {text: `Whipped powdered sugar and water`, isCorrect: false}, 
        {text: `Aqua faba aka. liquid from a can of garbanzo beans!`, isCorrect: true}
    ]
}, 
{
    id: 12, 
    q: `Which is the best cookie?`,
    a: [{text: `Chocolate chip`, isCorrect: true}, 
        {text: `Ginger molasses`, isCorrect: true}, 
        {text: `Peanut butter`, isCorrect: true}, 
        {text: `Snickerdoodle`, isCorrect: true}
    ]
}
]

// VARIABLES //

const startBtn = document.getElementById('start-btn'); 
const nextBtn = document.getElementById('next-btn'); 
const restartBtn = document.getElementById('restart-btn'); 
const optionBtn = document.querySelectorAll('.option');
const submitBtn = document.getElementById('submit-btn'); 

const timer = document.getElementById('timerTxt'); 
let timeLeft = 8; 

const questionContainer = document.getElementById('question-container');
const question = document.getElementById('question');
let questionCount = 0; 
const answerContainer = document.getElementById('answer-text'); 

const scoreEl = document.getElementById('scores'); 
let score = 0;


const topScoresContainer = document.getElementById('top-scores-container');
let topScoresList = document.getElementById('top-scores-ol');



// FUNCTION TO START QUIZ ON START BUTTON CLICK

function startQuiz() {
    startBtn.addEventListener('click', function() {
        startBtn.classList.add('hide');
        timer.classList.remove('hide'); 
        questionContainer.classList.remove('hide');
        score = 0; 
        setTime();
    })
    optionBtn.forEach((btn, i) => {
        btn.addEventListener('click', function() { 
            checkCorrect(i); 
            });
        }); 
    showQuestion(questionCount); 
}


/**
 * FUNCTION TO CHECK ANSWER FOR CORRECT
 * @param {*} i - references index number of questionsCount
 */
function checkCorrect(i) { 
    nextBtn.classList.remove('hide');
    if (questionsArray[questionCount].answer[i].isCorrect) {
        answerContainer.innerText = 'You got it!'
        score++; 
        scoreEl.innerText = `Score: ${score}`; 
    } else {
        answerContainer.innerText = 'Sorry - that incorrect.'
        timeLeft = timeLeft - 5; 
    }
}


// FUNCTION TO SET TIMER

function setTime() {
    timeLeft = 8; 
    var timerInterval = setInterval(function() {
        timeLeft--; 
        timer.textContent = `You have ${timeLeft} seconds left`;
        
        if(timeLeft <= 0) {
            timer.classList.add('hide'); 
            clearTimeout(timer); 
            questionContainer.classList.add('hide'); 
            restartBtn.classList.remove('hide'); 
        }
    }, 1000); 
}


/**
 * FUNCTION TO DISPLAY QUESTION
 * This function iterates through the answers in the questionsArray and populates them in the options buttons. 
 * Determines if the clicked button is correct; adds points for correct, decrements timer for incorrect. 
 * @param {*} id 
 */

function showQuestion(id) {
    // if/else move through questions until there are no longer questions to display
    if (questionCount < questionsArray.length) {
        question.innerText = questionsArray[id].q; 
        // Iterates through options array, notes if correct/incorrect and takes appropriate action until it runs out of questions.
            optionBtn.forEach((btn, i) => {
            btn.innerText = questionsArray[id].answer[i].text; 
            }); 
    } else {
        displayUserInput(); 
    }
}



// FUNCTION TO RESET THE QUESTION TEXT AND VALUES

function resetQuestion() {
    nextBtn.classList.add('hide'); 
    question.innerText = ''; 
    answerContainer.innerText = ''; 
    optionBtn.forEach((btn) => {
        btn.innerText = '';
        btn.value = ''; 
    })
 } 

 
// EVENT LISTENER ON 'NEXT' TO ITERATE THROUGH QUESTIONS ARRAY

 nextBtn.addEventListener('click', function() {
    resetQuestion();  
    questionCount++; 
    showQuestion(questionCount); 
})


// EVENT LISTENER ON RESTART BUTTON

restartBtn.addEventListener('click', function() {
    restartBtn.classList.add('hide');
    timer.classList.remove('hide'); 
    questionContainer.classList.remove('hide');        
    topScoresContainer.classList.add('hide');
    score = 0; 
    setTime();
})



// EVENT LISTENER ON SUBMIT BUTTON STORES INFO TO LOCAL STORAGE AND POPULATES NAME/SCORE TO LIST

submitBtn.addEventListener('click', function(event) {
    let username = document.querySelector('#username').value; 
    let userScore = score; 
    if (username === '') {
        window.alert('Please enter your initials'); 
        return; 
    } else {
        localStorage.setItem('username', username); 
        localStorage.setItem('userScore', userScore); 
    }
    restartBtn.classList.remove('hide'); 
    scoreEl.innerText = `Would you like to play again?`; 
    renderTopScores()    

})


// FUNCTION TO GET STORED ITEMS FROM LOCAL AND APPEND THEM TO THE ORDERED LIST

function renderTopScores() {
    let username = localStorage.getItem('username'); 
    let userScore = localStorage.getItem('userScore'); 
    let listEl = document.createElement('ol'); 
    let liEl = document.createElement('li'); 
    topScoresContainer.appendChild(listEl); 
    liEl.textContent = `${username}: ${userScore} points`; 
    listEl.appendChild(liEl); 
}

// DISPLAYS USER INPUT SCREEN TO ENTER INITIALS

function displayUserInput() {
    timer.classList.add('hide'); 
    questionContainer.classList.add('hide'); 
    topScoresContainer.classList.remove('hide'); 
}

startQuiz(); 


