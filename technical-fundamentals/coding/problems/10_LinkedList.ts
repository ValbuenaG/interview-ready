// 10. *Implement a Linked List*;

// Create the data structure with the corresponding initial functions:

export type Node<T> = {
  next?: Node<T> | undefined;
  value: T;
};

export class LinkedList<T> {
  head: Node<T> | undefined;
  tail: Node<T> | undefined;

  constructor(head?: Node<T>) {
    this.head = head
    this.tail = head
  }

  push(value: T) {
    if(!this.tail) {
      this.head = { value }
      this.tail = this.head
      return
    }

    this.tail.next = { value }
    this.tail = this.tail.next
  }
  filter(fn: (node: Node<T>)=> boolean) {
    let p = this.head
    const list = new LinkedList<T>()
    while(p) {
      if(fn(p)) {
        list.push(p.value)
      }

      p = p.next
    }

    return list
  }
  visit(fn: (node: Node<T>, index: number) => boolean | void) {
    let p = this.head
    let index = 0
    while(p) {
      if(fn(p, index)) {
        break
      }

      index ++
      p = p.next
    }
  }
  remove() {}
  merge(list: LinkedList<T>): LinkedList<T> {
    if(!this.tail) {
      this.head = list.head
      this.tail = this.head
      return this
    }

    this.tail.next = list.head
    if(list.tail) {
      this.tail = list.tail
    }
    return this
  }
  print() {}

  length(): number {
    let length = 0
    this.visit(() => { length ++ })
    return length
  }
}

const list = new LinkedList();
