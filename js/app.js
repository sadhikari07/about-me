'use strict';
var userName = prompt('What is your name?');
alert('Hi, ' + userName + ', great to meet you!!!');
console.log('When asked their name, the user responded ' + userName);

var questionArray = ['Are you from here?',
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

var idArray = [
  'answerPlace',
  'answerFood',
  'answerRestaurant',
  'answerDrink'
];

function introResponse(i) {
  console.log('function is working!');

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

for (var i = 0 ; i < questionArray.length ; i++) {

  introResponse(i);

}






var numberLanguages;
var correctAnswer=false;
var actualLanguageNum=5;
for(var languageGuesses=0; languageGuesses<4 && correctAnswer===false;languageGuesses++){
  numberLanguages = prompt('Can you guess how many languages I can speak?');
  if(numberLanguages===actualLanguageNum){
    alert('That\'s right. You are a genius');
    correctAnswer=true;
  }
  else if (numberLanguages<actualLanguageNum) {
    alert('Little higher than that.');  
  }
  else if(numberLanguages>actualLanguageNum){
    alert('Little lower than that.');  
  }
  else{
    alert('Please enter a valid response.');
  }
}

var statesBeforeWa;
var correctStates= ['idaho', 'maryland', 'hawaii'];
var amountOfGuesses=0;
var guessRight=false;
while(amountOfGuesses<6 && guessRight===false){
  statesBeforeWa= prompt('Can you name any other states I\'ve lived at besides Seattle?').toLowerCase();
  if(correctStates.includes(statesBeforeWa)===true){
    alert('Hey, you got it right. Good job! \n I\'ve lived previously at Idaho, Maryland and Hawaii.');
    guessRight=true;
  }
  else{
    alert('Not quite.');
    amountOfGuesses++;
  }
}

alert('Let\'s play a guessing game. \n Answer the following questions and I\'ll let you know how you did.');
var correctQuiz=0;
var quizQuestions= [
  'What is 1+1?',
  'What is the capital of Nepal?',
  'What is square root of four?',
  'Where am I from',
  'Which is the best soccer team in the world'
];
var quizAnswers=['2', 'kathmandu', '2', 'nepal', 'liverpool'];
var firstAnswer= prompt(quizQuestions[0]);
if (firstAnswer===quizAnswers[0]){
  alert('That is correct');
  correctQuiz++;
}
else{
  alert('That was incorrect.');
}
var secondAnswer= prompt(quizQuestions[1]).toLowerCase();
if (secondAnswer===quizAnswers[1]){
  alert('That is correct');
  correctQuiz++;
}
else{
  alert('That was incorrect.');
}
var thirdAnswer= prompt(quizQuestions[2]);
if (thirdAnswer===quizAnswers[2]){
  alert('That is correct');
  correctQuiz++;
}
else{
  alert('That was incorrect.');
}
var fourthAnswer= prompt(quizQuestions[3]).toLowerCase();
if (fourthAnswer===quizAnswers[3]){
  alert('That is correct');
  correctQuiz++;
}
else{
  alert('That was incorrect.');
}
var fifthAnswer= prompt(quizQuestions[4]);
if (fifthAnswer===quizAnswers[4]){
  alert('That is correct');
  correctQuiz++;
}
else{
  alert('That was incorrect.');
}
var printResult= document.getElementById('quizResult');
printResult.textContent= 'You got ' + correctQuiz + ' right out of 5 on the quiz game.';

var printAnswers= document.getElementById('answerResults');
console.log(printAnswers);
printAnswers.textContent=' Let\'s see how common we are after that guessing game: ';
