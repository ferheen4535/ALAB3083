//for loops = repeat some code a limited of times//
// i is a variable used as a counter//
//resource: https://www.youtube.com/watch?v=ZOQYIWLngSU//

for(let i = 0;  i <= 2; i++){      // i = how many iterations, conditions is continue loops until i is equal or less then 2 (0,1,2) so 3 times; 
                                    // and increase one time//
                                    //console.log any name or number//
    console.log("i")
}

for(let i = 0;  i < 10; i++){      // i = how many iterations, conditions is continue loops until i is equal or less then 10 (0,1,2) so 11 times; 
                                    // and increase one time//

    console.log("j")
}

for(let i = 2;  i <= 10; i+= 2){      // i = how many iterations; conditions is continue loops until i is equal or less then 10 (0,1,2..) ; 
                                    // and increase by 2s //
    console.log("m")
}

for(let i = 2;  i > 0; i--){      // i = how many iterations, conditions is continue loops until i is greater than less zero ; 
                                      // and i is decreased //
console.log("z");
}

for(let i = 10; i > 0; i-=3) {    //count down loop//
    console.log(i);  
}
console.log("Happy New year!");

//CONTINUE AND BREAK///
for(let i = 1; i <= 20; i++ ){
    if(i == 13){       // if i equals 13, skip it
        continue;       //continue means skip
    }
        else {       //else keep counting
    console.log(i);
        }
}

for(let i = 1; i <= 20; i++ ){
    if(i == 13){       // if i equals 13, skip it
        break;       //break means stop looping
    }
        else {       //else keep counting
    console.log(i);
        }
}
//FOR IN LOOPS AND FOR OF LOOPS//

const str = "Hello World";
 for (const i in str) {
    console.log(str[i]);  ///give us a index of each letter//
 }

 //FOR OF LOOPS//
//  const favorite = "target is my favorite store";

//  for (const c of favorite) {
//      console.log(c);
//  }

//  for (let i = 0; i < str.length; i++) {
// 	if (str[i] == "l") {
// 		continue;
// 	}
//     const str = "Hello World";

//     for (let i = 0; i < str.length; i++) {
//         if (str[i] == "l") {
//             continue;
//         }
    
//         console.log(str[i]);
//     }
