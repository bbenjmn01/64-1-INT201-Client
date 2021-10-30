const text = 'Hello World';

function textString(n) {
    let result;
    switch (n) {
        case 1:
            result = text.split('').reverse().join('');
            return result;
        case 2:
            result = text.replace(/[aeiou]/gi, '*');
            return result;
        case 3:
            let count = 0;
            result = text.match(/[aeiou]/gi);
            return result.length;
        default:
            break;
    }
}

console.log(textString(1));
console.log(textString(2));
console.log(textString(3));