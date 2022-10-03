// Test import of a JavaScript module
import { title, canvas, canvas2, startGame } from '@/js/main'
import '@/js/main'
import _quesitonMark from '@/images/questionmark.png'
import '@/styles/index.scss'

const quesitonMark = new Image();
quesitonMark.src = _quesitonMark;

const heading = document.createElement('h1')
heading.className = "title"
heading.textContent = title()

const instructionButton = document.createElement('div')
instructionButton.className = "instructionsButton"
const restartButton = document.createElement('div')
restartButton.className = "restart"
restartButton.style.animation = "smallBump 0.75s infinite ease-in-out;"
instructionButton.addEventListener('click', () => {
    instructions.style.display === "block" ? instructions.style.display = "none" : instructions.style.display = "block";
})

/*const startButton = document.createElement('div')
startButton.className = "startButton"*/

const instructions = document.querySelector('.instructions');
instructions.addEventListener('click', (e) => {
    if(e.target.className === "instructions")
    instructions.style.display = "none";
})

restartButton.addEventListener('click', () => {
    restartButton.classList.remove("restartAnim")
    startGame();
    window.location.reload()
})

const app = document.querySelector('#root')
app.append(heading, canvas, canvas2, instructionButton, restartButton)

