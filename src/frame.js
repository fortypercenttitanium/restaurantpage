import * as DOM from './DOM.js'
import { homeWindow } from './home.js'
import { menuWindow } from './menu.js'
import { contactWindow } from './contact.js'

const navBar = DOM.newElement('nav', 'navbar')
const displayWindow = DOM.newElement('div', 'display-window')

class Tab {
    constructor(name, window) {
        this.name = name
        this.class = ['nav', `${name}-tab`]
        this.parent = DOM.newElement('div', this.class)
        this.text = DOM.newElement('span', `${name}-tab-text`)
        this.window = window
        this.init()
    }

    init() {
        this.text.textContent = this.name
        this.parent.appendChild(this.text)
        navBar.appendChild(this.parent)
    }

    switchWindow() {
        displayWindow.textContent = ''
        displayWindow.appendChild(this.window)
        DOM.tabs().forEach(tab => {
            tab.classList.remove('active')
        })
        this.parent.classList.add('active')
    }
}

const homeTab = new Tab('home', homeWindow)
const menuTab = new Tab('menu', menuWindow)
const contactTab = new Tab('contact', contactWindow)

navBar.addEventListener('click', e => {
    if (e.target.textContent === 'home') {
        homeTab.switchWindow()
    } else if (e.target.textContent === 'menu') {
        menuTab.switchWindow()
    } else if (e.target.textContent === 'contact') {
        contactTab.switchWindow()
    }
})

homeTab.switchWindow()

export {
    navBar,
    displayWindow,
}