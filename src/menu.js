import * as DOM from './DOM.js'

const menuWindow = DOM.newElement('div', ['menu-window', 'window'])

const title = DOM.newElement('h1', 'title')
    title.textContent = "Menu"

const menu = DOM.newElement('img', 'menu')

menu.src = '/images/menu.png'

menuWindow.appendChild(title)
menuWindow.appendChild(menu)

export { menuWindow }