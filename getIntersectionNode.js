/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    var lenA = 0, lenB = 0;
    var cA = headA, cB = headB;
    while(cA != null) {
        cA = cA.next;
        lenA++;
    }
    while(cB != null) {
        cB = cB.next;
        lenB++;
    }
    cA = headA;
    cB = headB;
    if(lenA > lenB) {
        for(var i = 0; i < lenA - lenB; i++)
            cA = cA.next;
    } else {
        for(var i = 0; i < lenB - lenA; i++)
            cB = cB.next;
    }
    while(cA != cB) {
        cA = cA.next;
        cB = cB.next;
    }
    return cA;
};