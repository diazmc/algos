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
}

let node1 = new LinkedListNode(2);
let node2 = new LinkedListNode(5);
node1.next = node2;

let list = new LinkedList(node1);
console.log(list)