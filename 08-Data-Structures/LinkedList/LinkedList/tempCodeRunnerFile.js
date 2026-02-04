    if (!curr.next && carry) {
      curr.next = new ListNode(carry);
      carry = 0;
    }
