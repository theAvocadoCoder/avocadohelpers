import { beforeAll, describe, it, expect } from "vitest";
import { createElement } from "..";

describe("createElement", () => {

  it("creates an element with a valid tag name", () => {
    const newP = createElement("p", {})
    expect(newP).toBeInstanceOf(HTMLParagraphElement);
  });

  it("creates a custom element", ()=> {
    class TestElement extends HTMLElement {
      constructor () { super(); }
    }

    customElements.define("test-element", TestElement)
    const testElement = createElement("test-element", {})
    expect(testElement).toBeInstanceOf(TestElement);
    expect(testElement).toBeInstanceOf(HTMLElement);
  });

  it("applies given attributes to the element");

  it("appends given children to the element");

  it("applies given styles to the element");
})
