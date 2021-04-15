//Given the head of a singly linked list, 
//group all the nodes with odd indices together 
//followed by the nodes with even indices, and return the reordered list.


function oddEvenList(head) {
  if(head == null) return null;

  let odd = head;
  let even = head.next;
  let evenHead = even;

  while(even !== null && even.next !== null) {
    odd.next = even.next;
    odd = odd.next;
    even = odd.next;
    even = even.next;
  }

  odd.next = evenHead;
  return head;
}