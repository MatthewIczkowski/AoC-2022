const fs = require('fs')

// Part 1 Solution
fs.readFile('day4/input.txt', (err, data) => {
    if (err) throw err;

    input = data.toString();
    var lines = input.split("\n");
    var arr = []; 
    var subarr1 = [];
    var subarr2 = [];
    var overlap = 0;

    for(var i = 0; i < lines.length; i++){
        arr = lines[i].split(",");
        subarr1 = arr[0].split("-");
        subarr2 = arr[1].split("-");

        if(Number(subarr1[0]) <= Number(subarr2[0]) && Number(subarr1[1]) >= Number(subarr2[1])){
            overlap += 1;
        } else if (Number(subarr2[0]) <= Number(subarr1[0]) && Number(subarr2[1]) >= Number(subarr1[1])) {
            overlap += 1;
        }
    }
    console.log("overlap: ", overlap);
})

