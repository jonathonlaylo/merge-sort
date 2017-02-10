# Merge Sort
> aka "partition-exchange sort"

> Merge sort is a divide and conquer algorithm. 

> Divide the unsorted list into n sublists, each containing 1 element (a list of 1 element is considered sorted)

> Repeatedly merge sublists to produce new sorted sublists until there is only 1 sublist remaining. This will be the sorted list.

Best Case Scenario - O(n log(n))

Average Case Scenario - O(n log(n))

Worst Case Scenario - O(n log(n))

## Psuedo code
```
function mergeSort(list) 
  middle = list.length / 2
  left = list.slice(0, middle)
  right = list.slice(middle)
  if (list.length < 2)
    return list
  return merge

function merge(left, right)
  tmp
  while left.length and right.length
    if left[0] < right[0]
      tmp push(left)
    else
      tmp push(right)
  return tmp.concat(left.concat(right))
```
