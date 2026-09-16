


const students = [
    { name: "ahmed", score: 95 },
    { name: "alaa", score: 82 },
    { name: "Youssef", score: 64 },
    { name: "mohamed", score: 91 },
    { name: "abbas", score: 75 }
];

let excellent = 0;
let good = 0;
let needsWork = 0;

for (const student of students) {


    let band = "";

    
    if (student.score >= 90) {
        band = "Excellent";
        excellent++;

    }

     else if (student.score >= 70) { 

        band = "Good";
        good++;
    }
    
    else {
        band = "Needs work";
        needsWork++;
    }

    
    console.log(`${student.name}: ${student.score} -> ${band}`);
}