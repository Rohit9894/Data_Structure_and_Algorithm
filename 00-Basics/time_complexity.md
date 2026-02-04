📘 time_complexity.md
# Time Complexity

## ⏱️ What is Time Complexity?
Time Complexity batata hai ki **algorithm ka running time input size ke badhne par kaise grow karta hai**.

👉 Ye **actual time (seconds)** nahi hota,  
👉 Ye **number of operations** ka estimate hota hai.

---

## 📥 Why Time Complexity is Important?
- Fast vs slow algorithm compare karne ke liye
- Large input ke liye performance judge karne ke liye
- Interview me optimization explain karne ke liye

---

## 📊 Big-O Notation
Big-O worst case scenario batata hai.

### Common Time Complexities:

| Big-O | Meaning | Example |
|------|--------|--------|
| O(1) | Constant | Array index access |
| O(log n) | Logarithmic | Binary Search |
| O(n) | Linear | Loop over array |
| O(n log n) | Linearithmic | Merge Sort |
| O(n²) | Quadratic | Nested loops |
| O(2ⁿ) | Exponential | Recursion (naive Fibonacci) |
| O(n!) | Factorial | Permutations |

---

## 🔍 Examples

### O(1) Example
```js
arr[0];

O(n) Example
for (let i = 0; i < n; i++) {
  console.log(arr[i]);
}

O(n²) Example
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    console.log(i, j);
  }
}

🔁 Best, Average, Worst Case

Best Case → Minimum time

Average Case → Expected time

Worst Case → Maximum time (Big-O usually)

🧠 How to Calculate Time Complexity?

Loops count karo

Nested loops → multiply

Recursion → recursion tree

Ignore constants & lower terms

Example:

O(2n + 3) → O(n)
O(n² + n) → O(n²)