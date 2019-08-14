import reservedWords from './reservedList';

function isReservedWord(JSXprop) {
    return reservedWords.includes(JSXprop);
}

export {
    isReservedWord
}