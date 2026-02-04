let arr = [900, 940, 950, 1100, 1500, 1800];
let dep = [910, 1200, 1120, 1130, 1900, 2000];
let n = arr.length;
let platform = 1;
let result = 1;
for (let i = 0; i < n; i++) {
  platform = 1;
  for (let j = 0; j < n; j++) {
    if (i != j) {
      // first check is there any train which will come before current train ;
      if (arr[i] >= arr[j] && dep[j] >= arr[i]) {
        platform++;
      }
    }
  }
  result = Math.max(platform, result);
}
console.log(result);

// In this code first create a conditon i!=j to avoid comparing by same train itself now next
// we check is there any train which comes before curr train (arr[i]) as well as departure time 
// is after arrving curr train arr[i] then we need a platform ;
