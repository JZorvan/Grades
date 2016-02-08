// JavaScript Exercise: Grades

// Declaring the array of grade provided in exercise
var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];

// Declares variables for each letter grade and assigns them a value of 0
var aGrades = 0;
var bGrades = 0;
var cGrades = 0;
var dGrades = 0;
var fGrades = 0;

// For loop that cycles through the array, incrementing the appropriate grade variable if the condition is met.
for (var i = 0; i < scores.length; i++) {
  if (scores[i] > 90) {
    aGrades++;
  }
  else if (scores[i] > 80) {
    bGrades++;
  }
  else if (scores[i] > 70) {
    cGrades++;
  }
  else if (scores[i] > 60) {
    dGrades++;
  }
  else {
    fGrades++;
  }
}

// Prints the number of each letter grade to the console
console.log("Students with A's", aGrades);
console.log("Students with B's", bGrades);
console.log("Students with C's", cGrades);
console.log("Students with D's", dGrades);
console.log("Students with F's", fGrades);

// Creates variables for the lowest and highest grades and assigns them the result of the math function that pulls the appropriate grade from the array
var lowestGrade = Math.min(...scores);
var highestGrade = Math.max(...scores);

// Prints the value for lowest and highest scores to the console
console.log("Lowest Grade", lowestGrade);
console.log("Highest Grade", highestGrade);
  