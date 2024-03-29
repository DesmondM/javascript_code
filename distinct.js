function distinctIds(arr, mi)
{
    var n = arr.length;
    var m = new Map();
    var v = [];
    var count = 0;
 
    // Store the occurrence of ids
    for (var i = 0; i < n; i++)
    {
        if(m.has(arr[i])){
            m.set(arr[i], m.get(arr[i])+1)
            console.log("id occurence " + arr[i] )
        }
        else
            m.set(arr[i], 1)
    }
 
    // Store into the vector second as first and vice-versa
    m.forEach((value, key) => {
         
        v.push([value, key]);
    });
 
    // Sort the vector
    v.sort()
 
    var size = v.length;
 
    // Start removing elements from the beginning
    for (var i = 0; i < size; i++) {
 
        // Remove if current value is less than
        // or equal to mi
        if (v[i][0] <= mi) {
            mi -= v[i][0];
            count++;
        }
 
        // Return the remaining size
        else
            return size - count;
    }
    return size - count;
}
 
console.log(distinctIds([2, 3, 1, 2, 3, 6, 6, 7 ], 2))