let matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [1, 2, 3, 4],
  [5, 6, 7, 8],
];

for (var i = 0; i < matrix.length; i++) {
  line = "";
  for (var j = 0; j < matrix.length; j++) {
    line += matrix[j][matrix.length - i - 1] + " ";
  }
  console.log(line);
}
/**
Ouput
4 8 4 8
3 7 3 7
2 6 2 6
1 5 1 5
 */

/**
 * Explanation If you  observe carefully then you find all matrix is rotating 90 degree 
 * 1 2 3    3 6 9 
 * 4 5 6    8 5 2 
 * 7 8 9    7 4 1 
 * 
 * Here you can clear show my last column becomes my first raw 
 * so we create condition here 
 * first we run a loop  which start from 0 :
 * for(let i=0; i<arr.length; i++)
 * then we run another loop inside that loop 
 * for (var j = 0; j < matrix.length; j++) 
 * Now , we create a variable line in which I add
 * we pass matrix[j] it will show the row number which will continously change and another
 * is [matrix.length - i - 1] it will also change after printing one line .
 */