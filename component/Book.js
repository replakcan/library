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

export default Book
