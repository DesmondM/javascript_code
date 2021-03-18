function isPalindrome(str){
    str = str.replace(/\W/g, '').toLowerCase();  // \W - non word characters, /g - global find all
    return(str==str.split('').reverse().join(''));
}
console.log(isPalindrome("radar"));