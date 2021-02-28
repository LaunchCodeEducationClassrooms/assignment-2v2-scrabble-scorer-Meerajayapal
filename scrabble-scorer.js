// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
   console.log("\n Let's play some scrabble!");
   word = input.question("\n Enter a word to score :")
};

let simpleScore = function(word){
  word =String(word);
  word = word.toUpperCase();
  let letterPoints = 0 ;
  for (let i = 0; i < word.length; i++) {
    letterPoints++;
  }
  return letterPoints;
};

let vowelBonusScore = function(word) {
  word = String(word);
  word = word.toUpperCase().split("");
   let letterPoints = 0 ;
  for (let i = 0; i < word.length; i++) {
    //let vowels = ['A','E','I','O','U'];
    if (/A|E|I|O|U/.test(word[i])){
      letterPoints = letterPoints +3;
    }else {
      letterPoints = letterPoints +1 ;
    }
  }return letterPoints;
};

      

let scrabbleScore = function (word) {
  let scrabble = 0;
  word = word.toLowerCase();
  for(let i =0; i<word.length;i++) {
    points = word[i];
    scrabble +=newPointStructure[points];
  }
return scrabble;
  }

const scoringAlgorithms = [({ name: 'Simple Score', description: 'Each letter is worth 1 point', scoringFunction: simpleScore}),

({ name: 'Bonus Vowels', description: 'Vowels are 3pts, consonants are 1pt', scoringFunction: vowelBonusScore}),

({name: 'Scrabble', description: 'Traditional Scoring Algorithm', scoringFunction: scrabbleScore})
];

function scorerPrompt() {
  let number1 = input.question(" Which scoring Algorithm would you like to use? \n \n 0 - Simple Score : One point per character\n 1 - VowelBonus Score : Vowels are worth 3 points\n 2 - Scrabble: Uses scrabble point system\n Enter 0, 1, or 2 : ") 
  if (Number(number1)===0){
    console.log(` Score for '${word}': ${scoringAlgorithms[0].scoringFunction(word)}`);
  } else if (Number(number1)===1) {
    console.log(` Score for '${word}': ${scoringAlgorithms[1].scoringFunction(word)}`);
  } else if (Number(number1)===2){
    console.log(` Score for '${word}': ${scoringAlgorithms[2].scoringFunction(word)}`);
  }
}

function transform(oldPointStructure) {
  const fasterScore = {};

for (let item in oldPointStructure) {
  for (let i in oldPointStructure[item])
  fasterScore[oldPointStructure[item][i].toLowerCase()] = Number(item);
}
return fasterScore;
};


let newPointStructure =transform(oldPointStructure);

function runProgram() {
   initialPrompt();
   scorerPrompt();
   
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};

