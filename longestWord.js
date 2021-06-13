function findLongest(str){
    var words = str.split(" ");
    var longest = "";

    for (var word of words){
        if(word.length> longest.length){
            longest = word;
        }
    }
    return longest

}
console.log(findLongest("I can put some sugar kurunga mapoto siya devide"));