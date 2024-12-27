/**
 * What is subsequance ?
 * A subsequence is a sequence that can be derived from another sequence by removing zero or more 
 * elements, without changing the order of the remaining elements.
 */
var n = 4;
var str = "abc";
var new_str = [];
generateAllSubsequences(str,new_str,0);

function generateAllSubsequences(str,new_str,index){
   if (new_str.length !== 0){
       console.log(new_str.join(""));
   }
   if (index == str.length){
       return;
   }
   for (var i = index;i<str.length;i++){
       new_str.push(str[i]);
       generateAllSubsequences(str,new_str,i+1);
       new_str.pop();
   }
}