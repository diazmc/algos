//Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect. 
//If the two linked lists have no intersection at all, return null.

function getIntersectionNode(headA, headB) {
  if(headA == null || headB == null) return null;

  let currentA = headA;
  let currentB = headB;

  while(currentA !== currentB) {
    if(currentA == null) {
      currentA = headB;
    } else {
      currentA = currentA.next;
    }

    if(currentB == null) {
      currentB = headA;
    } else {
      currentB = currentB.next;
    }
   }

   return currentA;
}