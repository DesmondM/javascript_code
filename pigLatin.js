const pigLatin = (str) =>{
    var firstVowel = str.match(/[aeiou]/);
    var firstPos = str.indexOf(firstVowel);

    if(firstPos>0){
        return str.slice(firstPos)+ str.slice(0, firstPos);
    }
}
console.log(pigLatin("pray"));