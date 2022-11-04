/* TODO
- create timer
- function to subtract time if they get answer wrong
- displaying questions
- randomize questions (extra credit)
- display correct/incorrect answer at bottom
- tally scores and display high scores list
- try again 
*/

// QUESTIONS ARRAY //
const questionsArray = [{
    id: 0, 
    q: `Traditionally, what is the crust on a cheesecake made of?`, 
    a: [{text: `Graham cracker`, isCorrect: true}, 
        {text: `Ladyfingers`, isCorrect: false }, 
        {text: 'Pastry', isCorrect: false}, 
        {text: 'Oreos', isCorrect: false}
    ]
},
{
    id: 1, 
    q: `What gives brown sugar its color? `, 
    a: [{text: 'Molasses', isCorrect: true}, 
        {text: 'Golden corn syrup', isCorrect: false }, 
        {text: 'Vanilla extract', isCorrect: false}, 
        {text: 'Maple syrup', isCorrect: false}
    ]
},
{
    id: 2, 
    q: `What are the two main ingredients in an American buttercream?`,
    a: [{text: `Egg whites and butter`, isCorrect: false}, 
        {text: `Granulated sugar and butter`, isCorrect: false}, 
        {text: `Powdered sugar and shortening`, isCorrect: false}, 
        {text: `Powdered sugar and butter`, isCorrect: true}
    ]
}, 
{
    id: 3, 
    q: `Who is the "male judge" on the Great British Baking Show?`,
    a: [{text: `Anton Ego`, isCorrect: false}, 
        {text: `Paul Hollywood`, isCorrect: true}, 
        {text: `Duff Goldman`, isCorrect: false}, 
        {text: `Samuel Girard`, isCorrect: false}
    ]
}, 
{
    id: 4, 
    q: `Traditionally, what cheese is used to fill cannoli?`,
    a: [{text: `Sweetened cream cheese`, isCorrect: false}, 
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
const startButton = document.getElementById('start-btn'); 
const questionContainer = document.getElementById('question-container')
const optionBtn = document.querySelectorAll('.option'); 
const question = document.getElementById('question');
const answer = document.getElementById('answer');
const scores = document.getElementById('scores'); 
const timer = document.getElementById('timer'); 


function startQuiz() {
    startButton.addEventListener('click', function() {
        startButton.classList.add('hide');
        // Need to start timer in here somewhere
        console.log('Start button clicked'); 
        questionContainer.classList.remove('hide');
    }
)}

/**
 * 
 * @param {*} id 
 */

function showQuestion(id) {
    question.innerText = questionsArray[id].q; 

    optionBtn.forEach((btn, i) => {
        btn.innerText = questionsArray[id].a[i].text; 
        btn.value = questionsArray[id].a[i].isCorrect;
        btn.addEventListener('click', function() {
            console.log(questionsArray[id].a[i].text); 
    });


        // op1.innerText = ('');
        // op2.innerText = ('');
        // op3.innerText = ('');
        // op4.innerText = ('');
        // op1.value.remove;
        // op2.value.remove; 
        // op3.value.remove; 
        // op4.value.remove; 
        // showQuestion++; for each??
    })
    }
 

startQuiz(); 
showQuestion(0); 

