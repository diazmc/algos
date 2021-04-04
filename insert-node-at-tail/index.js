// Insert node at tail

function insertNodeAtTail(head, data) {
  let newNode = new LinkedListNode(data);

  if(!head) {
    head = newNode;
    return head;
  }

  let current = head;
  while(current.next) {
    current = current.next;
  }

  current.next = newNode;

  return head;
}