const titleCase = (str) =>{
    var str = str.toLowerCase().split(" ");
    for(let i =0; i< str.length; i++){
        str[i] = str[i][0].toUpperCase()+ str[i].slice(1);
    }
    return str.join(" ")
}
console.log(titleCase("It is the day that the lord has made, we will rejoice and be glad in it"));