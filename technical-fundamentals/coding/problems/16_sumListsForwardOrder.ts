// 6.  Suppose the digits are stored in forward order. Repeat the above problem.

// ```
// EXAMPLE
// Input: (6 -> 1 -> 7) + (2 -> 9 -> 5).Thatis,617 + 295
// Output:9 -> 1 -> 2,Thatis,912.
// ```

import { LinkedList } from "./10_LinkedList";

export type Node<T> = {
  value: T;
  next?: Node<T>;
};

export default function sumListsForwardOrder(
  list1: Node<number> | undefined,
  list2: Node<number> | undefined,
): Node<number> | undefined {
    if(!list1 && !list2) return 
    // create two lists
    const li1 = new LinkedList<number>(list1)
    const li2 = new LinkedList<number>(list2)
  
    const arr1:[number?] = []
    const arr2:[number?] = []
  
    // populate both arrays
    li1.visit((node) => { arr1.push(node.value) })
    li2.visit((node) => { arr2.push(node.value) })
  
    const sum = Number(arr1.join("")) + Number(arr2.join(""))
  
    const sumList = new LinkedList<number>()
  
    sum
      .toString()
      .split("")
      .forEach(num => {
        sumList.push(Number(num))
      })
  
    return sumList.head
}
