// 5. *Sum Lists*: You have two numbers represented by a linked list,
// where each node contains a single digit. The digits are stored in reverse order,
// such that the Vs digit is at the head of the list.
// Write a function that adds the two numbers and returns the sum as a linked list.

// ```
// EXAMPLE
// Input: (7-> 1 -> 6) + (5 -> 9 -> 2).That is,617 + 295.
// Output: 2 -> 1 -> 9. That is, 912.
// ```

import { LinkedList } from "./10_LinkedList";

export type Node<T> = {
  value: T;
  next?: Node<T>;
};

export default function sumLists(
  list1: Node<number> | undefined,
  list2: Node<number> | undefined,
): Node<number> | undefined {
  // create two lists
  const li1 = new LinkedList<number>(list1)
  const li2 = new LinkedList<number>(list2)

  const arr1:[number?] = []
  const arr2:[number?] = []

  // populate both arrays
  li1.visit((node) => { arr1.unshift(node.value) })
  li2.visit((node) => { arr2.unshift(node.value) })

  const sum = Number(arr1.join("")) + Number(arr2.join(""))

  const sumList = new LinkedList<number>()

  sum
    .toString()
    .split("")
    .reverse()
    .forEach(num => {
      sumList.push(Number(num))
    })

  return sumList.head
}
