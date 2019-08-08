import Spark from './src';
import Header from './components/header';

function App() {
    return (
        <div>
            <h1>Hello JSX world</h1>
            <Header lastItem="Item Prop" />
        </div>
    );
}

Spark.renderDOM(<App />, '#app');
