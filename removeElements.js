/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    // while(head != null && head.val == val) {
    //      head = head.next;
    // }
    // if (head == null) return null;
    // var c = head.next;
    // var p = head;
    // while(c != null) {
    //     if(c.val == val) {
    //         p.next = c.next;
    //     } else {
    //         p = c;
    //     }
    //     c = c.next;
    // }
    // return head;
    if (head == null) return null;
    var dummy = new ListNode(1);
    dummy.next = head;
    c = dummy;
    while (c.next) {
        if (c.next.val == val) {
            c.next = c.next.next;
        } else {
            c = c.next;
        }    
    }
    return dummy.next;
};