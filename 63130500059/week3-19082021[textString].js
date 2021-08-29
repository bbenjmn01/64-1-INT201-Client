const text = 'Hello World';

function textString(n) {
    let tmp;
    switch (n) {
        case 1:
            tmp = text.split('').reverse().join('');
            return tmp;
        case 2:
            tmp = text.replace(/[aeiou]/gi, '*');
            return tmp;
        case 3:
            let count = 0;
            tmp = text.match(/[aeiou]/gi);
            return tmp.length;
        default:
            break;
    }
}

console.log(textString(1));
console.log(textString(2));
console.log(textString(3));