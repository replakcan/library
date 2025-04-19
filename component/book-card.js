const createBookCard = function (title, author, year) {
  const bookCard = document.createElement('div')
  bookCard.classList.add('book-card')

  const title_ = document.createElement('h1')
  const author_ = document.createElement('h2')
  const year_ = document.createElement('p')

  title_.textContent = `title: ${title}`
  author_.textContent = `author: ${author}`
  year_.textContent = `year: ${year}`

  bookCard.appendChild(title_)
  bookCard.appendChild(author_)
  bookCard.appendChild(year_)

  return bookCard
}

export default createBookCard
