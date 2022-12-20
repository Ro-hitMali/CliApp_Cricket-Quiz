var readlineSync = require("readline-sync");

var score = 0;

// data of high score
var highScores = [
  {
    name: "Virat",
    score: 3,
  },
  {
    name: "Dhoni",
    score: 2,
  },
]

/*
function add (numberOne, numberTwo){
  console.log("NumberOne: ", numberOne, "NumberTwo:", numberTwo);
  var sum = numberOne + numberTwo;
  return sum;
}
//use the function 
var result = add (5,7);
console.log("The sum of two numbers is: " + result);
console.log(add(4,6));
*/

// array of objects
var questions = [{
  question: "In which country did cricket originate? (England, India, Australia, Afrika)",
  answer: "England"
}, {
  question: "Which country won the Cricket World Cup the most? (England, India, Australia, Afrika)",
  answer: "Australia"
},
{
  question: "What does IPL stand for?",
  answer: "Indian Premier League"
}, {
  question: "Traditionally, which colour are cricket balls? (White, Red, Milky)",
  answer: "Red"
}, {
  question: "How are the referees called in cricket? (Judge, Supporter, Umpire, backer)",
  answer: "Umpires"
}, {
  question: "Where will the 2023 Cricket World Cup be hosted? (England, India, Australia, Afrika)",
  answer: "India"
}];

function welcome() {
  var userName = readlineSync.question("What's your name? ");

  console.log("Welcome " + userName + "...Lets play quiz on cricket game");
}


// play function
function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) { // branching
    console.log("Right!");
    score = score + 1;

  } else {
    console.log("Wrong!");

  }

  console.log("current score: ", score);
  console.log("-------------")
}

function game() {
  for (var i = 0; i < questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}

function showScores() {
  console.log("YAY! You SCORED: ", score);

  console.log("Check out the high scores");

  highScores.map(score => console.log(score.name, " : ", score.score))
}


welcome();
game();
showScores();

