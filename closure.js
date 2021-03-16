var b=1;
function outer(){
    var b =2
    function inner(){
        b++;  //b is undefined, which means b is NaN
        console.log(b)
        var b=3; // now defined as 3
        console.log(b) // output is 3
    }
    inner();
}
outer();