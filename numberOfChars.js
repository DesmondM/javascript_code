const countChars = (str, tofind)=>{
    let count =0;
    for(let i=0; i<str.length; i++){
        if(str.charAt(i) ===tofind){
        count=count+1;
        console.log("Counter is "+ count)
        }
    }
    return count
}

console.log(countChars("This is the test sentence try it", "t"))