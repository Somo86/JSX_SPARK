import Spark from '../index';

const FragmentComponent = () => (
    <Spark.Fragment>
        <p>test1</p>
        <p>test2</p>
    </Spark.Fragment>
);

const TextNode = () => (
    <Spark.Fragment>
        Test
    </Spark.Fragment>
);

const NotJSXNode = (
    <Spark.Fragment>
        {() =>{}}
    </Spark.Fragment>
);

document.body.innerHTML = '<div id="test-app"></div>';

describe('Fragment component', () => {
    it('should render only child elements', () => {
        Spark.renderDOM(<FragmentComponent />, 'body');
        const el = document.querySelectorAll('p');
        expect(el.length).toBe(2);
    });

    it('should render only text node', () => {
        Spark.renderDOM(<TextNode />, 'body');
        const el = document.querySelector('body').textContent;
        expect(el).toBe('Test');
    });

    it('should throw error if child is not HTML or string', () => {
        expect(() => {
            Spark.renderDOM(<NotJSXNode />, 'body');
        }).toThrow();
    });
});