import { dialog } from "./add-person-dialog.js"

const showButton = document.createElement('button')
showButton.classList.add('.dalog-show-btn')
showButton.textContent = 'give a name'

showButton.addEventListener('click', () => {
  dialog.showModal()
})

export default showButton
