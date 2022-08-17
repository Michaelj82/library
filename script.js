//creates library
let myLibrary = [];

// selects site
const site = document.getElementById('site');

const topbar = document.getElementById('topbar');

const sidebar = document.getElementById('sidebar');

const popup = document.getElementById('popup');

//selects bookshelf ID
const bookshelf = document.getElementById('bookshelf');


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










//adds each book into bookshelf div
for (let i = 0; i < myLibrary.length; i++){
    //makes book object
    let newBook = document.createElement('div');
    newBook.classList.add('book');

    //creates elements for book objects, ie title, imagebox, input for image, author, pagecount, read/notread
    let title = document.createElement('div');
    title.textContent = myLibrary[i]['title'];
    title.classList.add('bookTitle');

    let imageBox = document.createElement('div');
    imageBox.classList.add('imageBox');



    let form = document.createElement('form');
    let input = document.createElement('input');
    form.classList.add('fileChooser');
    input.setAttribute('type', 'file');
    input.setAttribute('name', 'upload');
    input.setAttribute('accept', 'image/');

    //makes it so you can submit an image into the book
    let uploadedImage = '';

    input.addEventListener('change', function(){
        const reader = new FileReader();
        reader.addEventListener('load', () => {
            uploaded_image = reader.result
            imageBox.style.backgroundImage = `url(${uploaded_image})`;
        });
        reader.readAsDataURL(this.files[0]);
    })



    form.appendChild(input);





    let author = document.createElement('div');
    author.textContent = myLibrary[i]['author'];
    author.classList.add('bookAuthor');


    let pageCount = document.createElement('div');
    pageCount.textContent = myLibrary[i]['pages'];
    pageCount.classList.add('pageCount');


    let read = document.createElement('div');
    read.textContent = myLibrary[i]['read'];
    read.classList.add('read');

    //gives book the attributes
    newBook.append(title, imageBox, form, author, pageCount, read);
    //puts book on bookshelf
    bookshelf.appendChild(newBook);

}


let exitPopUp = function(){
    popup.style.opacity = '0.0';

    topbar.classList.remove('blur')
    sidebar.classList.remove('blur');
    bookshelf.classList.remove('blur')

}


//make popup for add new book form

let openAddNewBook = function(){

    popup.style.opacity = '1.0';

    topbar.classList.add('blur');
    sidebar.classList.add('blur');
    bookshelf.classList.add('blur');


}
