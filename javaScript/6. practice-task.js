/************************************
 * Qs1. print all even number from 0 to 100. *************************************/

// print even number
for (let num = 0; num <= 100; num++) {
    if (num % 2 === 0) {
        console.log("even num =", num);
    }
}


// print ODD number
for (let num = 0; num <= 100; num++) {
    if (num % 2 !== 0) {
        console.log("odd num =", num);
    }
}

// ===================================


/***********************************
  Qs2.
   Creat a game where you start with any random game number. Ask the user to keep guessing the game number until the user enters correct value.
 ***********************************/
let gameNum = 25;
let userNum = prompt("Guess the correct number");

while (userNum != gameNum) {
    userNum = prompt("you enter a wrong number : again Guess");
}

console.log("you enter the correct number 25");



// let gameNum = 20;
// let userNum;

// do {
//     userNum = prompt("enter correct number");
// } while (gameNum != userNum);

// console.log("you entered correct number");


/***************************************
 * Qs3. prompt the user to enter their full name. generate a username for them based on the input. start username with @, followed by their full name and ending with the fullName length.
 *************************************/


let fullName = prompt("Enter Your Full  Name Without Space");

let nameUser = "@" + fullName + fullName.length;
console.log(nameUser);

let res = "@".concat(fullName) + fullName.length
console.log(res);

let result = `@${fullName}${fullName.length}`;
console.log(result);

