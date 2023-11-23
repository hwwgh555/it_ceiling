import Stack from "../statck";

describe("Stack Test", () => {
  test("push", () => {
    const stack = new Stack();
    expect(stack.push(1)).toBe(stack.size());
    expect(stack.peek()).toBe(1);
    expect(stack.push(2)).toBe(stack.size());
  })

  test("pop", () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack.pop()).toBe(3);
    expect(stack.pop()).toBe(2);
  })

  test("peek", () => {
    const stack = new Stack();
    stack.push(1);
    expect(stack.peek()).toBe(1);
    stack.push(2);
    expect(stack.peek()).toBe(2);
    stack.pop();
    expect(stack.peek()).toBe(1);
  })

  test("size", () => {
    const stack = new Stack();
    expect(stack.size()).toBe(0);
    stack.push(1);
    stack.push(1);
    expect(stack.size()).toBe(2);
  })

  test("isEmpty", () => {
    const stack = new Stack();
    expect(stack.isEmpty()).toBe(true);
    stack.push(1);
    expect(stack.isEmpty()).toBe(false);
    stack.pop();
    expect(stack.isEmpty()).toBe(true);
  })

  test("clear", () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(1);
    expect(stack.size()).toBe(2);
    expect(stack.clear()).toBe(true);
    expect(stack.size()).toBe(0);
  })
})