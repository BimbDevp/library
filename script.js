

// Query selector
const search = document.querySelector("input");
const find = document.querySelector(".submit-btn");
const add = document.querySelector(".add-btn");
const display = document.querySelector(".book-container");
const bookDetails = document.querySelector(".book-details");
const addNewBook = document.querySelector(".add-container");
const submitBook = document.querySelector(".submit-book");
const closeDialog = document.querySelector(".close-dialog");
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");
const statusBook = document.querySelector("input[name='status']:checked");
const bookForm = document.querySelector(".book-form")

// Logic

// storage
const myLibrary = [];

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

function searchBookInLibrary(title) {
    bookDetails.innerHTML = "";
    const foundBook = myLibrary.find(book => book.title === title)
        if (foundBook) {
            const id = document.createElement("p");
            id.textContent = `ID: ${foundBook.id}`;

            const title = document.createElement("p");
            title.textContent = `Title: ${foundBook.title}`;

            const author = document.createElement("p");
            author.textContent = `Author: ${foundBook.author}`;

            const pages = document.createElement("p");
            pages.textContent = `Pages: ${foundBook.pages}`;

            const status = document.createElement("p");
            status.textContent = `Status: ${foundBook.status}`;


            bookDetails.appendChild(id);
            bookDetails.appendChild(title);
            bookDetails.appendChild(author);
            bookDetails.appendChild(pages);
            bookDetails.appendChild(status);
        
            bookDetails.showModal();
        } else {
            const information = document.createElement("h1");
            information.textContent = "Book not found!";


            bookDetails.appendChild(information);
            bookDetails.showModal();
        }
 
}

function displayBook(arr){
    display.innerHTML = "";

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





// Event



find.addEventListener("click", (e) => {
    e.preventDefault();
    searchBookInLibrary(search.value); 
})

add.addEventListener("click", () => addNewBook.showModal());

submitBook.addEventListener("click", (e) => {
    e.preventDefault();
    statusBook;

    const getStatus = statusBook ? statusBook.value : "unread";

    addBookToLibrary(title.value, author.value, pages.value, getStatus);

    displayBook(myLibrary);

    addNewBook.close();

    bookForm.reset();
})

closeDialog.addEventListener("click",() => addNewBook.close());







addBookToLibrary("Berani Tidak Disukai", "Ichiro Kishimi & Fumitake Koga", 336, "unread");
addBookToLibrary("Laut Bercerita", "Laila S. Chudori", 394, "unread");
displayBook(myLibrary);