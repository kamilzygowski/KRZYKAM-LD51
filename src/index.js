// Test import of a JavaScript module
import { title, canvas } from '@/js/main'

// Test import of an asset
//import webpackLogo from '@/images/webpack-logo.svg'

// Test import of styles
import '@/styles/index.scss'

// Appending to the DOM

const heading = document.createElement('h1')
heading.textContent = title()

const app = document.querySelector('#root')
app.append(heading, canvas)
