import * as DOM from './DOM.js'

const banner = DOM.newElement('div', 'banner')
const banCon1 = DOM.newElement('div', 'ban-con')
const banCon2 = DOM.newElement('div', 'ban-con')
const banCon3 = DOM.newElement('div', 'ban-con')
const logo = DOM.newElement('img', ['logo', 'banner-child'])
const titleOne = DOM.newElement('h1', ['header-title', 'banner-child'])
const titleTwo = DOM.newElement('h1', ['header-title', 'banner-child'])

titleOne.textContent = "Bender's"
titleTwo.textContent = "Burgers"
logo.src = '/images/bbicon.png'

banCon1.appendChild(titleOne)
banCon2.appendChild(logo)
banCon3.appendChild(titleTwo)

banner.appendChild(banCon1)
banner.appendChild(banCon2)
banner.appendChild(banCon3)

export { banner }