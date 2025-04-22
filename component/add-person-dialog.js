import createPersonCard from './person-card.js'
import createFieldset from './form-fieldset.js'
import { formFields } from '../data/form-fields.js'
import theList from '../model/TheList.js'
import Person from '../model/Person.js'

const main = document.querySelector('main')

const dialog = document.createElement('dialog')
const form = document.createElement('form')
const legend = document.createElement('legend')

const fieldset = createFieldset(formFields, dialog)

legend.textContent = 'I\'m waiting'
fieldset.appendChild(legend)

form.setAttribute('id', 'person-form')
form.addEventListener('submit', (e) => {
  e.preventDefault()

  const name = document.querySelector('#name').value
  const age = document.querySelector('#age').value
  const location = document.querySelector('#location').value

  const person = Person.createPersonAndAddToTheList(name, age, location, theList.list)
  const personCard = createPersonCard(person)

  main.appendChild(personCard)

  form.reset()
})

const closeButton = document.createElement('button')

closeButton.textContent = 'X'
closeButton.addEventListener('click', () => {
  dialog.close()
})

form.appendChild(fieldset)

dialog.appendChild(closeButton)
dialog.appendChild(form)

export { dialog }
