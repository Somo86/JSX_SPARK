import Spark from '../index';

const component = <p>Test</p>;
const nestedComponent = <div>
    <article>
        <p>test1</p>
        <p>test2</p>
    </article>
</div>

document.body.innerHTML = '<div id="test-app"></div>';

describe('Should render elements in DOM', () => {
    it('should render element if DOM wrapper exists', () => {
        Spark.renderDOM(component, '#test-app');
        const el = document.querySelector('#test-app p').textContent;
        expect(el).toBe('Test')
    });

    it('should render nested components', () => {
        Spark.renderDOM(nestedComponent, '#test-app');
        const el = document.querySelectorAll('#test-app article p');
        expect(el.length).toBe(2);
        expect(el[0].textContent).toBe('test1');
        expect(el[1].textContent).toBe('test2');
    });

    it('should throw error if selector doesn\'t exist in DOM tree', () => {
        expect(() => {
            Spark.renderDOM(component, '#undefined');
        }).toThrow();
    });
    
});