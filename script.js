

// Query selector
const search = document.querySelector("input");
const find = document.querySelector(".submit-btn");
const add = document.querySelector(".add-btn");
const display = document.querySelector(".book-container");
const infoContent = document.querySelector(".info-content");
const bookDetails = document.querySelector(".book-details");
const addNewBook = document.querySelector(".add-container");
const submitBook = document.querySelector(".submit-book");
const closeDialog = document.querySelector(".close-dialog");
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");
const bookForm = document.querySelector(".book-form")
const closeAct = document.querySelector(".close-act");


// Logic

// storage
let myLibrary = [];

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
    infoContent.innerHTML = "";
   

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

          


            infoContent.appendChild(id);
            infoContent.appendChild(title);
            infoContent.appendChild(author);
            infoContent.appendChild(pages);
            infoContent.appendChild(status);
            

            bookDetails.appendChild(infoContent);
            
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

       const toggleStatus = document.createElement("input");
       toggleStatus.type = "checkbox";
       toggleStatus.dataset.id = book.id;

       if (book.status === "read") toggleStatus.checked = true;

        const deleteBook = document.createElement("button")
        deleteBook.classList.add("btn-delete");
        deleteBook.textContent = "Delete";
        deleteBook.dataset.id = book.id;

        div.appendChild(id);
        div.appendChild(title);
        div.appendChild(author);
        div.appendChild(pages);
        div.appendChild(status);
        div.appendChild(toggleStatus);
        div.appendChild(deleteBook);

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
    const currentStatusBook = document.querySelector("input[name='status']:checked");

    const currentStatus = currentStatusBook ? currentStatusBook.value : "unread";
    

    addBookToLibrary(title.value, author.value, pages.value, currentStatus);

    displayBook(myLibrary);

    addNewBook.close();

    bookForm.reset();
})

closeDialog.addEventListener("click",() => addNewBook.close());

closeAct.addEventListener("click", () => bookDetails.close());

display.addEventListener("change", (e) => {
   const clicked = e.target.dataset.id;
   const changed = myLibrary.find(book => book.id === clicked);

   if (changed) {
    if (e.target.checked) changed.status = "read";
    else changed.status = "unread";
   }

   displayBook(myLibrary);
})

display.addEventListener("click", (e) => {
    if (!e.target.classList.contains('btn-delete')) return

    const del = e.target.dataset.id;
    myLibrary = myLibrary.filter(book => book.id !== del);
    displayBook(myLibrary);

    
    

})




addBookToLibrary("Berani Tidak Disukai", "Ichiro Kishimi & Fumitake Koga", 336, "unread");
addBookToLibrary("Laut Bercerita", "Laila S. Chudori", 394, "unread");
displayBook(myLibrary);