const replacer = (str)=>{
    var str1 = str.replace(/[aeiou]/g, "RR");
    return str1
}
var stringer ='The quick brown fox jumps over the lazy dog'
console.log(replacer(stringer));