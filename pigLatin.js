const pigLatin = (str) =>{
    var firstVowel = str.match(/[aeiou]/);
    var firstPos = str.indexOf(firstVowel);

    if(firstPos>-1){
        return str.slice(firstPos)+ str.slice(0, firstPos);
    }else{
        return str
    }
}
console.log(pigLatin("prey"));