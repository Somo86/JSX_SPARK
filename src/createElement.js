import Events from './events/index';
import { isReservedWord } from './utils/reserved/index';

function createElement(tag, attrs, ...children) {
    if (typeof tag === 'function' && tag.name === 'fragment') { return tag(...children) }
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

        element.appendChild(fragments);
        attrs && addEvent(element, attrs);
        
        // Merge element with attributes
        Object.assign(element, attrs)
        return element;
      }
}

function addEvent(element, attrs) {
  for (let key in attrs) {
    const attr = key.toLowerCase();
    const event = Events.includes(attr);
    if(event) {
      element[attr] = attrs[key]; //event prop
    } else {
      !isReservedWord(key) 
        ? element.setAttribute(key, attrs[key]) //unknown JSX prop
        : null;
    };
  }
}

export default createElement;