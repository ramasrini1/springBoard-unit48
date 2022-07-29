function guessingGame() {
  const ANSWER = Math.floor(Math.random() * 100);
  let isOver = false;
  let numGuesses = 0;

  return function guess(num) {
    if (isOver) return "The game is over, you already won!";
    numGuesses++;
    if (num === ANSWER) {
      isOver = true;
      const guess = numGuesses === 1 ? "guess" : "guesses";
      return `You win! You found ${num} in ${numGuesses} ${guess}.`;
    }
    if (num < ANSWER) return `${num} is too low!`;
    if (num > ANSWER) return `${num} is too high!`;
  };
}

module.exports = { guessingGame };



// function guessingGame() {
//   const ANSWER = Math.floor(Math.random() * 100);
//   let isOver = false;
//   let numGuesses = 0;

//   return function guess(num) {

//     if (isOver) {
//       console.log( "The game is over, you already won!");
//       return 0;
//     }
    
//     numGuesses++;
    
//     if (num === ANSWER) {
//       isOver = true;
//       const guess = numGuesses === 1 ? "guess" : "guesses";
//       console.log(`You win! You found ${num} in ${numGuesses} ${guess}.`);
//       return 1;
//     }
//     if (num < ANSWER) {
//       console.log(`${num} is too low!`);
//       return -100;
//     } 
//     if (num > ANSWER) {
//       console.log( `${num} is too high! `);
//       return 100;
//     }
//   };
 
// }
  
// let game = guessingGame();
// let keepPlaying = true;
// while ( keepPlaying ){
//   let rand = Math.floor(Math.random() * 100);
//   let result = game(rand);
//   if ( result === 0 || result === 1 ) {
//     keepPlaying = false;
//   } 
// }


