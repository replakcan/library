import { dialog } from './component/add-person-dialog.js'

const main = document.querySelector('main')
const header = document.querySelector('header')

main.appendChild(dialog)

const showButton = document.querySelector('.dialog-show-btn')

showButton.addEventListener('click', () => {
  dialog.showModal()
})