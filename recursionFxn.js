const recurse =(num)=>{
    if(num<=0){
        return 0
    }else{
        return (num + recurse(num-1))
    }
}

console.log(recurse(5));