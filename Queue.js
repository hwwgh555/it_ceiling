function Queue() {
  let arr = [];
  this.enqueue = function (element) {
    return arr.push(element);
  }

  this.dequeue = function() {
    if (arr.length === 0) return true;
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