import { dialog } from './component/add-book-dialog.js'

const main = document.querySelector('main')
main.appendChild(dialog)

const showButton = document.querySelector('.dialog-show-btn')

showButton.addEventListener('click', () => {
  dialog.showModal()
})
