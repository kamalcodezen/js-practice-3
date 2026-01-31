// break
for (i = 10; i <= 20; i++) {
    if (i > 15) {
        break;
    }
    console.log(i)
}

let k = 65;
while (k > 50) {
    console.log("value increment =", k);
    if (k < 60) {
        break;
    }
    k--;
}


let n = [34, 67, 98, 73, 95, 86, 97];
for (let j of n) {
    console.log(j);
    if (j === 73) {
        break;
    }
}


let s = [34, 67, 98, 73, 95, 86, 97];
for (let n of s) {
    console.log("value", n);
    if (n === 98) {
        continue;
    }
}