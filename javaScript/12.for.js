
/**
 * for loop =====>
 *   for(     ;     ;   ){
 *   
 *   }
 * 
 * for ( loop variable declaration;  condition ;  updation | loop change){
 * loop statement
 * }
 * 
 */

let j = 1; // loop variable 
while (j <= 5) {   // loop condition
    console.log(j);  // loop statement
    j++;  //updataion | loop varible change
}

for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// even
for (let i = 0; i <= 10; i = i + 2) {
    console.log("even =", i);
}

// ODD
for (let i = 1; i <= 10; i += 2) {
    console.log("ODD =", i)
}


// sum 200 -250 
let sum = 0;
for (let i = 200; i <= 250; i++) {
    sum += i;
    console.log(i);
}
console.log(`sum of all numbers from 200 to 250 ${sum}`);


// increment value
for (let i = 10; i <= 20; i++) {
    console.log(i);
}

// decrement 
for (let j = 20; j >= 10; j--) {
    console.log(j);
}
