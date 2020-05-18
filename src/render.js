import * as DOM from './DOM.js'
import * as frame from './frame.js'

const render = () => {
    DOM.content.appendChild(frame.banner)
    DOM.content.appendChild(frame.navBar)
    DOM.content.appendChild(frame.displayWindow)
}

export default render