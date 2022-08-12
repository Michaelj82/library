//creates library
let myLibrary = [];


//book object
function Book(title, author, pages, read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read


}

//adds book objects to myLibrary list

function addBookToLibrary(book){
    myLibrary.push(book)
}

//makes books
let theHobbit = new Book('The Hobbit', 'JRR Tolkien', 295, true)
let theFellowship = new Book('The Fellowship of the Ring', 'JRR Tolkien', 423, true)
let twoTowers = new Book('The Two Towers', 'JRR Tolkien', 352, true) 
let returnOfTheKing = new Book ('The Return of the King', 'JRR Tolkien', 416, false)

//adds books to myLibrary array
addBookToLibrary(theHobbit)
addBookToLibrary(theFellowship)
addBookToLibrary(twoTowers)
addBookToLibrary(returnOfTheKing)

console.log(myLibrary)

//selects bookshelf ID
const bookshelf = document.getElementById('bookshelf');


//adds each book into bookshelf div
for (let i = 0; i < myLibrary.length; i++){

    let newBook = document.createElement('div');
    newBook.classList.add('book');
    newBook.textContent = myLibrary[i]['title'];

    bookshelf.appendChild(newBook);

}

