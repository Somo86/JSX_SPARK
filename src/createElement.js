function createElement(tag, attrs, ...children) {
    if (typeof tag === 'function') { return tag(attrs) }

    if (typeof tag === 'string') {
    
        // fragments to append multiple children to the initial node
        const fragments = document.createDocumentFragment();
        const element = document.createElement(tag);

        children.forEach(child => {
           if (child instanceof HTMLElement) { 
             fragments.appendChild(child)
           } else if (typeof child === 'string'){
             const textnode = document.createTextNode(child)
             fragments.appendChild(textnode)
           } else {
             // later other things could not be HTMLElement not strings
             console.log('not appendable', child);
           }
        });

        element.appendChild(fragments)
        // Merge element with attributes
        Object.assign(element, attrs)
        return element;
      }
}

export default createElement;