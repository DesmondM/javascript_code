const noRepeat = (str) =>{
    for(var i =0; i<str.length; i++){
        console.log(str.charAt(i))
        if(str.indexOf(str.charAt(i)) == str.lastIndexOf(str.charAt(i)))
        return str.charAt(i);
    }
}

noRepeat("mamat wami");