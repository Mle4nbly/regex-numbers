export default function clearingNumbers(number) {
    const symbolClear = number.replace(/\D/g, '');

    if (symbolClear.length == 11 && symbolClear[0] == 8) {
        return symbolClear.replace(/8/, '+7');
    } else if (symbolClear.length > 11) {
        return '+' + symbolClear;
    };
};