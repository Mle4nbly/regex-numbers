import clearingNumbers from "./formatting.js";

const phoneNumbers = [
    '8 (927) 000-00-00',
    '+7 960 000 00 00',
    '+86 000 000 0000',
    443899873737
];

phoneNumbers.forEach(number => {
    try {
        console.log(clearingNumbers(number));
    } catch (error) {
        console.log(error);
    };
});