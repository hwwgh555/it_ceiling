import LinkedList from "../LinkedNode";

test("new LinkedList()", () => {
  const properties = [
    "append",
    "insert",
    "removeAt",
    "remove",
    "indexOf",
    "getHead",
    "size",
    "isEmpty",
    "toString",
    "print",
  ];

  const o = new LinkedList();
  properties.forEach(p => {
    expect(o).toHaveProperty(p);
  })
});

test("LinkedList append", () => {
  const o = new LinkedList();
  expect(o.print()).toBe(null);
  o.append(1);
  expect(o.print()).toBe("1");
  o.append(2);
  expect(o.print()).toBe("1 -> 2");
  o.append(3);
  expect(o.print()).toBe("1 -> 2 -> 3");
});

test("LinkedList insert", () => {
  const o = new LinkedList();
  // 越界
  // 最小值
  expect(o.insert(-1, 1)).toBe(false);
  expect(o.print()).toBe(null);

  // 超出长度
  expect(o.print()).toBe(null);
  expect(o.insert(1, 1)).toBe(false);
  expect(o.print()).toBe(null);


  // 首位置插入
  expect(o.insert(0, 1)).toBe(true);
  expect(o.print()).toBe("1");

  expect(o.insert(0, 2)).toBe(true);
  expect(o.print()).toBe("2 -> 1");

  // 中间位置插入
  expect(o.insert(1, 1.5)).toBe(true);
  expect(o.print()).toBe("2 -> 1.5 -> 1");

  expect(o.insert(1, 1.8)).toBe(true);
  expect(o.print()).toBe("2 -> 1.8 -> 1.5 -> 1");

  // 末位插入
  expect(o.size()).toBe(4);
  o.insert(4, 4);
  expect(o.print()).toBe("2 -> 1.8 -> 1.5 -> 1 -> 4");

  // 越界
  expect(o.insert(100, 100)).toBe(false);
  expect(o.print()).toBe("2 -> 1.8 -> 1.5 -> 1 -> 4");
});


test("LinkedList remove", () => {
  const o = new LinkedList();
  expect(o.remove('x')).toBe(false);

  o.append(1);
  expect(o.remove('x')).toBe(false);

  expect(o.remove(1)).toBe(true);
  expect(o.print()).toBe(null);

  o.append(1);
  o.append(2);
  o.append(3);
  o.append(4);
  o.append(5);
  expect(o.remove(1)).toBe(true);
  expect(o.print()).toBe('2 -> 3 -> 4 -> 5');
  expect(o.remove(5)).toBe(true);
  expect(o.print()).toBe('2 -> 3 -> 4');
  expect(o.remove(3)).toBe(true);
  expect(o.print()).toBe('2 -> 4');
});

test("LinkedList removeAt", () => {
  const o = new LinkedList();
  expect(o.removeAt(-1)).toBe(false);

  o.append(1);
  expect(o.removeAt(1)).toBe(false);
  expect(o.removeAt(0)).toBe(true);
  expect(o.print()).toBe(null);

  o.append(1);
  o.append(2);
  o.append(3);
  o.append(4);
  o.append(5);
  expect(o.removeAt(0)).toBe(true);
  expect(o.print()).toBe('2 -> 3 -> 4 -> 5');
  expect(o.removeAt(3)).toBe(true);
  expect(o.print()).toBe('2 -> 3 -> 4');
  expect(o.removeAt(1)).toBe(true);
  expect(o.print()).toBe('2 -> 4');
});

test("LinkedNode indexOf", () => {
  const o = new LinkedList();
  const hww = {
    name: 'hww',
  };
  expect(o.indexOf(1)).toBe(-1);
  expect(o.indexOf({name: 'hww'})).toBe(-1);
  o.append(1);
  o.append(hww);
  o.append(3);
  expect(o.indexOf(1)).toBe(0);
  o.append(hww);
  expect(o.indexOf({name: 'hww'})).toBe(-1);
  expect(o.indexOf(hww)).toBe(1);
  expect(o.indexOf(3)).toBe(2);
  expect(o.indexOf(100)).toBe(-1);
});

test("LinkedList getHead", () => {
  const o = new LinkedList();
  expect(o.getHead()).toBe(null);

  o.append(1);
  expect(o.getHead()).toEqual({element: 1, next: null});

  o.insert(0, 100);
  expect(o.getHead()).toEqual({element: 100, next: {element: 1, next: null}});
})

test("LinkedList size", () => {
  const o = new LinkedList();
  expect(o.size()).toBe(0);

  o.append(1);
  o.append(1);
  o.append(1);
  o.append(1);
  o.append(1);
  expect(o.size()).toBe(5);

  o.removeAt(1);
  o.removeAt(1);
  o.removeAt(1);
  o.removeAt(1);
  expect(o.size()).toBe(1);
})

test("LinkedList isEmpty", () => {
  const o = new LinkedList();
  expect(o.isEmpty()).toBe(true);

  o.append(1);
  o.append(2);
  o.append(3);
  o.append(4);
  o.append(5);
  expect(o.isEmpty()).toBe(false);

  o.removeAt(1);
  o.remove(5);
  expect(o.isEmpty()).toBe(false);
})
