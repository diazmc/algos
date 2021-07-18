//Given a pointer to the head of a linked list and a specific position, determine the data value at that position.
//Count backwards from the tail node. The tail is at postion 0, its parent is at 1 and so on.
 
function getNode(head, position) {
  let current = head;
  let runner = head;
  let count = 0;

  while(count < position) {
    runner = runner.next;
    count++;
  }

  while(runner.next) {
    current = current.next;
    runner = runner.next;
  }

  return current.data;

}
