// 9. *Loop Detection*:

// Given a circular linked list, implement an algorithm that returns the node
// at the beginning of the loop.

// ```
// DEFINITION
// Circular linked list: A (corrupt) linked list in which a node's next pointer
// points to an earlier node, so as to make a loop in the linked list.
// ```

// ```
// EXAMPLE
// Input: A->8->C->D->E-> C[thesameCasearlier] Output: C
// Hints: #50, #69, #83, #90
// ```

import { LinkedList } from "./10_LinkedList";

export type Node<T> = {
  value: T;
  next?: Node<T>;
};

export default function detectLoop<T>(
  head: Node<T> | undefined,
): Node<T> | null {
  const list = new LinkedList<T>(head)
  const set = new Set()
  let selectedNode: Node<T> | null = null

  list.visit(node => {
    if(set.has(node)) {
      selectedNode = node

      return true
    }

    set.add(node)
  })

  return selectedNode
}
