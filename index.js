const result = document.getElementById("get-result");

function getResult(score) {
  score = prompt("Enter your score");
  while (score === null || score === "") {
    score = prompt("Enter a valid score");
  }
  return score >= 60 ? alert("Pass") : alert("Fail");
}

result.addEventListener("click", getResult);
