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
var deleteDuplicates = function(head) {
    if(head == null) return null;
    var p = head;
    var c = head.next;
    while(c != null) {
       if(p.val == c.val) {
            p.next = c.next
            c = c.next;
       } else {
           p = p.next;
           c = c.next
       }
    }
    return head;
};