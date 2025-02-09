function longestWord(str){
    let wordsArray = str.split(' ');
    let longWord = wordsArray[0]
    for (let word of wordsArray){
        if(word.length > longWord.length)
            longWord = word;
    }
    return longWord
}


console.log(longestWord("The quick brown fox jumps over the lazy dog")); 
console.log(longestWord("I love programming in JavaScript")); 
console.log(longestWord("Hello world")); 
