import * as DOM from './DOM.js'

const contactWindow = DOM.newElement('div', ['contact', 'window'])
const contactInfo = DOM.newElement('p', 'contact-info')
const map = DOM.newElement('img', 'map')
const modalMap = DOM.newElement('img', 'modal-map')
const imgModal = DOM.newElement('div', 'img-modal')
const closeModal = DOM.newElement('div', 'close-modal')

contactInfo.innerHTML =
    `<strong>Bender's Burgers</strong><br>
    301 King St.<br>
    Springfield, OR<br>
    (555) 555-1234`

closeModal.textContent = 'close'
map.src = './images/map.png'
modalMap.src = './images/mapzoom.png'

map.addEventListener ('click', () => { imgModal.style.display = 'flex' })
closeModal.addEventListener ('click', () => { imgModal.style.display = 'none' })

imgModal.appendChild(closeModal)
imgModal.appendChild(modalMap)
contactWindow.appendChild(contactInfo)
contactWindow.appendChild(map)
contactWindow.appendChild(imgModal)

export { contactWindow }