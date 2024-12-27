var n = 4;
var mat = [];
var count = 0;
for (var i = 0;i<n;i++){
   mat.push(new Array(n).fill(0));
}
nQueens(0,mat);
console.log(count);

function printboard(matrix){
   for (var i = 0;i<matrix.length;i++){
       console.log(matrix[i].join(" "));
   }
   console.log("----------------");
}
function nQueens(index,matrix){
   if (index == matrix.length){
       printboard(matrix);
       count++;
       return;
   }    
   for (var i = 0;i<matrix.length;i++){
       if (checkSafe(matrix,index,i) === true){
           matrix[index][i] = 1;
           nQueens(index+1,matrix);
           matrix[index][i] = 0;
       }
   }
}

// row--index;
// column--i
function checkSafe(matrix,row,col){
   for (var i = 0;i<matrix.length;i++){
       if (matrix[i][col] == 1) return false;
   }
   for (let i = row-1, j = col+1;i>=0 && j < matrix.length;i--,j++){
       if (matrix[i][j] == 1) return false;
   }
   for (let i = row-1,j = col-1;i>=0 && j >= 0;i--,j--){
       if (matrix[i][j] == 1) return  false;
   }
   return true;
}