const fs = require('fs')

// Part 1 Solution
fs.readFile('input.txt', (err, data) => {
    if (err) throw err;
    input = data.toString();
    var lines = input.split("\n");

    var maxCals = -1;
    var curCals = 0;

    for (let i = 0; i < lines.length; i++) {
        var curVal = parseInt(lines[i]); 
        // console.log(maxCals);
        // console.log(curCals);
        if (curVal>0) {
            curCals += curVal;
            // console.log(curCals);
        } else {
            if (curCals > maxCals){
                maxCals = curCals;
            }
            curCals = 0;
            console.log("maxCals: ", maxCals);
        }
    }
})

//Part 2 Solution
fs.readFile('input.txt', (err, data) => {
    if (err) throw err;
    input = data.toString();
    var lines = input.split("\n");

    var oneCals = -1;
    var twoCals = -1;
    var threeCals = -1;
    var curCals = 0;

    for (let i = 0; i < lines.length; i++) {
        var curVal = parseInt(lines[i]); 
        if (curVal>0) {
            curCals += curVal;
        } else {
            if (curCals > oneCals){
                threeCals = twoCals;
                twoCals = oneCals;
                oneCals = curCals;
            } else if (curCals > twoCals){
                threeCals = twoCals;
                twoCals = curCals;
            } else if (curCals > threeCals){
                threeCals = curCals;
            }
            curCals = 0;
            console.log("oneCals: ", oneCals);
            console.log("twoCals: ", twoCals);
            console.log("threeCals: ", threeCals);
            var totalCals = oneCals + twoCals + threeCals;
            console.log("totalCals: ", totalCals);
        }
    }
})