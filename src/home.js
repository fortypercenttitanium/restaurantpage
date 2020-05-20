import * as DOM from './DOM.js'

const homeWindow = DOM.newElement('div', ['home-container', 'window'])

const subtitle = DOM.newElement('h2', 'subtitle')
    subtitle.textContent = "Serving chumps since the year 3000"

const cta = DOM.newElement('img', 'cta')
    cta.src = '/dist/images/ordernow.png'

homeWindow.appendChild(subtitle)
homeWindow.appendChild(cta)

export { homeWindow }