console.log('1: Reverse String');
console.log('2: Replace Vowels with * ');
console.log('3: Count Vowels in String');

let choice = 1; //choose your function menu
let word = 'Hello World'; //word

//1: Reverse String
function reverse_string(word) {
    let reverse_str = '';
    for (let i = word.length - 1; i >= 0; i--) {
        reverse_str += word[i];
    }
    return reverse_str;
}

//2: Replace Vowels with *
function replace_vowels(word) {
    let replace_str = word.replace(/[aeiou]/ig, '*');
    return replace_str;
}

//3: Count Vowels in String
function count_vowels(word) {
    let vowels = 'aeiou';
    let count = 0;
    for (let i = 0; i <= word.length - 1; i++) {
        for (let j = 0; j <= vowels.length - 1; j++) {
            if (word[i] == vowels[j])
                count++;
        }
    }
    return count;
}

switch (choice) {
    case 1:
        console.log(`(1) Reverse String: ${reverse_string(word)}`);
        break;
    case 2:
        console.log(`(2) Replace Vowels with *: ${replace_vowels(word)}`);
        break;
    case 3:
        console.log(`(3) Count Vowels in String${count_vowels(word)}`);
        break;
}