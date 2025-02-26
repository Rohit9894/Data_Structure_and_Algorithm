let matrix = ["safer", "amjad", "babol", "aaron", "songs"];
/**
 * s a f e r
 * a m j a d
 * b a b o l
 * a a r o n
 * s o n g s
 */
let n = matrix.length;
let m = matrix[0].length;
let count=0;
  for(let i=0;i<n;i++)
  {
      for(let j=0;j<m;j++)
      {
        // Horizontal Check
          if(j<m-3){
            line=matrix[i][j]+matrix[i][j+1]+matrix[i][j+2]+matrix[i][j+3]
            if(line=="saba"){
                count+=1
            }
            }
            
            // Vertical Check
            if(i<n-3){
            line=matrix[i][j]+matrix[i+1][j]+matrix[i+2][j]+matrix[i+3][j]
            //console.log(line)
            if(line=="saba"){
                count+=1
            }
            }
            
            //Left Digonal Check
            if((j<m-3) && (i<n-3)){
            line=matrix[i][j]+matrix[i+1][j+1]+matrix[i+2][j+2]+matrix[i+3][j+3]
            if(line=="saba"){
                count+=1
            }
            }
            
            // Right Digonal Check
            if((j<m-3) && (i<n-3)){
            line=matrix[i+3][j]+matrix[i+2][j+1]+matrix[i+1][j+2]+matrix[i][j+3]
            if(line=="saba"){
                count+=1
            }
            }
      }
  }
  console.log(count)