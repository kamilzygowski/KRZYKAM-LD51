// Test import of a JavaScript module
import { title, canvas } from '@/js/main'
import '@/js/main'
import _quesitonMark from '@/images/questionmark.png'
import '@/styles/index.scss'

const quesitonMark = new Image();
quesitonMark.src = _quesitonMark;

const heading = document.createElement('h1')
heading.textContent = title()

const instructionButton = document.createElement('div')
instructionButton.className = "instructionsButton"

const app = document.querySelector('#root')
app.append(heading, canvas, instructionButton)
