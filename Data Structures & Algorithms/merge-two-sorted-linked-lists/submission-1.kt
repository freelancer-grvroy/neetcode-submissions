/**
 * Definition for singly-linked list.
 * class ListNode(var `val`: Int) {
 *     var next: ListNode? = null
 * }
 */

class Solution {
    fun mergeTwoLists(list1: ListNode?, list2: ListNode?): ListNode? {
        if(list1 == null && list2 == null) { return null }
        else if (list1 != null && list2 == null) { return list1 }
             else if (list1 == null && list2 != null) { return list2 }
                  else {
                    var ptr1 = list1
                    var ptr2 = list2
                    var list3: ListNode? = null
                    if(list1!!.`val` < list2!!.`val`) {
                        list3 = ListNode(list1!!.`val`)
                        ptr1 = ptr1.next
                    } else {
                        list3 = ListNode(list2!!.`val`) 
                        ptr2 = ptr2.next
                    }
                    var ptr3: ListNode = list3
                    while(ptr1 !== null && ptr2 !== null) {
                        if(ptr1.`val` < ptr2.`val`) {
                            ptr3.next = ListNode(ptr1.`val`)
                            ptr1 = ptr1.next
                        } else {
                            ptr3.next = ListNode(ptr2.`val`)
                            ptr2 = ptr2.next
                        }
                        ptr3 = ptr3.next!!
                    }
                    if(ptr1 === null) {
                        while(ptr2 !== null) {
                            ptr3.next = ListNode(ptr2.`val`)
                            ptr2 = ptr2.next
                            ptr3 = ptr3.next!!
                        }
                    } else {
                        while(ptr1 !== null) {
                            ptr3.next = ListNode(ptr1.`val`)
                            ptr1 = ptr1.next
                            ptr3 = ptr3.next!!
                        }
                    }
                
                  ptr3.next = null
                  return list3
                }
    }
}
