/* 包括方法
* 添加
  * append
  * insert(position, element)
* 删除
  * removeAt(position)
  * remove(element)
* 查找
  * indexOf(element)
  * getHead()
  * size()
  * isEmpty()
  * toString()
  * print()
*/

function LinkedList(element) {
  function Node(element) {
    this.element = element;
    this.next = null;
  }

  let head = null;
  let length = 0;

  // add
  this.append = function(element) {
    // 默认返回值是什么？
    if (head === null) {
      head = new Node(element)
    } else {
      let cur = head;
      while(cur.next) {
        cur = cur.next;
      };
      cur.next = new Node(element);
    }
    length++;
    return true;
  };

  this.insert = function(position, element) {
    if (position < 0 || position > length) {
      return false;
    }
    if (position === 0) {
      const newNode = new Node(element);
      if (head) {
        newNode.next = head;
        // 这里注意还需要维护head的指向
        head = newNode;
      } else {
        head = newNode;
      }
    } else {
      /*
       在端点时，无法确定是否准确 TODO:
       如何回忆临界值的处理？
      */
      let prev = head; // 添加上这个因素后，还是不清晰 TODO:
      // 是什么导致变得不清晰的？
      // 这里，只考虑循环次数
      for(let i = 1; i <= position - 1; i++) {
        prev = prev.next;
      }
      const newNode = new Node(element);
      newNode.next = prev.next;
      prev.next = newNode;
    }
    length++;
    return true
  };


  // remove
  this.remove = function(element) {
    let pre = null;
    let target = head;

    while(target) {
      if (target.element === element) {
        break;
      }
      pre = target;
      target = target.next;
    }

    if (!target) return false;

    if(pre === null) {
      head = head.next;
      return true;
    }
    pre.next = target.next;

    return true;
  }

  this.removeAt = function(position){
    if (position < 0 || position > length - 1) {
      return false;
    }
    let target = head;
    let prev = null;
    while(position--) {
      prev = target;
      target = target.next;
    }

    length--;
    if (target === head) {
      head = head.next;
      return true;
    }
    prev.next = target.next;
    return true;
  };

  // get
  this.indexOf = function(element) {
    let index = -1;
    let cur = head;
    // 区分是自然结束，还是找到结束？
    while(cur) {
      index++;
      if (cur.element === element) {
        // console.log('target::', element)
        return index;
      }
      cur = cur.next;
    }
    if(!cur) {
      return -1;
    }
    return index;
  };

  this.getHead = function(element) {
    return head;
  };

  this.size = function() {
    return length;
  };


  this.isEmpty = function() {
    return length === 0;
  };

  this.toString = function() {
    return this.print();
  };

  this.print = function() {
    if (!head) return null;
    let str = '';

    let cur = head;
    while(cur) {
      str += JSON.stringify(cur.element) + " -> ";
      cur = cur.next;
    }
    return str.slice(0, -4);
  };
}

// 添加测试库进行测试
// 测试用例
/*
插入测试：
尾部
1. 无head
2. 有head

任意位置插入
1. <0
2. >链表元素总数
2.1 >链表元素总数 + 1
3. =链表元素总数
4. <链表元素总数
*/

export default LinkedList;
