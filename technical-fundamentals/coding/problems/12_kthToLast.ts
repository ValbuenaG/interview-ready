// 2.  *Return Kth to Last*:

// Implement an algorithm to find the kth to last element of a singly linked list.

import { LinkedList } from "./10_LinkedList";

export type Node<T> = {
  value: T;
  next?: Node<T>;
};

export default function kthToLast<T>(
  head: Node<T>,
  k: number,
): Node<T> | undefined {
  const list = new LinkedList<T>(head)
  let selectedNode: Node<T> | undefined
  
  list.visit((node, index) => {
    if(index === list.length() - k) {
      selectedNode = node
    }
  })
  

  return selectedNode
}
