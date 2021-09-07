const isAnagram = (str1, str2) =>{
    const strA = (str1.split("").sort().join("")).trim();
     const strB = (str2.split("").sort().join("")).trim();

     return(strA===strB)
}

console.log(isAnagram('trees', 'ree ts'))