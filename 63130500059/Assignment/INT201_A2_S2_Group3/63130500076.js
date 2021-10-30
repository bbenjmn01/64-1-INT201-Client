function reverseString(word){
    let newWord = '';
    for(let i=word.length-1; i>=0; i--){
        newWord += word[i];
    }
   return(newWord);
  }
  
  function replaceVowels(word){
    let newWord = '';
    for(let i=0; i<word.length; i++){
        const vowels = ['a','e','i','o','u','A','E','I','O','U'];
        if(vowels.includes(word[i])){
          newWord += '*';
        }else
          newWord += word[i];
    }
    return(newWord);
  }
  
  function countVowels(word){
    let count = 0;
    for(let i=0; i<word.length; i++){
        let vowels = ['a','e','i','o','u','A','E','I','O','U'];
        if(vowels.includes(word[i])){
          count++;
        }
    }
  return(count);
  }
  
  
  console.log(`Reverse the statement "I learn javascript" = ${reverseString('I learn javascript')}`);
  console.log(`Replace the vowels with * from the statement "I learn javascript" = ${replaceVowels('I learn javascript')}`);
  console.log(`Count the vowels with * from the statement "I learn javascript" = ${countVowels('I learn javascript')}`);
  
  console.log(`Reverse the statement "never odd or even" = ${reverseString('never odd or even')}`);
  console.log(`Replace the vowels with * from the statement "never odd or event" = ${replaceVowels('never odd or even')}`);
  console.log(`Count the vowels with * from the statement "never odd or even" = ${countVowels('never odd or even')}`);
  
  console.log(`Reverse the statement "vscode" = ${reverseString('vscode')}`);
  console.log(`Replace the vowels with * from the statement "vscode" = ${replaceVowels('vscode')}`);
  console.log(`Count the vowels with * from the statement "vscodeript" = ${countVowels('vscode')}`);