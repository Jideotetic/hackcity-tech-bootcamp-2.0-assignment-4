const result = document.getElementById("get-result");
const temperature = document.getElementById("convert-temperature");
const access = document.getElementById("check-access");
const evenOdd = document.getElementById("even-odd");
const bookMenu = document.getElementById("book-menu");

function getResult(score) {
  score = prompt("Enter your score");
  while (score === "" || isNaN(+score)) {
    score = prompt("Enter a valid score");
  }

  if (score === null) {
    return;
  }

  return score >= 60 ? alert("Pass") : alert("Fail");
}

result.addEventListener("click", getResult);

function convertTemperature(temperature) {
  let s;
  temperature = prompt("Enter temperature in celsius or fahrenheit");
  if (temperature === null) {
    return;
  } else {
    s = temperature.slice(0, temperature.length - 1);
  }
  while (
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
    if (temperature === null) {
      return;
    }
    s = temperature.slice(0, temperature.length - 1);
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
  while (role === "") {
    role = prompt("Enter a valid role (admin | user)");
  }

  if (role === null) {
    return;
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
  while (num === "" || isNaN(+num)) {
    num = prompt("Enter a valid number");
  }

  if (num === null) {
    return;
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

function addBook(title, author) {
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
}

function removeBook(title) {
  title = title.toLowerCase().split("");
  let titleFirstLetter = title.splice(0, 1).join("").toUpperCase();
  title = title.join("");
  title = titleFirstLetter.concat(title);
  const titleIndex = library.findIndex(book => book.title === title);
  if(titleIndex !== -1) {
    library.splice(titleIndex, 1)
    alert("Book removed successfully");
  } else {
    alert("No such book");
  }
  //for (let index = 0; index < library.length; index++) {
   // library[index].title === title
   //   ? library.splice(index, 1)
    //  : alert("No such book");
//  }
}

function listBooks() {
  alert(JSON.stringify(library));
}

function markAsRead(title) {
  title = title.toLowerCase().split("");
  let titleFirstLetter = title.splice(0, 1).join("").toUpperCase();
  title = title.join("");
  title = titleFirstLetter.concat(title);
  const titleIndex = library.findIndex(book => book.title === title);
  if(titleIndex !== -1) {
    library[titleIndex].isRead = true;
    alert("Marked successfully");
  } else {
    alert("No such book");
  }
  // for (let index = 0; index < library.length; index++) {
  //   library[index].title === title
  //     ? (library[index].isRead = true)
  //     : alert("No such book");
  // }
}

function showBookMenu(option) {
  option = prompt(
    "Welcome to the Library Management System!\n\n1. Add a book\n2. Remove a book\n3. List all books\n4. Mark a book as read\n5. Exit"
  );

  if (option === null) {
    return;
  }

  while (option === "" || isNaN(+option) || option <= 0 || option > 5) {
    option = prompt(
      "Welcome to the Library Management System!\n\nEnter a valid option\n\n1. Add a book\n2. Remove a book\n3. List all books\n4. Mark a book as read\n5. Exit"
    );
    if (option === null) {
      return;
    }
  }

  while (option === "1" || option === "2" || option === "3" || option === "4") {
    if (option === "1") {
      let title = prompt("Enter book title");
      while (title === "") {
        title = prompt("Enter a valid title");
      }
      if (title === null) {
        return;
      }
      let author = prompt("Enter book author");
      while (author === "") {
        author = prompt("Enter a valid author");
      }
      if (author === null) {
        return;
      }
      alert("Book added successfully");
      addBook(title, author);
    } else if (option === "2") {
      let title = prompt("Enter book title");
      while (title === "") {
        title = prompt("Enter a valid title");
      }
      if (title === null) {
        return;
      }
      removeBook(title);
    } else if (option === "3") {
      listBooks();
    } else if (option === "4") {
      let title = prompt("Enter book title");
      while (title === "") {
        title = prompt("Enter a valid title");
      }
      if (title === null) {
        return;
      }
      markAsRead(title);
    }

    option = prompt(
      "Welcome to the Library Management System!\n\n1. Add a book\n2. Remove a book\n3. List all books\n4. Mark a book as read\n5. Exit"
    );

    if (option === null) {
      return;
    }

    while (option === "" || isNaN(+option) || option <= 0 || option > 5) {
      option = prompt(
        "Welcome to the Library Management System!\n\nEnter a valid option\n\n1. Add a book\n2. Remove a book\n3. List all books\n4. Mark a book as read\n5. Exit"
      );
      if (option === null) {
        return;
      }
    }
  }

  alert("Goodbye");
}

bookMenu.addEventListener("click", showBookMenu);
