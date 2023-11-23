import  { QueueWithPriority as Queue } from "../Queue";

describe("QueueWithPriority Test", () => {
  test("enqueue", () => {
    const queue = new Queue();
    const ez = 'hwwNoPriority';
    queue.enqueue(ez);
    expect(queue.front()).toEqual({element: ez, priority: undefined });

    const e1 = 'hww1';
    queue.enqueue(e1, 1);
    expect(queue.front()).toEqual({element: e1, priority: 1 });

    const e11 = 'hww11';
    queue.enqueue(e11, 1);
    expect(queue.front()).toEqual({element: e1, priority: 1 });

    const e01 = 'hww01';
    queue.enqueue(e01, 0);
    expect(queue.front()).toEqual({element: e01, priority: 0 });

    const e100 = 'hww100';
    queue.enqueue(e100, 100);
    expect(queue.front()).toEqual({element: e01, priority: 0 });
  })

  test("dequeue", () => {
    const queue = new Queue();

    expect(queue.dequeue()).toBe(false);
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.dequeue();
    queue.dequeue();
    expect(queue.front()).toEqual({element: 3, priority: undefined});
  })

  test("front", () => {
    const queue = new Queue();
    queue.enqueue(1);
    expect(queue.front()).toEqual({element: 1, priority: undefined});
    queue.enqueue(2);
    expect(queue.front()).toEqual({element: 1, priority: undefined});
    queue.dequeue();
    expect(queue.front()).toEqual({element: 2, priority: undefined});
  })

  test("size", () => {
    const queue = new Queue();
    expect(queue.size()).toBe(0);
    queue.enqueue(1);
    queue.enqueue(1);
    expect(queue.size()).toBe(2);
  })

  test("isEmpty", () => {
    const queue = new Queue();
    expect(queue.isEmpty()).toBe(true);
    queue.enqueue(1);
    expect(queue.isEmpty()).toBe(false);
    queue.dequeue();
    expect(queue.isEmpty()).toBe(true);
  })

  test("clear", () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(1);
    expect(queue.size()).toBe(2);
    expect(queue.clear()).toBe(true);
    expect(queue.size()).toBe(0);
  })
})