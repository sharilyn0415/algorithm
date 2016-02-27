/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    var p = null;
    var c = head;
    while(c != null) {
       var next = c.next;
        c.next = p;
        p = c;
        c = next; 
    }
    return p;
};