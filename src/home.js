import * as DOM from './DOM.js'

const homeWindow = DOM.newElement('div', ['home-container', 'window'])

const title = DOM.newElement('h1', 'title')
    title.textContent = "Bender's Burgers"

const subtitle = DOM.newElement('h2', 'subtitle')
    subtitle.textContent = "Serving chumps since the year 3000"

const cta = DOM.newElement('div', 'cta')
    cta.textContent = 'ORDER NOW'

homeWindow.appendChild(title)

homeWindow.appendChild(subtitle)

homeWindow.appendChild(cta)

export {
    homeWindow,
    title,
    subtitle,
    cta
}