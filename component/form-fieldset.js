const createFieldset = function (fields, dialog) {
  const fieldset = document.createElement('fieldset')

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
  addBookButton.setAttribute('type', 'submit')
  addBookButton.setAttribute('form', 'person-form')
  addBookButton.textContent = 'Confirm'

  addBookButton.addEventListener('click', () => {
    let name = document.querySelector('#name').value
    let age = document.querySelector('#age').value
    let location = document.querySelector('#location').value

    if (!(name.length <= 0 || age.length <= 0 || location.length <= 0)) {
      dialog.close()
    }
  })

  fieldset.appendChild(addBookButton)

  return fieldset
}

export default createFieldset
