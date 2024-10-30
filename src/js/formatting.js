export default function clearingNumbers(number) {
    if (typeof number != "string") {
        throw TypeError("Ожидалась строка!");
    };

    const symbolClear = number.replace(/\D/g, '');

    if (symbolClear.length == 11 && symbolClear[0] == 8) {
        return symbolClear.replace(/8/, '+7');
    } else if (symbolClear != '') {
        return '+' + symbolClear;
    } else {
        throw Error("Номер не распознан!");
    };
};