'use strict';
var userName = prompt('What is your name?');
alert('Hi, ' + userName + ', great to meet you!!!');
console.log('When asked their name, the user responded ' + userName);

var printPlace= document.getElementById('answerPlace');
var homePlace = prompt('Are you from here').toUpperCase();
if(homePlace==='YES'||homePlace==='Y'){
  alert('Me too');
  printPlace.textContent='We\'re both from here.';
}
else{
  alert('Oh okay. I\'m from here.');
  printPlace.textContent='I\'m from here, but he is not.';
}
console.log('When asked if they were from here, user responded ' + homePlace);

var printFood= document.getElementById('answerFood');
var favouriteFood = prompt('Let me guess your favourite food. Is it momo?').toUpperCase();
if (favouriteFood==='YES'||favouriteFood==='Y'){
  alert('Thats awesome. I love momo too.');
  printFood.textContent= 'We both like momo.';
}
else{
  alert('Why not? That\'s a great food.');
  printFood.textContent='I love momo, but he  does not.';
}
console.log('When asked is momo was their favourite food was, the user responded ' + favouriteFood);

var printRestaurant= document.getElementById('answerRestaurant');
var restaurant1= prompt('Is your favourite restaurant Sky Waikiki?').toUpperCase();
if (restaurant1==='YES'||restaurant1==='Y'){
  alert('Thats my favourite restaurant too.');
  printRestaurant.textContent+= 'Our favourite restaurant is Sky Waikiki.';
}
else {
  alert('You should go to Sky waikiki. Its worth it.');
  printRestaurant.textContent+='His favourite restaurant is not Sky Waikiki, but after lunch, it will be.';
}
console.log('When if Sky Waikiki was their favourite restaurant, the user responded ' + restaurant1);

var printDrink= document.getElementById('answerDrink');
var favouriteDrink= prompt('I\'m gonna buy you a drink today. I\'m guessing you like beer.').toUpperCase();
if(favouriteDrink==='Yes'||favouriteDrink==='Y'){
  alert('That\'s my number one');
  printDrink.textContent+= 'Beer is our favourite drink.';
}
else{
  alert('We\'ll drink your favourite drink today, whatever you like.');
  printDrink.textContent+='I love beer, but today we\'ll drink his favourite drink instead ';
}
console.log('When asked what restaurant they liked, the user responded ' + favouriteDrink);

var numberLanguages;
var correctAnswer=false;
var actualLanguageNum=5;
for(var languageGuesses=0; languageGuesses<4 && correctAnswer===false;languageGuesses++){
  numberLanguages = prompt('Can you guess how many languages I can speak?');
  if(numberLanguages==actualLanguageNum){
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
