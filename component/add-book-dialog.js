const dialog = document.createElement('dialog')
const form = document.createElement('form')
const fieldset = document.createElement('fieldset')
const legend = document.createElement('legend')

legend.textContent = 'Book information you want to add'
fieldset.appendChild(legend)

const fields = ['title', 'author', 'year']

for (let i = 0; i < fields.length; i++) {
  const currentField = fields[i]

  const div = document.createElement('div')
  const label = document.createElement('label')
  const input = document.createElement('input')

  label.setAttribute('for', currentField)
  label.textContent = currentField

  input.setAttribute('required', '')
  input.setAttribute('id', currentField)
  input.setAttribute('name', currentField)

  if (i == 0) input.setAttribute('autofocus', '')

  div.appendChild(label)
  div.appendChild(input)

  fieldset.appendChild(div)
}

const addBookButton = document.createElement('button')
addBookButton.textContent = 'Confirm'
addBookButton.addEventListener('click', () => {
  dialog.close()
})

const closeButton = document.createElement('button')

closeButton.textContent = 'X'
closeButton.addEventListener('click', () => {
  dialog.close()
})

form.appendChild(fieldset)
fieldset.appendChild(addBookButton)
dialog.appendChild(closeButton)
dialog.appendChild(form)

export default dialog
