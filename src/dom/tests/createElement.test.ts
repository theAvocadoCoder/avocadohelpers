import { beforeAll, describe, it, expect } from "vitest";
import { createElement } from "..";

describe("createElement", () => {

  it("returns an element with the provided tag", () => {
    const newP = createElement("p", {})
    expect(newP).toBeInstanceOf(HTMLParagraphElement);
  });

  it("works with custom elements", ()=> {
    class TestElement extends HTMLElement {
      constructor () { super(); }
    }
    customElements.define("test-element", TestElement);
    const testElement = createElement("test-element", {});

    expect(testElement).toBeInstanceOf(TestElement);
    expect(testElement).toBeInstanceOf(HTMLElement);
  });

  it("applies given attributes to the element", () => {
    const input = createElement("input", {
      attributes: [
        ["placeholder", "I'm a test input"],
        ["name", "testInput"]
      ]
    });

    expect(input.getAttribute("name")).toBe("testInput");
    expect(input.getAttribute("placeholder")).not.toBe("not the placeholder text");
  });

  it("appends given children to the element", () => {
    const div = createElement("div", {
      children: [
        document.createElement("p"),
        document.createTextNode("Text Child")
      ]
    });

    expect(div.firstChild).toBeInstanceOf(HTMLParagraphElement);
    expect(div.textContent?.includes("Text Child")).toBeTruthy();
  });

  it("applies given styles to the element", () => {
    const styledP = createElement("p", {
      styles: { color: "red"}
    })

    expect(getComputedStyle(styledP).color).toBe("rgb(255, 0, 0)");
  });
})
