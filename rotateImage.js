
const rotate =(matrix) =>{

    for(var i =0; i<matrix.lenght-1; i++){
        for(var j = 0; j<i; j++){
            let swap = matrix[i][j]

            matrix[i][j] = matrix[j][i]
            matrix[j][i] = swap;
            console.log(matrix[i][j], " - ")

        }
    }

    for(var i=0; i<matrix.length-1; i++){
        for(var j=0; j<matrix.length/2; j++){
            let swap = matrix[i][j]
            matrix[i][j] =matrix[i][matrix.length-1-j]
            matrix[i][matrix.length-1-j]= swap
            console.log(matrix[i][j], " - ")
        }
    }


    
}

rotate([[1,2,3],[2,4,6],[9,12,15]])