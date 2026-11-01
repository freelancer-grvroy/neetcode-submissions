/**
 * Definition for singly-linked list.
 * class ListNode {
 *     var val: Int
 *     var next: ListNode?
 *     init(_ val: Int) {
 *         self.val = val
 *         self.next = nil
 *     }
 * }
 */

class Solution {
    func mergeTwoLists(_ list1: ListNode?, _ list2: ListNode?) -> ListNode? {
        if(list1 == nil && list2 == nil) { return nil }
        else if (list1 != nil && list2 == nil) { return list1 }
             else if (list1 == nil && list2 != nil) { return list2 }
                  else {
                    var ptr1 = list1
                    var ptr2 = list2
                    var list3 : ListNode? = nil
                    if(list1!.val < list2!.val) {
                        list3 = ListNode(list1!.val) 
                        ptr1 = ptr1!.next
                    } else {
                        list3 = ListNode(list2!.val) 
                        ptr2 = ptr2!.next
                    }
                    var ptr3 = list3
                    while(ptr1 != nil && ptr2 != nil) {
                        if(ptr1!.val < ptr2!.val) {
                            ptr3!.next = ListNode(ptr1!.val)
                            ptr1 = ptr1!.next
                        } else {
                            ptr3!.next = ListNode(ptr2!.val)
                            ptr2 = ptr2!.next
                        }
                        ptr3 = ptr3!.next
                    }
                    if(ptr1 == nil) {
                        while(ptr2 != nil) {
                            ptr3!.next = ListNode(ptr2!.val)
                            ptr2 = ptr2!.next
                            ptr3 = ptr3!.next
                        }
                    } else {
                        while(ptr1 !== nil) {
                            ptr3!.next = ListNode(ptr1!.val)
                            ptr1 = ptr1!.next
                            ptr3 = ptr3!.next
                        }
                    }
                
                  ptr3!.next = nil
                  return list3
                }
    }
}
