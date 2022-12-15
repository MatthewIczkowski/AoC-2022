const fs = require('fs')

// Part 1 Solution
fs.readFile('day3/input.txt', (err, data) => {
    if (err) throw err;

    input = data.toString();
    var lines = input.split("\n");
    
    const alpha = Array.from(Array(26)).map((e, i) => i + 65);
    const alphabet_upper = alpha.map((x) => String.fromCharCode(x));
    const alphabet_lower = alpha.map((x) => String.fromCharCode(x+32));

    for(let i=0; i < lines.length; i++){
        var sub1 = lines[i].substring(0, lines[i].length/2);
        var sub2 = lines[i].substring(lines[i].length/2);

        var sorted_sub1 = sub1.split("").sort().join("");
        var sorted_sub2 = sub2.split("").sort().join("");

        console.log("full ruck: ", lines[i]);
        console.log("1st half sorted: ", sorted_sub1);
        console.log("2nd half sorted: ", sorted_sub2);

    }

    //iterate through strings and compare values until match is found

    //find letter that appears in both compartments

    //store common letter and find location within upper or lower

    //use conditional for scoring, ex. if lowercase then take position and +1 
    //or if uppercase then take position and +27
})
