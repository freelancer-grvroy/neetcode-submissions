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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode {
        if(list1 === null && list2 === null) { return null }
        else if (list1 !== null && list2 === null) { return list1 }
             else if (list1 === null && list2 !== null) { return list2 }
                  else {
                    let ptr1 = list1
                    let ptr2 = list2
                    let list3 = null
                    if(list1.val < list2.val) {
                        list3 = new ListNode(list1.val) 
                        ptr1 = ptr1.next
                    } else {
                        list3 = new ListNode(list2.val) 
                        ptr2 = ptr2.next
                    }
                    let ptr3 = list3
                    while(ptr1 !== null && ptr2 !== null) {
                        if(ptr1.val < ptr2.val) {
                            ptr3.next = new ListNode(ptr1.val)
                            ptr1 = ptr1.next
                        } else {
                            ptr3.next = new ListNode(ptr2.val)
                            ptr2 = ptr2.next
                        }
                        ptr3 = ptr3.next
                    }
                    if(ptr1 === null) {
                        while(ptr2 !== null) {
                            ptr3.next = new ListNode(ptr2.val)
                            ptr2 = ptr2.next
                            ptr3 = ptr3.next
                        }
                    } else {
                        while(ptr1 !== null) {
                            ptr3.next = new ListNode(ptr1.val)
                            ptr1 = ptr1.next
                            ptr3 = ptr3.next
                        }
                    }
                
                  ptr3.next = null
                  return list3
                }
    }
}
