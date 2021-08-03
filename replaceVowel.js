const replaceVowel = (str)=>{
    var vowels = match(/[aeiou]/);
    var str1 =  str.split('');
    for(var i =0; i<str1.length; i++){
        if(str1[i]==vowels){
            str1[i]='R';
        }
    }
    return str1
}
console.log(replaceVowel('Thisabust'));