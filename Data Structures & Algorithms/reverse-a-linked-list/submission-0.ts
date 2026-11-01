/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head: ListNode | null): ListNode {
        if(head === null || head.next===null) {return head}
        const stack : ListNode[] = []
        var ptr = head
        while(ptr !== null) {
            stack.push(ptr)
            ptr = ptr.next
        }
        ptr = stack.pop()
        head = ptr
        while(stack.length !== 0) {
            ptr.next = stack.pop()
            ptr = ptr.next
        }
        ptr.next = null
        return head
    }
}
