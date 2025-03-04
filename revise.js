//Use for loops to iterate a specific number of times.//
//Use for of loops to iterate through iterable data-like strings.//
//Use while loops to iterate based on a condition.//
//Use the break and continue statements to control loop flow.//

//Loop through all numbers from 1 to 10.//
console.log("Loop through all numbers from 1 to 10");
console.log("----");

for(let i = 1; i <= 10; i++ ) {    //count up loop//
    console.log(i);  
}
console.log("----");
console.log("Number is divisible by 3, log Fizz");
console.log("----");
//If a number is divisible by 3, log “Fizz.” with continue statement//

for (let i = 1; i <= 20; i++) {   // count to 1 - 20
    if (i % 3 === 0) {        // if the number is a divisible of 3..
    console.log("Fizz");    //log in Fizz//
        continue;           // then continue counting
    }
    console.log(i);
}

//If a number is divisible by 5, log “Buzz.”//
console.log("----");
console.log("Number is divisible by 5, log Buzz");
console.log("----");
for (let i = 1; i <= 20; i++) {   // count to 1 - 20
    if (i % 5 === 0) {        // if the number is a divisible of 5..
    console.log("Buzz");    //log in Buzz//
        continue;           // then continue counting
    }
    console.log(i);
}

//If a number is divisible by both 3 and 5, log “Fizz Buzz.”//
console.log("----");
console.log("Number is divisible by 3 and 5, log Fizz Buzz");
console.log("----");
for (let i = 1; i <= 20; i++) {   // count to 1 - 20
    if (i % 5 && i % 3 === 0) {        // if the number is a divisible of 3 and 5..
    console.log("Fizz Buzz");    //log in Fizz Buzz//
        continue;           // then continue counting
    }
    console.log(i);
}

//If a number is not divisible by either 3 or 5, log the number.//
console.log("----");
console.log("Number is not either divisible by 3 or 5, log number");
console.log("----");
for(let i = 1; i <= 20; i++ ){
    if (i % 5 === 0 && i % 3 === 0){       // if i equals divisible of 3 and 5, skip that number//
        break;       //break means stop looping
    }
        else {       //else keep counting
    console.log(i);
        }
}
console.log("----");
console.log("Part 2");
console.log("----");

for (let n = 1; n <= 20; n++) { // loop from 1 to 20//
    if (n % 5 === 0) {     // find prime numbers//
    console.log(n); 
    }
}
// plugged in different variables and statement but this one is the only one that worked//

console.log("----");
console.log("Part 3");
console.log("----");
const Data = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26"; 

let rows = Data.split("\n");
console.log(rows);    //log only once, previous code made the rows loop

let row1 = rows[1].split(","); // Split each row by comma //
let row2 = rows[2].split(",");
let row3 = rows[3].split(",");
let row4 = rows[4].split(",");
for (let i = 0; i < rows.length; i++) { // Split each row by comma //
    console.log(rows[i]);  // will make 5 rows//
}

//not sure why the table is repeated twice//