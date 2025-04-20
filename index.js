import { dialog } from './component/add-person-dialog.js'
import showButton from './component/dialog-show-button.js'

const main = document.querySelector('main')
const sidebar = document.querySelector('.sidebar')

sidebar.appendChild(showButton)
main.appendChild(dialog)
