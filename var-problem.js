var DEFAULT_RATE =0.1;
var rate = 0.5;

function getRate(){
    if(!rate){                   // because var is function scoped, the rate is not available inside the function
        var rate = DEFAULT_RATE;
    }
    return rate;
}
console.log("Your rate is now ", getRate());