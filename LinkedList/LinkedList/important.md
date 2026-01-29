(***1 . How count work ?***)
let arr = [1, 2, 3, 4, 5, 6, 7, 8];
let count=0;
let position = 4;
let curr = list;
while (count < position) {
  curr = curr.next;
  count++;
}
1 . 0 < position : curr --> 2 , index --> 1
2 . 1 < position : curr --> 3 , index --> 2
3 . 2 < position : curr --> 4 , index --> 3
4 . 3 < position : curr --> 5 , index --> 4
5 . 4 < position : condition failed
***First Point I observe that if my count start from 0 then curr index indicate the count index value index start from zero  for above example if count start form 0 then after while loop curr indicate value 5 according to array ***