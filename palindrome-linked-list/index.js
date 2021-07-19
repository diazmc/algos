// Given the head of a singly linked list,
// return true if it is a palindrome.


function isPalindrome(head) {
    let palindrome = [];
    let current = head;
    
    while(current) {
        palindrome.push(current.val);
        current = current.next;
    }
    
    let middle = Math.floor(palindrome.length);
    
    for(let i = 0; i < middle; i++) {
        if(palindrome[i] != palindrome[palindrome.length - 1 - i]) {
            return false;
        }
    }
    
    return true;
};