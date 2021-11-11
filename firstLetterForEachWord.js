const firsts = (arr) =>{

    var flag  =true;
    var str = '';

    for(let i =0; i<arr.length; i++){
        if (arr[i]!=' ' && flag){
            str = str+arr[i];
            flag = false;
        }else{
            if(arr[i]==' '){
                flag= true;
            }
        }
    }  
    return str;
}

console.log(firsts("These are rude"))