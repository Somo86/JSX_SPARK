import {flatten} from '../functionalUtils/index';

export function renderChildren(children) {
    const fragments = document.createDocumentFragment();
    
    flatten(children).forEach(child => {
        if (child instanceof HTMLElement) { 
          fragments.appendChild(child)
        } else if (typeof child === 'string'){
          const textnode = document.createTextNode(child)
          fragments.appendChild(textnode)
        } else {
          // not HTMLElement or strings
          console.log('not appendable', child);
        }
    });

    return fragments;
}
