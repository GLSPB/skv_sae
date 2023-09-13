/*
const getRandomNumber = () => Math.round(Math.random()*100);
const isEven = (number) => !(number%2);

const playRound = () => {
  const number = getRandomNumber();
  const correctAnswer = isEven(number) ? "yes" : "no";
  const userAnswer = prompt(`Is the number ${number} even? Please, answer "yes" or "no".`)
  
  if (!userAnswer) {
    alert('no answer! game over')
  return false;
}
  else if (userAnswer.toLowerCase().trim() === correctAnswer) {
    alert('correct!');
    return true;
  }
  else {
    alert('wrong!');
    return false;
  }
  }

const playGame = () => {
  for (let i = 0; i < 3; i++) {
    const isCorrect = playRound();
    if (!isCorrect) {
      return;
    }
  }
  alert ("win!"); 
}
    const button = document.querySelector('button');
button.addEventListener('click', playGame);
*/
const getRandomNumber = () => Math.round(Math.random()*10);
// const sum = () => 

const playRound = () => {
  const numberOne = getRandomNumber();
  const numberTwo = getRandomNumber();
  const correctAnswer = String (numberOne+numberTwo);
  const userAnswer = prompt(`Find the sum of the numbers ${numberOne} and ${numberTwo}`)
  
  if (!userAnswer) {
    alert('no answer! game over')
  return false;
}
  else if (userAnswer.toLowerCase().trim() === correctAnswer) {
    alert('correct!');
    return true;
  }
  else {
    alert('wrong!');
    return false;
  }
  }

const playGame = () => {
  for (let i = 0; i < 3; i++) {
    const isCorrect = playRound();
    if (!isCorrect) {
      return;
    }
  }
  alert ("win!"); 
}
    const button = document.querySelector('button');
button.addEventListener('click', playGame);