import Events from './utils/events/index';
import { isReservedWord } from './utils/reserved/index';
import { renderChildren } from './utils/render/index';

function createElement(tag, attrs, ...children) {
    if (typeof tag === 'function' && tag.name === 'fragment') { return tag(...children) }
    if (typeof tag === 'function') { return tag(attrs) }
    if (typeof tag === 'string') {
    
        // fragments to append multiple children to the initial node
        //const fragments = document.createDocumentFragment();
        const element = document.createElement(tag);

        const fragments = renderChildren(children);

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