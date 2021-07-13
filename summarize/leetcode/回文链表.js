function ListNode (val) {
  this.val = val;
  this.next = null;
}

var isPalindrome = function(head) {
  let left = head;
  function traverse(right) {
      if (right == null) return true;
      let res = traverse(right.next);
      res = res && (right.val === left.val);
      console.log(right.val , left.val)
      left = left.next;
      return res;
  }
  return traverse(head);
};

console.log(isPalindrome([1,2,3,3,2,1,1]))