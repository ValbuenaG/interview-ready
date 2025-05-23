// 3. *Delete Middle Node*:

// Implement an algorithm to delete a node in the middle
// (i.e., any node but the first and last node, not necessarily the exact middle)
// of a singly linked list, given only access to that node.

// ```
// EXAMPLE
// Input: the node c from the linked list a - >b- >c - >d - >e- >f
// Result: nothing is returned, but the new linked list looks like a->b->d->e->f Hints: #72
// ```

import { LinkedList } from "./10_LinkedList";

export type Node<T> = {
  value: T;
  next?: Node<T>;
};

export default function deleteMiddleNode<T>(
  head: Node<T>,
  position: number,
): Node<T> | undefined {
  const list = new LinkedList<T>(head)
  const newList = new LinkedList<T>()

  if(position < 1 || position >= list.length() -1 ) return head

  list.visit((node, index) => {
    if(index !== position) {
      newList.push(node.value)
    }
  })

  return newList.head

}
