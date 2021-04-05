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

  insertNode(node) {
    node.next = this.head;
    this.head = node;
  }

  getByIndex(index) {
    if(index < 0 || index >= this.size()) {
      return null;
    }

    let current = this.head;

    for(let i = 0; i < index; i++) {
      current = current.next;
    }

    return current;
  }

  print() {
    let output = '';
    let current = this.head;

    while(current) {
      output = `${output}${current.data} -> `;
      current = current.next;
    }
    return `${output}null`;
  }

  insertAtIndex(index, value) {
    if (index === 0) return this.insertNode(value);

    const prev = this.getByIndex(index - 1);
    let newNode = new LinkedListNode(value)
    newNode.next = prev.next;
    prev.next = newNode;
  }
}

let node1 = new LinkedListNode(2);
let node2 = new LinkedListNode(5);
let node3 = new LinkedListNode(10);
let node4 = new LinkedListNode(1);

node1.next = node2;
node2.next = node3;

let list = new LinkedList(node1);
list.insertNode(node4);
console.log(list.print())
list.insertAtIndex(2, 3)

console.log(list.print())