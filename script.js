

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
}

function displayBook(arr){
    arr.forEach(book => {
        const div = document.createElement("div");
        div.classList.add("card");
        
        const title = document.createElement("h3");
        title.textContent = book.title;

        const id = document.createElement("p");
        id.textContent = book.id;

        const author = document.createElement("p");
        author.textContent = book.author;

        const pages = document.createElement("p");
        pages.textContent = book.pages;

        const status = document.createElement("p");
        status.textContent = book.status;


        div.appendChild(title);
        div.appendChild(id);
        div.appendChild(author);
        div.appendChild(pages);
        div.appendChild(status);

        display.appendChild(div);
    })
}


// Display
displayBook(myLibrary);

// Event
