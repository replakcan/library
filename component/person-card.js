import theList from "../model/TheList.js"

const createPersonCard = function (person) {
  const { id, name, age, location } = person

  const personCard = document.createElement('div')

  const personCardName = document.createElement('h1')
  const personCardAge = document.createElement('h2')
  const personCardLocation = document.createElement('p')
  const removePersonButton = document.createElement('button')

  const personCardId = id.slice(0, 5)
  personCard.setAttribute('data-id', personCardId)
  personCard.classList.add('person-card')

  personCardName.textContent = `NAME: ${name}`
  personCardAge.textContent = `AGE: ${age}`
  personCardLocation.textContent = `LOCATION: ${location}`

  removePersonButton.textContent = 'DELETE'
  removePersonButton.classList.add('remove-person-button')

  removePersonButton.addEventListener('click', () => {
    const filteredList = theList.list.filter((person) => person.id.slice(0, 5) != personCardId)
    
    theList.filterTheList(filteredList)

    const personCardToDelete = document.querySelector(`[data-id="${personCardId}"]`)

    personCardToDelete.remove()
  })

  personCard.appendChild(personCardName)
  personCard.appendChild(personCardAge)
  personCard.appendChild(personCardLocation)
  personCard.appendChild(removePersonButton)

  return personCard
}

export default createPersonCard
