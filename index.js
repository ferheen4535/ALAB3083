//Loop through all numbers from 1 to 100.//


for (let i = 1; i < 101; i++) {
    console.log(i);
}

//will loop from 1 -100//

//If a number is divisible by 3, log “Fizz.”//

//The Continue Statement in For Loops
//
//If a number is divisible by 3, log “Fizz.”//
for (let i = 1; i <= 20; i++) { // loop from 1 to 20//
    if (i % 3 === 0) {     // divisible by 3//
    console.log("Fizz"); 
    }
}

//If a number is divisible by 5, log “Buzz.”//
for (let i = 1; i <= 40; i++) { // loop from 1 to 40//
    if (i % 5 === 0) {     // divisible by 5//
    console.log("Buzz"); 
    }
}

//If a number is divisible by both 3 and 5, log “Fizz Buzz.”//

for (let i = 1; i <= 50; i++) {  
    if (i % 3 === 0 && i % 5 === 0) {  //if the number is divisible by 3 and 5//
        console.log("Fizz Buzz");  
    }
}


//If a number is not divisible by either 3 or 5, log the number.//


for (let i = 1; i <= 10; i++) {  
    if (i % 3 !== 0 && i % 5 !== 0) {  //if the number is NOT divisible by 3 and 5//
        console.log(i);  
    }
}

//part3//

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




