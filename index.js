const myLibrary = []

const Book = function (title, author, year) {
  if (!new.target) throw Error('You must use the new word')

  this.id = crypto.randomUUID()
  this.title = title
  this.author = author
  this.year = year
}

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
