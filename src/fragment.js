import errorHandler from './errorHandler';

function fragment(...children) {
    const fragments = document.createDocumentFragment();

    children.forEach(child => {
        if (child instanceof HTMLElement) { 
          fragments.appendChild(child)
        } else if (typeof child === 'string'){
          const textnode = document.createTextNode(child)
          fragments.appendChild(textnode)
        } else {
          // not HTMLElement not strings
          console.error(`Any JSX child must be an HTMLElement or string: ${child}`);
        }
     });
     
    return fragments;
}

export default fragment;