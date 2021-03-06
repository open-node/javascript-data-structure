// ListNode (Lined list)

/**
 * ListNode 类
 * @class
 * @param {Anyone} [e] 初始数组
 * @return {ListNode} Instance
 */
class ListNode {
  /** Create a listNode instance */
  constructor(e) {
    this.data = e;
    this.pred = null;
    this.succ = null;
  }

  /**
   * 将 元素 e 作为当前节点的直接后继插入
   * @param {Anyone} e
   *
   * @return {ListNode}
   */
  // A <--> B  插入 C;   A <--> C <--> B
  insertAsSucc(e) {
    const A = this;
    const C = new ListNode(e);
    const B = this.succ;

    A.succ = C;
    C.succ = B;
    B.pred = C;
    C.pred = A;

    return C;
  }

  /**
   * 将 元素 e 作为当前节点的直接前驱插入
   * @param {Anyone} e
   *
   * @return {ListNode}
   */
  // B <--> A  插入 C;   B <--> C <--> A
  insertAsPred(e) {
    const B = this.pred;
    const C = new ListNode(e);
    const A = this;

    B.succ = C;
    C.succ = A;
    A.pred = C;
    C.pred = B;

    return C;
  }
}

module.exports = ListNode;
