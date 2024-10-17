import clearingNumbers from "../js/formatting.js";

test.each([
    ['first number', '8 (927) 000-00-00', '+79270000000'],
    ['second number', '+7 960 000 00 00', '+79600000000'],
    ['third number', '+86 000 000 0000', '+860000000000']
])('Test %s %s', (amount, expected) => {
    const result = clearingNumbers(amount);
    expect(clearingNumbers(result)).toBe(clearingNumbers(expected)); 
});