
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

for (let i = 1; i <= 10; i += 2) {
    console.log("ODD =", i)
}