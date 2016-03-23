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
var detectCycle = function(head) {
    var p = head;
    var c = head;
    while(c != null && c.next != null) {
        p = p.next;
        c = c.next.next;
        if(p == c) break;
    }
    if(c == null || c.next == null) return null;
    c = head;
    while(c != p) {
        p = p.next;
        c = c.next;
    }
    return p;
};