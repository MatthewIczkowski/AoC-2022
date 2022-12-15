const fs = require('fs')

// Part 1 Solution
fs.readFile('day3/input.txt', (err, data) => {
    if (err) throw err;

    input = data.toString();
    var lines = input.split("\n");

    var priority_sum = 0;
    
    const alpha = Array.from(Array(26)).map((e, i) => i + 65);
    const alphabet_upper = alpha.map((x) => String.fromCharCode(x));
    const alphabet_lower = alpha.map((x) => String.fromCharCode(x+32));

    for(let i=0; i < lines.length; i++){
        var sub1 = lines[i].substring(0, lines[i].length/2);
        var sub2 = lines[i].substring(lines[i].length/2);

        var match = '';

        for(let x=0; x < sub1.length; x++){
            if(sub2.indexOf(sub1[x]) > -1){
                match = sub2[sub2.indexOf(sub1[x])];
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
