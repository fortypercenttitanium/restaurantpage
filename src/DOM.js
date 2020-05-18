const content = document.querySelector('.content')
const newElement = (type, classNames) => {
    const element = document.createElement(type)
    if (Array.isArray(classNames)){
        element.classList.add(...classNames)
    } else {
        element.classList.add(classNames)
    }
    return element
}

export { newElement, content }