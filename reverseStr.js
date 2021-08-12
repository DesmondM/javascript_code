const reverseStr = (sentence) =>{
  const allWords = sentence.split(" ");
  return allWords.map((word)=>word.split('').reverse().join('')).join(" ");
}
var str = "The quick brown fox jumps over the lay dog";
console.log(reverseStr(str));