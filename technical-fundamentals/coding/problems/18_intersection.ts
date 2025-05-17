// 8.  *Intersection*;

// Given two (singly) linked lists, determine if the two lists intersect.
// Return the first intersecting node. Note that the intersection is defined
// based on reference, not value.

import { LinkedList } from "./10_LinkedList";

export type Node<T> = {
  value: T;
  next?: Node<T>;
};

export default function intersection<T>(
  list1: Node<T> | undefined,
  list2: Node<T> | undefined,
): Node<T> | undefined {
  const l1 = new LinkedList<T>(list1)
  const l2 = new LinkedList<T>(list2)
  let selectedNode: Node<T> | undefined
  
  const set = new Set()
  l1.visit(node => {
    set.add(node)
  })

  l2.visit(node => {
    if(set.has(node)) {
      selectedNode = node
      return true
    }
  })

  return selectedNode
}

