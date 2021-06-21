const check =(arr)=>{

    var firstWord = arr[0].toUpperCase();
    var secondWord = arr[1].toUpperCase();

    for (var i =0; i<secondWord.length; i++){
        if(firstWord.indexOf(secondWord[i])=== -1){
            return "Not a complete match"
        }
        
    }
    return "A match in words"
}

console.log(check(["Rara", "rabaab"]))