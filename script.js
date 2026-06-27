

// Query selector
const search = document.querySelector("input");
const find = document.querySelector(".submit-btn");
const add = document.querySelector(".add-btn");
const display = document.querySelector(".book-container");

// Logic

// storage
const myLibrary = [
    {   id: 123456,
        title: "Berani Tidak disukai",
        author: "Ichiro Kishimi & Fumitake Koga",
        pages: 336,
        status: "unread",
    },
    {
        id: 123457,
        title: "Laut Bercerita",
        author: "Laila S. Chudori",
        pages: 394,
        status: "unread",
    }
];

// constructor
function Book(title, author, pages, status) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
}

function addBookToLibrary(title, author, pages, status) {
    const newBook = new Book(title, author, pages, status);
    myLibrary.push(newBook);
}

function displayBook(arr){
    arr.forEach(book => {
        const div = document.createElement("div");
        div.classList.add("card");
        
        const id = document.createElement("p");
        id.textContent = `ID: ${book.id}`;

        const title = document.createElement("p");
        title.textContent = `Title: ${book.title}`;

        const author = document.createElement("p");
        author.textContent = `Author: ${book.author}`;

        const pages = document.createElement("p");
        pages.textContent = `Pages: ${book.pages}`;

        const status = document.createElement("p");
        status.textContent = `Status: ${book.status}`;


        div.appendChild(id);
        div.appendChild(title);
        div.appendChild(author);
        div.appendChild(pages);
        div.appendChild(status);

        display.appendChild(div);
    })
}


// Display
displayBook(myLibrary);

// Event
