const isPalindrome = str =>{

    for(let i =0; i=str.length-1; i++){
        if(str[i]!=str[str.length-1 -i]){
            return false
        } else{
            return true
        }
    }
}
console.log(isPalindrome("skayaks"));