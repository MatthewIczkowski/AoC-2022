const fs = require('fs')

// Part 1 Solution
// fs.readFile('day2/input.txt', (err, data) => {
//     if (err) throw err;

//     input = data.toString();
//     var lines = input.split("\n");

//     var shapeScore = 0;
//     var roundScore = 0;
//     var totalScore = 0;

//     for (let i = 0; i < lines.length; i++){
//         if (lines[i][2] === "X"){
//             shapeScore+=1;
//         } else if (lines[i][2] === "Y"){
//             shapeScore+=2;
//         } else {
//             shapeScore+=3;
//         }
        
//         if (lines[i][2] === "X" && lines[i][0] === "A") {
//             roundScore+=3;
//         } else if (lines[i][2] === "Y" && lines[i][0] === "B") {
//             roundScore+=3;
//         } else if (lines[i][2] === "Z" && lines[i][0] === "C") {
//             roundScore+=3;
//         } else if (lines[i][2] === "X" && lines[i][0] === "C") {
//             roundScore+=6;
//         } else if (lines[i][2] === "Y" && lines[i][0] === "A") {
//             roundScore+=6;
//         } else if (lines[i][2] === "Z" && lines[i][0] === "B") {
//             roundScore+=6;
//         }
//     }

//     totalScore = shapeScore + roundScore;
//     console.log("totalScore: ", totalScore);

// })

// Part 2 Solution
fs.readFile('day2/input.txt', (err, data) => {
    if (err) throw err;

    input = data.toString();
    var lines = input.split("\n");

    var shapeScore = 0;
    var roundScore = 0;
    var totalScore = 0;

    for (let i = 0; i < lines.length; i++){
        if (lines[i][2] === "Z"){
            roundScore+=6;
        } else if (lines[i][2] === "Y"){
            roundScore+=3;
        }
        
        if (lines[i][0] === "A" && lines[i][2] === "X") {
            shapeScore+=3;
        } else if (lines[i][0] === "B" && lines[i][2] === "X") {
            shapeScore+=1;
        } else if (lines[i][0] === "C" && lines[i][2] === "X") {
            shapeScore+=2;
        } else if (lines[i][0] === "A" && lines[i][2] === "Y") {
            shapeScore+=1;
        } else if (lines[i][0] === "B" && lines[i][2] === "Y") {
            shapeScore+=2;
        } else if (lines[i][0] === "C" && lines[i][2] === "Y") {
            shapeScore+=3;
        } else if (lines[i][0] === "A" && lines[i][2] === "Z") {
            shapeScore+=2;
        } else if (lines[i][0] === "B" && lines[i][2] === "Z") {
            shapeScore+=3;
        } else if (lines[i][0] === "C" && lines[i][2] === "Z") {
            shapeScore+=1;
        }
    }

    totalScore = shapeScore + roundScore;
    console.log("totalScore: ", totalScore);

})