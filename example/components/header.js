import Spark from '../../src';

function Header({lastItem}) {
    return (
        <ul>
            <h3>Tipical header list:</h3>
            <li>Firts element</li>
            <li>Second element</li>
            <li>Third element</li>
            <li>{ lastItem }</li>
        </ul>
    );
}

export default Header