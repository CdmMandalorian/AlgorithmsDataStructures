//  Given head, of a linked lists, determine if the linked list has a cycle in it   //

//  There is a cycle in a linked list if there is some node in the list that can be reached again by continuously folliwing the next pointer    //

//  Internally, pos is used to denote the index of the node that tail's next pointer is connected to    //

//  Note that pos is not passed as a parameter  //

//  Return true if there is a cycle in the linked list. Otherwise, return false //

//  Example 1:

//  [3] => [2] => [0] =>  [-4]
//           ^================

//  Input:  head = [3, 2, 0, -4] pos = 1    //
//  Output: true    //
//  Explanation:    There is a cycle in the linked list, where the tail connects to the 1st node (0 - indexed)  //

//  Input:  head = [1, 2] pos = 0
//  Output: true
//  Explanation:    There is a cycle in the linked list, where the tail connects to the 0th node    //

//  Input:  head = [1], pos =-1
//  Output: false
//  Explanation:    There is no cycle in the linked list    //

//  Constraints:    //
//  - The number of the nodes in the list is in the range [0, 10⁴]   //
//  - -10⁵ <= Node.val <= 10⁵   //
//  - pos is -1 or a valid index in the linked-list //

//  Solution:   //

var hasCycle = function(head) {
    if(!head) {
        return false;
    }
    let hare = head;
    let tortoise = head;
    while(hare) {
        if(!hare.next) {
            return false;
        } else {
            hare = hare.next.next;
            tortoise = tortoise.next;
        }
        if(tortoise == hare) {
            return true;
        }
    }
    return false;
};