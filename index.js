const result = document.getElementById("get-result");
const temperature = document.getElementById("convert-temperature");

function getResult(score) {
  score = prompt("Enter your score");
  while (score === null || score === "" || isNaN(+score)) {
    score = prompt("Enter a valid score");
  }
  return score >= 60 ? alert("Pass") : alert("Fail");
}

result.addEventListener("click", getResult);

function convertTemperature(temp) {
  let s;
  temp = prompt("Enter temperature in celsius or fahrenheit");
  s = temp.slice(0, temp.length - 1);
  while (
    temp === null ||
    temp === "" ||
    isNaN(+s) ||
    (temp.indexOf("F") === -1 &&
      temp.indexOf("C") === -1 &&
      temp.indexOf("f") === -1 &&
      temp.indexOf("c") === -1)
  ) {
    temp = prompt("Enter a valid temperature with unit....Hint(10C or 10F)");
    s = temp.slice(0, temp.length - 1);
  }
  return temp.slice(-1).toUpperCase() === "C"
    ? alert(((temp = temp.slice(0, temp.length - 1)) * 9) / 5 + 32 + "F")
    : alert((temp = temp.slice(0, temp.length - 1) + "F"));
}

temperature.addEventListener("click", convertTemperature);
