import Spark from '../index';

document.body.innerHTML = '<div id="test-app"></div>';
const mockFunction = jest.fn();
const component = <button className="button" test="test-prop" onClick={mockFunction}>Click</button>;
Spark.renderDOM(component, '#test-app');

describe('JSX events', () => {
    it('should attach click event to element', () => {
        const el = document.querySelector('#test-app button').click();
        expect(mockFunction).toBeCalled();
    });

    it('should pass non event props as current props', () => {
        const el = document.querySelector('#test-app button').getAttribute('test');
        expect(el).toBe("test-prop");
    });

    it('should exclude reserved JSX words', () => {
        const el = document.querySelector('#test-app button').getAttribute('classname');
        expect(el).toBe(null);
    });
});