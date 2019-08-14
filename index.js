import Spark from './src';
import Header from './components/header';

function App() {
    return (
        <Spark.Fragment>
            <div>
                <h1 onClick={click}>Hello JSX world</h1>
                <Header lastItem="Item Prop" />
            </div>
            <div>
                <p>Bottom line</p>
            </div>
        </Spark.Fragment>
    );
}

function click(e) {
    console.log(e);
}

Spark.renderDOM(<App />, '#app');
