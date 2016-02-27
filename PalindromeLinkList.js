/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    if(head === null) return true;
    if(head.next === null) return true;

    var s = head;
    var f = head;
    var l = head;
    var r;

    while(f && f.next) {
        s = s.next;
        f = f.next.next;
    }

    r = reverse(s);

    while(r) {
        if(r.val != l.val) return false;
        l = l.next ? l.next : null;
        r = r.next ? r.next : null;
    }
    return true;
 };

 var reverse = function(head) {
    var p = null, c = head;
    while(c != null) {
        var n = c.next;
        c.next = p;
        p = c;
        c = n;
    }
    return p;
}