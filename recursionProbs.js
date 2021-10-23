const recur =(num) =>{
    if(num<2){
        return num
    }else{
        return recur(num-1)+ recur(num-2);
    }
}


console.log(recur(7))