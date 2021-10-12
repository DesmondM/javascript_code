function BracketMatcher(str) { 

var brackCount =0;
for(var i=0; i<str.length; i++){
  if(str[i]=='('){
    brackCount++;
  }else if(str[i]==')'){
    brackCount--;
    if (brackCount < 0) return 0;
  }
}
 
  return brackCount==0 ? 1: 0; 

}
   
// keep this function call here 
console.log(BracketMatcher("[()())]"));