import Queue from "../Queue";

describe("Queue Test", () => {
  test("enqueue", () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.front()).toBe(1);
  })

  test("dequeue", () => {
    const queue = new Queue();

    expect(queue.dequeue()).toBe(false);
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.dequeue();
    queue.dequeue();
    expect(queue.front()).toBe(3);
  })

  test("front", () => {
    const queue = new Queue();
    queue.enqueue(1);
    expect(queue.front()).toBe(1);
    queue.enqueue(2);
    expect(queue.front()).toBe(2);
    queue.dequeue();
    expect(queue.front()).toBe(2);
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
    queue.pop();
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