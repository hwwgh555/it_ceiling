function Stack() {
  let arr = [];

  this.push = function (element) {
    return arr.push(element)
  }

  this.pop = function () {
    return arr.pop();
  }

  this.peek = function () {
    return arr[arr.length - 1];
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

export default Stack