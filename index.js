var readLineSync = require('readline-sync')
const chalk = require('chalk');

var userName = readLineSync.question("What's your name ? ")
console.log("Welcome " +  userName + " to " + chalk.yellow('DO YOU KNOW Snigdha ?'));

var score = 0;

//High Scores
var highScores = [
  {
    name: "Arul",
    score: 3
  },
  {
    name: "Prakarsh",
    score: 2
  }
]

//Function for the game
function play(question, answer) {
 
 var userAnswer = readLineSync.question(question);

 if(userAnswer.toLowerCase() === answer.toLowerCase()) {
   console.log(chalk.green("Correct Answer! "));
   score++;
 } else {
   console.log(chalk.red("Wrong Answer! "));
   score--;
 }

console.log("Current Score: " + chalk.yellow(score));
console.log("--------------------------");

}

//List of questions and answers
var questionOne = {
  question: "Where does Snigdha work ? ",
  answer:  "Amazon"
}

var questionTwo = {
  question: "Where does Snigdha live ? ",
  answer:  "Seattle"
}

var questionThree = {
  question: "What is Snigdha's favourite food ? ",
  answer: "Momos"
}

var questions = [questionOne, questionTwo, questionThree];

var numberOfQuestions = questions.length;

for(var i = 0; i < numberOfQuestions; i++) {
  play(questions[i].question, questions[i].answer);
}
console.log("GAME OVER! Your Final Score : " + score + "/" + numberOfQuestions + "\n");

//Leaderboard
console.log(chalk.white.bgRed.bold("Current Leaderboard"));
console.log("--------------------------");


var userBeatHighScore = false;

for(var i = 0; i < highScores.length; i++) {

  console.log(highScores[i].name + " : " + highScores[i].score);
  if(score >= highScores[i].score) {
    userBeatHighScore = true;
  }

}
console.log("--------------------------");

if(userBeatHighScore) {
console.log("Think you should be up there? Ping me with a screenshot and I'll add you! ");
} else {
  console.log("Better Luck next time mate!");
}
