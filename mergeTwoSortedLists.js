// Your are given the heads of two sorted linked lists lists1 and lists2 //

// Merge the two lists ina one sorted lists. The List should be made by splicing together the nodes of the firsts two lists //

// Return the head of the merged linked list //

// Example :

//  1   =>  2   =>  4
//  1   =>  3   =>  4
//  --------------------
//  1  =>  1  =>  2  =>  3  =>  4  =>  4

//  Input:  list1 = [1, 2, 4], list2 = [1, 3, 4]   //
//  Output:[1, 1, 2, 3, 4, 4]   //

//  Input: list1 = [], lists2 = []  //
//  Output: []  //

//  Input: list1 = [], lists2 = [0]  //
//  Output: [0] //

//  Constraints:
//  - The number of nodes in both lists is in the range [0, 50]
//  - -100 <= Node.val <= 100
//  - Both list1 and list2 are sorted in non-decreasing order

//  Solution:   //

    var mergeTwoLists = function(list1, list2) {
        if (!list1 && !list2) return null;
        
        let head, current;
        let lhead = list1, rhead = list2;
        
        while (lhead || rhead) {
            if (!head) {
                if (lhead && rhead) {
                    if (lhead.val <= rhead.val) {
                        head = lhead;
                        current = lhead;
                        lhead = lhead.next;
                    } else {
                        head = rhead;
                        current = rhead;
                        rhead = rhead.next;
                    }
                } else if (lhead) {
                    head = lhead;
                    current = lhead;
                    lhead = lhead.next;
                } else {
                    head = rhead;
                    current = rhead;
                    rhead = rhead.next;
                }
            } else if (lhead && rhead) {
                if (lhead.val <= rhead.val) {
                    current.next = lhead;
                    current = lhead;
                    lhead = lhead.next;
                } else {
                    current.next = rhead;
                    current = rhead;
                    rhead = rhead.next;
                }
            } else if (lhead) {
                current.next = lhead;
                current = lhead;
                lhead = lhead.next;
            } else {
                current.next = rhead;
                current = rhead;
                rhead = rhead.next;
            }
        }
        
        return head;
    }; 