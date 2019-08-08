function renderDOM(element, container) {
    const containerNode = document.querySelector(container);
    containerNode.innerHTML = '';
    containerNode.appendChild(element);
}

export default renderDOM;