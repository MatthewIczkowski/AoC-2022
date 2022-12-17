const fs = require('fs')

// Part 1 Solution
// fs.readFile('day3/input.txt', (err, data) => {
//     if (err) throw err;

//     input = data.toString();
//     var lines = input.split("\n");

//     var priority_sum = 0;
    
//     const alpha = Array.from(Array(26)).map((e, i) => i + 65);
//     const alphabet_upper = alpha.map((x) => String.fromCharCode(x));
//     const alphabet_lower = alpha.map((x) => String.fromCharCode(x+32));

//     for(let i=0; i < lines.length; i++){
//         var sub1 = lines[i].substring(0, lines[i].length/2);
//         var sub2 = lines[i].substring(lines[i].length/2);

//         var match = '';

//         for(let x=0; x < sub1.length; x++){
//             if(sub2.indexOf(sub1[x]) > -1){
//                 match = sub2[sub2.indexOf(sub1[x])];
//                 if(alphabet_upper.indexOf(match) > -1){
//                     priority_sum += alphabet_upper.indexOf(match) + 27;
//                 } else {
//                     priority_sum += alphabet_lower.indexOf(match) + 1;
//                 }
//                 break;
//             }
//         }
//     }
//     console.log("priortity sum: ", priority_sum);
// })

// Part 2 Solution
fs.readFile('day3/input.txt', (err, data) => {
    if (err) throw err;

    input = data.toString();
    var lines = input.split("\n");

    var priority_sum = 0;
    
    const alpha = Array.from(Array(26)).map((e, i) => i + 65);
    const alphabet_upper = alpha.map((x) => String.fromCharCode(x));
    const alphabet_lower = alpha.map((x) => String.fromCharCode(x+32));

    var match = '';
    var strings = [];
    var string1 = ""; //shortest string
    var string2 = ""; //other string
    var string3 = ""; //other string

    for(let i=0; i < lines.length; i++){

        strings = [lines[i],lines[i+1],lines[i+2]];
        // strings.forEach(i=>{console.log(i);});
        const asc = strings.sort((a,b) => a.length - b.length);
        // asc.forEach(i=>{console.log(i);});

        // console.log("i: ", i);
        // console.log(lines[i]);
        // console.log(lines[i+1]);
        // console.log(lines[i+2]);
        // console.log(string1);
        // console.log(string2);
        // console.log(string3);
        
        i+=2;

        //loop over shortest string in group of three

        for(let x=0; x < asc[0].length; x++){
            if(asc[1].indexOf(asc[0][x]) > -1 && asc[2].indexOf(asc[0][x]) > -1){
                match = asc[0][x];
                if(alphabet_upper.indexOf(match) > -1){
                    priority_sum += alphabet_upper.indexOf(match) + 27;
                } else {
                    priority_sum += alphabet_lower.indexOf(match) + 1;
                }
                break;
            }
        }
    }
    console.log("priortity sum: ", priority_sum);
})

