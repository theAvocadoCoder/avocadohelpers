import { beforeAll, describe, it, expect } from "vitest";
import { style } from "..";

describe("style", () => {
  let theDiv: HTMLDivElement;
  let styleElement: HTMLStyleElement;

  beforeAll(() => {
    const div = document.createElement("div");
    div.id = "divvy";

    document.body.appendChild(div);
    theDiv = document.getElementById("divvy") as HTMLDivElement;
  });
  
  it("creates a style style element and returns its id", () => {
    styleElement = document.getElementById(style(theDiv, {}) as string) as HTMLStyleElement;
    expect(styleElement.id).toBe("div__divvy");
    expect(document.getElementById("div__divvy")).toBeInstanceOf(HTMLStyleElement);
  });
  
  it("styles the element with the provided style object", () => {
    style(theDiv, {color: "red"});
    expect(window.getComputedStyle(theDiv).color).toEqual("rgb(255, 0, 0)");
  });

  it("records the style in the provided stylesheet", () => {
    style(theDiv, {width: "200px"}, styleElement.sheet);
    let theRules = Array.from(styleElement.sheet?.cssRules!) as CSSStyleRule[];
    expect(theRules[1]?.style.width).toBe("200px");
  });

  it("styles multiple elements when an array is sent", () => {
    for (let i = 0; i < 3; i++) {
      const div = document.createElement("div");
      div.classList.add("multi-div");
      document.body.append(div);
    }

    const divs: HTMLElement[] = Array.from(document.querySelectorAll(".multi-div"));

    style(divs, { display: "flex" });
    expect(window.getComputedStyle(divs[1]).display).toBe("flex");
  });

  it("styles multiple elements when a HTML Collection is sent", () => {
    for (let i = 0; i < 3; i++) {
      const div = document.createElement("div");
      div.classList.add("multi-div");
      document.body.append(div);
    }

    const divs = document.getElementsByClassName("multi-div");

    style(divs, { display: "flex" });
    expect(window.getComputedStyle(divs[1]).display).toBe("flex");
  });

  it("styles multiple elements when a NodeList is sent", () => {
    for (let i = 0; i < 3; i++) {
      const div = document.createElement("div");
      div.classList.add("multi-div");
      document.body.append(div);
    }

    const divs = document.querySelectorAll<HTMLElement>(".multi-div");

    style(divs, { cursor: "pointer" });
    expect(window.getComputedStyle(divs[2]).cursor).toBe("pointer");
  })

})
