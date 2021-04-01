//Implement a linked list

class LinkedListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  size() {
    let count = 0;
    let node = this.head;

    while(node) {
      node = node.next;
      count++;
    }

    return count;
  }

  clear() {
    this.head = null;
  }

  getLast() {
    let lastNode = this.head;

    if(lastNode) {
      while(lastNode.next) {
        lastNode = lastNode.next;
      }
    }

    return lastNode;
  }

  getFirst() {
    return this.head;
  }
}

let node1 = new LinkedListNode(2);
let node2 = new LinkedListNode(5);
let node3 = new LinkedListNode(10);
node1.next = node2;
node2.next = node3;

let list = new LinkedList(node1);

console.log(list.getLast());