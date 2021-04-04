//Reverse a linked list

function reverseLinkedList(head) {
  let current = head;
  let prev = null;

  while(current) {
    let nextNode = current.next;
    current.next = prev;
    prev = current;
    current = nextNode;
  }

  return prev;
}