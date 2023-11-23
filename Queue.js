function Queue() {
  let arr = [];
  this.enqueue = function (element) {
    return arr.push(element);
  }

  this.dequeue = function() {
    if (arr.length === 0) return false;
    return arr.shift();
  }

  this.front = function() {
    return arr[0];
  }

  this.size = function () {
    return arr.length;
  }

  this.isEmpty = function() {
    return arr.length === 0;
  }

  this.clear = function () {
    arr = []
    return true;
  }
}

// 唯一不同，添加Priority，最小优先队列（priority越小越靠前）
function QueueWithPriority() {
  let arr = [];
  function QueueElement(element, priority) {
    this.element = element;
    this.priority = priority;
  }

  this.enqueue = function (element, priority) {
    const qe = new QueueElement(element, priority);
    if (priority === undefined) {
      return arr.push(qe);
    }
    let added = false;
    for (let i = 0; i < arr.length; i++) {
      if(arr[i]?.priority === undefined || qe.priority < arr[i]?.priority ) {
        arr.splice(i, 0, qe);
        return arr.length;
      }
    }
    if (!added) {
      return arr.push(qe);
    }
  }

  this.dequeue = function() {
    if (arr.length === 0) return false;
    return arr.shift();
  }

  this.front = function() {
    return arr[0];
  }

  this.size = function () {
    return arr.length;
  }

  this.isEmpty = function() {
    return arr.length === 0;
  }

  this.clear = function () {
    arr = []
    return true;
  }
}

export {
  Queue as default,
  QueueWithPriority
}