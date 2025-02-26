function canSellCookie(bills) {
  let five = 0;
  let ten = 0;
  for (let bill of bills) {
    if (bill == 5) {
      five++;
    } else if (bill == 10) {
      if (five > 0) {
        five--;
        ten++;
      } else {
        return false;
      }
    } else if (bill == 20) {
      if (ten > 0 && five > 0) {
        five--;
        ten--;
      } else if (five >= 3) {
        five -= 3;
      } else {
        return false;
      }
    }
  }
  return true;
}
let bills = [5, 5, 5, 20, 20];
console.log(canSellCookie(bills));
