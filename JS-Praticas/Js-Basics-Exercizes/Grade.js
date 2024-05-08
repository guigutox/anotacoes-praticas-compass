const marks = [80, 80, 50];

console.log(calculateGrade(marks));

function calculateGrade(marks) {
  let soma = 0;
  for (let mark of marks) soma += mark;
  let average = soma / marks.length;
  if (average < 60) return "F";
  if (average < 70) return "D";
  if (average < 80) return "C";
  if (average < 90) return "B";
  return "A";
}
