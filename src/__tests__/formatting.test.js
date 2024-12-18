import clearingNumbers from "../js/formatting.js";

test.each([
    ['8 (927) 000-00-00', '+79270000000'],
    ['+7 960 000 00 00', '+79600000000'],
    ['+86 000 000 0000', '+860000000000']
])('Test %s number', (amount, expected) => {
    expect(expected).toBe(clearingNumbers(amount)); 
});

test.each([4, 'abc'])('Test toThrow with %s inner', (amount) => {
    expect(() => { clearingNumbers(amount); }).toThrow(Error);
});