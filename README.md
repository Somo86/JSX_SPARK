# Spark-JSX
Spark-JSX is a tinny library for using JSX syntax on VanillaJS
## Dependencies <hr/>
install Babel loaders for JSX:
```js
$ npm install @babel/plugin-syntax-jsx @babel/plugin-transform-react-jsx --save-dev
```
Add JSX plugins on your .babelrc and include <strong>Spark.createElement</strong> method as a JSX parser
```js
{
    ...

    "plugins": [
        "@babel/plugin-syntax-jsx",
        ["@babel/plugin-transform-react-jsx", { 
            "pragma": "Spark.createElement",
        }]
    ],

    ...
}
```
## Basic usage on client side <hr />
Use <strong>Spark.renderDOM</strong> method for rendering your JSX component into your DOM tree
```html
<div id="app"></div>
```
```js
import Spark from 'spark-jsx';
import Header from '../header';

function App() {
    return (
        <div>
            <h1>Hello JSX world</h1>
            <Header lastItem="Item Prop" />
        </div>
    );
}

Spark.renderDOM(<App />, '#app');
```
### Fragment <hr/>
Fragment creates an imaginary node with all the properties and methods of the Node object.
```js
function Fragment() {
    return (
        <Spark.Fragment>
            <div>
                <h1>Hello JSX world</h1>
            </div>
            <div>
                <p>Bottom line</p>
            </div>
        </Spark.Fragment>
    );
}
```