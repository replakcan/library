import { theList, setTheList } from '../model/TheList.js'

const createPersonCard = function (person) {
  const { id, name, age, location } = person

  const personCard = document.createElement('div')

  const personCardName = document.createElement('h1')
  const personCardAge = document.createElement('h2')
  const personCardLocation = document.createElement('p')
  const removeBookButton = document.createElement('button')

  const personCardId = id.slice(0, 5)
  personCard.setAttribute('data-id', personCardId)
  personCard.classList.add('person-card')

  personCardName.textContent = `NAME: ${name}`
  personCardAge.textContent = `AGE: ${age}`
  personCardLocation.textContent = `LOCATION: ${location}`

  removeBookButton.textContent = 'DELETE'
  removeBookButton.classList.add('remove-person-button')

  removeBookButton.addEventListener('click', () => {
    const filteredList = theList.filter((person) => person.id.slice(0, 5) != personCardId)
    setTheList(filteredList)

    const bookCardToDelete = document.querySelector(`[data-id="${personCardId}"]`)

    bookCardToDelete.remove()
  })

  personCard.appendChild(personCardName)
  personCard.appendChild(personCardAge)
  personCard.appendChild(personCardLocation)
  personCard.appendChild(removeBookButton)

  return personCard
}

export default createPersonCard
