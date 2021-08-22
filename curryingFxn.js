const add = (a,b,c) =>{
    return a+b+c;
}
console.log(add(2,3,5))

const addCurry = (a)=>{
    return (b)=>{
        return (c)=>{
            return (d)=>{
                return a+b+c+d;
            }
        }
    }
}
console.log(addCurry(2)(3)(5)(10))