const fs = require('fs')

// part 1 solution
// fs.readFile('day6/input.txt', (err, data) => {
//     if (err) throw err;

//     input = data.toString();

//     function howManyRepeated(str){
//         try{ return str.toLowerCase().split("").sort().join("").match(/(.)\1+/g).length; }
//         catch(e){ return 0; } // if TypeError
//     }

//     for(var i = 0; i < input.length; i++){
//         let marker = input.substring(i,i+4);
//         // console.log(marker);
//         if(howManyRepeated(marker) === 0){
//             console.log(i+4);
//             break;
//         }
//     }

// });

// part 2 solution
fs.readFile('day6/input.txt', (err, data) => {
    if (err) throw err;

    input = data.toString();

    function howManyRepeated(str){
        try{ return str.toLowerCase().split("").sort().join("").match(/(.)\1+/g).length; }
        catch(e){ return 0; } // if TypeError
    }

    for(var i = 0; i < input.length; i++){
        let marker = input.substring(i,i+14);
        // console.log(marker);
        if(howManyRepeated(marker) === 0){
            console.log(i+14);
            break;
        }
    }

});