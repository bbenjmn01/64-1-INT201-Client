
function reverseString(str) {
  var newString = "";
  for (var i = str.length - 1; i >= 0; i--) { 
        newString += str[i];
    }
    return newString; // "olleh"
}
reverseString("hello");

function replaceVowel(str) {
var newString = "";
for (var i = 0; i < str.length; i++){
if(str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u') {newString += '*'} else {newString += str[i]}
}
return newString;}
replaceVowel("Hello World")
"H*ll* W*rld"

function countVowel(str) {
var count = 0;
for (var i = 0; i < str.length; i++){
if(str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u') {count++}
}
return count;}
countVowel("Hello World")






   
