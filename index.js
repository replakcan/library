import { dialog } from './component/add-book-dialog.js'

const main = document.querySelector('main')
main.appendChild(dialog)

const showButton = document.querySelector('.dialog-show-btn')

showButton.addEventListener('click', () => {
  dialog.showModal()
})

Book.prototype.toString = function () {
  return `Book info:\nbook_id: ${this.id}\ntitle: ${this.title}\nauthor: ${this.author}\nyear: ${this.year}\n`
}

const addBookToLibrary = function (title, author, year) {
  const book = new Book(title, author, year)

  myLibrary.push(book)
}

const displayAllBooks = function () {
  myLibrary.map((book) => console.log(book.toString()))
}

addBookToLibrary('Guliverin Gezileri', 'Gulmiyver', '2009')
addBookToLibrary('Dune', 'Frank Herbert', '2001')
addBookToLibrary('Davincinin Sifresi', 'Dan Brown', '1996')
addBookToLibrary('Polyanna', 'Oburix', '1954')

displayAllBooks()
