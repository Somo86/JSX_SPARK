import errorHandler from './errorHandler/index'

function renderDOM (element, container) {
  const containerNode = document.querySelector(container)
  if (containerNode === null) {
    errorHandler(`The selector ${container} doesn't exist on your DOM tree`)
  }
  containerNode.innerHTML = ''
  containerNode.appendChild(element)
}

export default renderDOM
