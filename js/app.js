'use strict';
var userName = prompt('What is your name?');
alert('Hi, ' + userName + ', great to meet you!!!');
console.log('When asked their name, the user responded ' + userName);

var questionArray = ['Are you from here?', // These arrays are for the intro questions.
  'Let me guess your favourite food. Is it momo?',
  'Is your favourite restaurant Sky Waikiki?',
  'I\'m gonna buy you a drink today. I\'m guessing you like beer.'
];

var correctResponse = [
  'we\'re both from here',
  'That\'s awesome, I love momo too',
  'Thats my favourite restaurant too.',
  'That\'s my number one',
];

var incorrectResponse = [
  'Oh okay. I\'m from here.',
  'Why not? Momo\'s a great food.',
  'Our favourite restaurant is Sky Waikiki.',
  'We\'ll drink your favourite drink today, whatever you like.'
];

var posIntroPrint = [
  'We\'re both from here',
  'We both like momo.',
  'Our favourite restaurant is Sky Waikiki.',
  'Beer is our favourite drink.'
];

var negIntroPrint = [
  'I\'m from here, but he is not.',
  'I love momo, but he  does not.',
  'His favourite restaurant is not Sky Waikiki, but after lunch, it will be.',
  'I love beer, but today we\'ll drink his favourite drink instead.'
];

var idArray = [ //All of the above arrays are for the intro questions.
  'answerPlace',
  'answerFood',
  'answerRestaurant',
  'answerDrink'
];

// This function is for the introduction questions.
function introResponse(i) {

  var userAnswer = prompt(questionArray[i]).toLowerCase();

  if(userAnswer === 'yes' || userAnswer === 'y') {

    alert(correctResponse[i]);
    document.getElementById(idArray[i]).textContent=posIntroPrint[i];
  } else {

    alert(incorrectResponse[i]);
    document.getElementById(idArray[i]).textContent=negIntroPrint[i];
  }
  console.log('User responded to Question ' + i + ' with ' + userAnswer);
}

// This section is variable + function for the languages question.
var correctAnswer = false;
function guessNumber() {
  var numberGuess = prompt('Can you guess how many languages I can speak?');

  if (numberGuess === '5') {
    alert('That\'s right. You are a genius');
    correctAnswer = true;

  } else if (numberGuess < 5) {
    alert('Little higher than that.');

  } else if (numberGuess > 5) {
    alert('Little lower than that.');

  } else {
    alert('Please enter a valid response.');

  }

}

// This section is variables + function for the state question.
var correctStates= ['idaho', 'maryland', 'hawaii'];
var guessRight = false;

function stateGuessFunction () {
  var stateGuess = prompt('Can you name any other states I\'ve lived at besides Washington?').toLowerCase();

  if (correctStates.includes(stateGuess) === true) {
    alert('Hey, you got it right. Good job! \n I\'ve lived previously at Idaho, Maryland and Hawaii.');
    guessRight=true;

  } else {
    alert('Not quite.');
  }
}

// This section is the arrays + function for the quiz game.
var correctQuiz=0;
var quizQuestions= [
  'What is 1+1?',
  'What is the capital of Nepal?',
  'What is square root of four?',
  'Where am I from',
  'Which is the best soccer team in the world'
];

var quizAnswers=[
  '2',
  'kathmandu',
  '2',
  'nepal',
  'liverpool'
];

function quizFunction(i) {
  var userAnswer = prompt(quizQuestions[i]).toLowerCase();

  if(userAnswer === quizAnswers[i]) {
    correctQuiz++;
    alert('That was correct! You\'ve gotten ' + correctQuiz + ' correct out of ' + (i + 1) + '.');

  } else {

    alert('That was incorrect.  You\'ve gotten ' + correctQuiz + ' correct out of ' + (i + 1) + '.');
  }
  console.log('User responded to Question ' + i + ' with ' + userAnswer);
}

for (var i = 0 ; i < questionArray.length ; i++) { // This for loop runs the first 4 questions.

  introResponse(i);
}

for (var j = 0 ; j < 4 && correctAnswer === false; j ++ ) { //This for loop runs the # languages question.

  guessNumber();
}

for (var k = 0 ; k < 7 && guessRight === false ; k++) { // This for loop runs the states question.

  stateGuessFunction();
}

alert('Let\'s play a guessing game. \n Answer the following questions and I\'ll let you know how you did.');

for (i = 0 ; i < 5 ; i++) { // This for loop runs the 5 question quiz game.

  quizFunction(i);
}

// These instructions print the results from the quizzes on the page.
document.getElementById('quizResult').textContent='You got ' + correctQuiz + ' right out of 5 on the quiz game.';
var printAnswers= document.getElementById('answerResults');
console.log(printAnswers);
printAnswers.textContent=' Let\'s see how common we are after that guessing game: ';
