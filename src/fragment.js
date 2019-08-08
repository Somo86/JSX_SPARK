function fragment(...children) {
    const fragments = document.createDocumentFragment();

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
     
    return fragments;
}

export default fragment;