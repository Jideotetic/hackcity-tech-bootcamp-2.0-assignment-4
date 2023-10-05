const result = document.getElementById("get-result");
const temperature = document.getElementById("convert-temperature");
const access = document.getElementById("check-access");
const evenOdd = document.getElementById("even-odd");
const bookList = document.getElementById("list-book");
const libraryDisplay = document.getElementById("library");
const bookAdd = document.getElementById("add-book");
const bookRemove = document.getElementById("remove-book");

function getResult(score) {
  score = prompt("Enter your score");
  while (score === null || score === "" || isNaN(+score)) {
    score = prompt("Enter a valid score");
  }
  return score >= 60 ? alert("Pass") : alert("Fail");
}

result.addEventListener("click", getResult);

function convertTemperature(temperature) {
  let s;
  temperature = prompt("Enter temperature in celsius or fahrenheit");
  s = temperature.slice(0, temperature.length - 1);
  while (
    temperature === null ||
    temperature === "" ||
    isNaN(+s) ||
    (temperature.indexOf("F") === -1 &&
      temperature.indexOf("C") === -1 &&
      temperature.indexOf("f") === -1 &&
      temperature.indexOf("c") === -1)
  ) {
    temperature = prompt(
      "Enter a valid temperature with unit....Hint(10C or 10F)"
    );
    s = temperature.slice(0, temp.length - 1);
  }
  return temperature.slice(-1).toUpperCase() === "C"
    ? alert(
        ((temperature = temperature.slice(0, temperature.length - 1)) * 9) / 5 +
          32 +
          "F"
      )
    : alert((temperature = temperature.slice(0, temperature.length - 1) + "F"));
}

temperature.addEventListener("click", convertTemperature);

function checkAccess(role) {
  role = prompt("Enter your role (admin | user)");
  while (role === null || role === "") {
    role = prompt("Enter a valid role (admin | user)");
  }
  return role === "admin"
    ? alert("Full Access")
    : role === "user"
    ? alert("Limited Access")
    : alert("No Access");
}

access.addEventListener("click", checkAccess);

function checkEvenOdd(num) {
  num = prompt("Enter number");
  while (num === null || num === "" || isNaN(+num)) {
    num = prompt("Enter a valid number");
  }
  return num % 2 === 0 ? alert("Even") : alert("Odd");
}

evenOdd.addEventListener("click", checkEvenOdd);

function Book(title, author) {
  this.title = title;
  this.author = author;
  this.isRead = false;
}

const library = [];

function listBooks() {
  libraryDisplay.textContent = JSON.stringify(library);
}

bookList.addEventListener("click", listBooks);

function addBook(title, author) {
  title = prompt("Enter book title");
  while (title === null || title === "") {
    title = prompt("Enter a valid role title");
  }
  author = prompt("Enter book author");
  while (author === null || author === "") {
    author = prompt("Enter a valid role author");
  }
  title = title.toLowerCase().split("");
  let titleFirstLetter = title.splice(0, 1).join("").toUpperCase();
  title = title.join("");
  title = titleFirstLetter.concat(title);
  author = author.toLowerCase().split("");
  let authorFirstLetter = author.splice(0, 1).join("").toUpperCase();
  author = author.join("");
  author = authorFirstLetter.concat(author);
  const book = new Book(title, author);
  library.push(book);
  listBooks();
}

bookAdd.addEventListener("click", addBook);

// function removeBook(title) {
//   title = prompt("Enter book title");
//   title = title.toLowerCase().split("");
//   let titleFirstLetter = title.splice(0, 1).join("").toUpperCase();
//   title = title.join("");
//   title = titleFirstLetter.concat(title);
//   for (let index = 0; index < library.length; index++) {
//     library[index].title === title
//       ? library.splice(index, 1)
//       : alert("No such book");
//   }
//   libraryDisplay.textContent = JSON.stringify(library);
// }

// bookRemove.addEventListener("click", removeBook);

// function markAsRead(title) {
//   return;
// }
