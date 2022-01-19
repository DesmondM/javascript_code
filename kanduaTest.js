// create a list with size n of unique voucher numbers for an online store
// vouchers should be random and non-deterministic
// all vouchers codes should be alphanumeric 
// all vouchers must contain both numbers and letters to be valid
// There may not be more than 2 consecutive repeating letters/ digits in a voucher
// A voucher code must be exactly 10 characters long
// If time permits try the following:
// Expose your API via a nodejs API. Bonus if you can use NestJS and use some of it’s features
// The API should be able to produce 1 to 10 million voucher codes in a reasonable amount of time.
/* 
const existCons = (str)=>{
     const re = /(?=.*?[a-z]{3})(?=.*?d.*?d)/;

     if (str.regex_match(re)){
         console.log(" there are consecutives")
     }else{
         console.log(" No consecutives")
     }
} */

const existCons = (str)=>{
    var flag1 = false;
    for(let i=0; i<str.length-2; i++){
        if(str[i]==str[i+1]&& str[i]==str[i+2]){      // cosecutive 3 characters
            console.log("There are consecutive " + str[i] +"'s");
            return true
            break
        }
    }
    return false
}
console.log(existCons("122335676788755"));

var characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
var vouchers = []
var charactersLength = characters.length;

for (var j = 0; j<=10000; j++){
var result = ""
for ( var i = 0; i < 10 ; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
}
if (existCons(result)){
     console.log(result + " random number with consecutives ")

}else{
    console.log(result + " random number isina zvayo ")
    if(vouchers.indexOf(result)===-1){
        vouchers.push(result);
    }
}

}

console.log("There are "+vouchers.length + " vouchers")
