import { dialog } from "./add-person-dialog.js"

const showButton = document.createElement('button')
showButton.classList.add('.dalog-show-btn')
showButton.textContent = 'Add Book'

showButton.addEventListener('click', () => {
  dialog.showModal()
})

export default showButton
