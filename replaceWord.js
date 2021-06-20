const replaceWord = (str, b4, afta) =>{
     var str2 = str.split(" ");
    if(b4[0]===b4[0].toUpperCase()){
        afta = afta[0].toUpperCase() + afta.slice(1);
    }

    for(var i=0; i<str2.length; i++){
        if(str2[i]===b4){
            str2[i]=afta;
        }
    }
    return str2.join(" ");

}

console.log(replaceWord("The quick brown fox Jumps over the lazy dog", "Jumps", "barks"))               