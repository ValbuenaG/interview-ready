// 1. *Remove Dups*:

// Write code to remove duplicates from an unsorted linked list. FOLLOW UP
// How would you solve this problem if a temporary buffer is not allowed?
//
// 1 -> 2 -> 2-> 2 -> 4

import { LinkedList } from "./10_LinkedList";

export type Node<T> = {
  value: T;
  next?: Node<T>;
};

export default function removeDups<T>(head?: Node<T>): Node<T> | undefined {
  // create a linked list
  const list = new LinkedList<T>(head)

  //create set
  const set = new Set()

  // create new filtered list without dups
  const filteredList = list.filter((node) => {
    if(set.has(node.value)) return false

    set.add(node.value)
    return true
  })

  return filteredList.head
}
