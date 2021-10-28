const subStr = (str, sub) =>{
    if(str.indexOf(sub)===-1){
        return false
    }else{
        return true
    }
}
console.log(subStr("This is the story of the substring", "tha"))