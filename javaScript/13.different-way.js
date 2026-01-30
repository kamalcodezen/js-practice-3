//  1 way odd number check
for (let i = 0; i <= 10; i++) {
    if (i % 2 !== 0) {
        console.log("This is ODD number =", i)
    }
}

// 2nd way odd number 
for (let n = 0; n <= 10; n++) {
    if (n % 2 === 1) {
        console.log(`this is another type odd number = ${n}`);
    }
}


// 3rd way loop jump odd number check
for (let j = 1; j <= 10; j += 2) {
    console.log("another type of ODD number =", j);
}


