 
// const name ="ahmed";

// name = "ali"
















































// const student = {
//     name: "Ahmed Gamal",
//     age: 33
// };

// student.favoriteLanguage = "JavaScript";
// console.log( student.favoriteLanguage);
































const students = [
    { name: "Sara", score: 92 },
    { name: "Omar", score: 68 },
    { name: "Lina", score: 79 }


];


let pass = 0;

for (const student of students) {
    let status = "";

   
    if (student.score >= 79) {
        status = "PASS";
        pass++; 


    } else {

        status = "FAIL";
    }

  
    console.log(`${student.name}: ${student.score} -> ${status}`);
}


console.log(`Passed ${pass} out of ${students.length}`);



























































