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

  const addPersonButton = document.createElement('button')
  addPersonButton.setAttribute('type', 'submit')
  addPersonButton.setAttribute('form', 'person-form')
  addPersonButton.textContent = 'Confirm'

  addPersonButton.addEventListener('click', () => {
    let name = document.querySelector('#name').value
    let age = document.querySelector('#age').value
    let location = document.querySelector('#location').value

    if (!(name.length <= 0 || age.length <= 0 || location.length <= 0)) {
      dialog.close()
    }
  })

  fieldset.appendChild(addPersonButton)

  return fieldset
}

export default createFieldset
