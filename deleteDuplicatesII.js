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
    var dummy = new ListNode(0);
    dummy.next = head;
    var p = dummy;
    var c = head;
    while(c != null){
        while(c.next != null && c.val == c.next.val){
            c = c.next;
        }
        if(p.next == c){
            p = p.next;
        }
        else{
            p.next = c.next;
        }
        c = c.next;
    }
    return dummy.next;
};