import * as DOM from './DOM.js'
import { homeWindow } from './home.js'
import { menuWindow } from './menu.js'
import { contactWindow } from './contact.js'

const banner = DOM.newElement('div', 'banner')
const logo = DOM.newElement('img', 'logo')
const navBar = DOM.newElement('nav', 'navbar')
const homeTab = DOM.newElement('div', ['home-tab', 'nav'])
const menuTab = DOM.newElement('div', ['menu-tab', 'nav'])
const contactTab = DOM.newElement('div', ['contact-tab', 'nav'])
const displayWindow = DOM.newElement('div', 'display-window')

homeTab.textContent = 'home'
menuTab.textContent = 'menu'
contactTab.textContent = 'contact'

banner.appendChild(logo)
navBar.appendChild(homeTab)
navBar.appendChild(menuTab)
navBar.appendChild(contactTab)

const switchWindow = (newWindow) => {
    displayWindow.childNodes.forEach(child => {
        displayWindow.removeChild(child)
    })
    displayWindow.appendChild(newWindow)
}

homeTab.addEventListener('click', () => {
    switchWindow(homeWindow)
})
menuTab.addEventListener('click', () => {
    switchWindow(menuWindow)
})
contactTab.addEventListener('click', () => {
    switchWindow(contactWindow)
})

export {
    banner,
    logo,
    navBar,
    homeTab,
    menuTab,
    contactTab,
    displayWindow,
}