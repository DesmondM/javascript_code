const repeatStr = (str, num) =>{
    var final= " ";
    
    for (var i=1; i<=num; i++ ){
        final+=str;

    }
    return final

}

console.log(repeatStr("Dad ", 4))