/*
	Date : 2021-04-15
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = (l1, l2) => {
  let a = l1;
  let b = l2;

  let upper = 0;
  let output;

  while (a || b) {
    const sum = (a ? a.val : 0) + (b ? b.val : 0) + upper;
    let num = sum % 10;
    if (!output) {
      output = new ListNode(num);
    } else {
      output.add(num);
    }

    if (sum >= 10) {
      upper = 1;
    } else {
      upper = 0;
    }
    a = a ? a.next : null;
    b = b ? b.next : null;
  }

  if (upper) {
    output.add(upper);
  }

  return output;
};

ListNode.prototype.add = function (value) {
  const addNode = new ListNode(value);
  let current = this;
  while (current.next) {
    current = current.next;
  }
  current.next = addNode;

  return addNode;
};
