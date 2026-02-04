# Bubble Sort

## Idea
Adjacent elements compare karo aur swap karo
jab tak array sort na ho jaaye.

## How it Works
- Har pass me largest element end me chala jaata hai
- Multiple passes until sorted

## Example
Input: [5, 3, 2, 1]  
Output: [1, 2, 3, 5]

## Algorithm Steps
1. Compare arr[i] and arr[i+1]
2. Swap if arr[i] > arr[i+1]
3. Repeat for n-1 passes

## Time Complexity
- Best: O(n)
- Average: O(n²)
- Worst: O(n²)

## Space Complexity
- O(1)

## Stable
Yes

## In-place
Yes

## When to Use
- Very small input
- Already nearly sorted array

## Notes
- Simple but inefficient
