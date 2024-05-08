showNumbers(10);

function showNumbers(limit) {
  limit++;
  for (let i = 0; i < limit; i++) {
    let resp = i % 2 === 0 ? "Even" : "ODD";
    console.log(i + " " + resp);
  }
}
