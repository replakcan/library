const myLibrary = []

const Book = function (title, author, year) {
  if (!new.target) throw Error('You must use the new word')

  this.id = crypto.randomUUID()
  this.title = title
  this.author = author
  this.year = year
}

const addBookToLibrary = function (title, author, year) {
  const book = new Book(title, author, year)

  myLibrary.push(book)
}

