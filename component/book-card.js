import { myLibrary, updateLibrary } from './add-book-dialog.js'

const createBookCard = function (id, title, author, year) {
  const bookCard = document.createElement('div')
  bookCard.classList.add('book-card')

  const bookCardId = id.slice(0, 5)
  bookCard.setAttribute('data-id', bookCardId)

  const title_ = document.createElement('h1')
  const author_ = document.createElement('h2')
  const year_ = document.createElement('p')

  title_.textContent = `title: ${title}`
  author_.textContent = `author: ${author}`
  year_.textContent = `year: ${year}`

  bookCard.appendChild(title_)
  bookCard.appendChild(author_)
  bookCard.appendChild(year_)

  const removeBookButton = document.createElement('button')
  removeBookButton.textContent = 'delete'

  removeBookButton.addEventListener('click', () => {
    const updatedLibrary = myLibrary.filter((book) => book.id.slice(0, 5) != bookCardId)

    updateLibrary(updatedLibrary)

    const toBeDeletedBookCard = document.querySelector(`[data-id="${bookCardId}"]`)

    toBeDeletedBookCard.remove()
  })
  bookCard.appendChild(removeBookButton)

  return bookCard
}

export default createBookCard
