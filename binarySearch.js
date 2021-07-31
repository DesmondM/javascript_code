const search = (arr, val) =>{
    let lower = 0;
    let upper = arr.length -1;
  
   while(lower<=upper){
       const mid = lower + Math.floor((upper-lower)/2);
       if(val===arr[mid])return mid;
       if(val<arr[mid]){ 
           upper = mid-1
     }else{
         lower = mid+1
     }
     return -1;
}

const arr1 =[12,13,15,18,21,23,25,27,31,45];
console.log(search(arr1, 25));