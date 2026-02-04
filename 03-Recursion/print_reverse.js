function reverse(str,N){
  if(N<0){
    return;
  }
  console.log(str[N]);
  return reverse(str,N-1);
}
let str="Kalvium";
let N=str.length-1;
let ans=reverse(str,N-1);