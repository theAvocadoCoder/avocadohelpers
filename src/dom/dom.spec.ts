import { beforeAll, describe, it, expect } from "vitest";
import { addClass, getIds, IterableElements, removeClass, style } from ".";

describe("getIds", () => {
  beforeAll(() => {
    for (let i = 1; i <= 3; i++) {
      const p = document.createElement("p");
      p.id = `p-tag-${i}`;
  
      document.body.appendChild(p);
    }
  })

  it("gets a single id", () => {
    const [pTag] = getIds("p-tag-1");
    expect(pTag).toBeInstanceOf(HTMLParagraphElement);
  })

  it("gets multiple ids", () => {
    const [pTag1, pTag2, pTag3] = getIds("p-tag-1", "p-tag-2", "p-tag-3");
    expect(pTag1).toBeInstanceOf(HTMLParagraphElement);
    expect(pTag2).toBeInstanceOf(HTMLParagraphElement);
    expect(pTag3).toBeInstanceOf(HTMLParagraphElement);
  })
})

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
    let theRules = Array.from(styleElement.sheet?.cssRules as CSSRuleList);
    expect(theRules[1]["style"].width).toBe("200px");
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

describe("addClass", () => {
  let theDivs: IterableElements;

  beforeAll(() => {
    for (let i = 0; i < 3; i++) {
      const div = document.createElement("div");
      document.body.appendChild(div);
    }
  })

  it("adds a class to each element in an array of elements", () => {
    theDivs = Array.from(document.getElementsByTagName("div") as HTMLCollectionOf<HTMLDivElement>);
    addClass("array-class", theDivs);
    
    expect(theDivs[0].classList).toContain("array-class");
  });

  it("adds a class to each element in a HTML collection", () => {
    theDivs = document.getElementsByTagName("div") as HTMLCollectionOf<HTMLDivElement>;
    addClass("collection-class", theDivs);
    
    expect(theDivs[0].classList).toContain("collection-class");
  });

  it("adds a class to each element in a node list of HTML elements", () => {
    theDivs = document.querySelectorAll("div") as NodeListOf<HTMLDivElement>;
    addClass("node-list-class", theDivs);
    
    expect(theDivs[0].classList).toContain("node-list-class");
  });
})

describe("removeClass", () => {
  let theDivs: IterableElements;

  beforeAll(() => {
    for (let i = 0; i < 3; i++) {
      const div = document.createElement("div");
      div.classList.add("array-class", "collection-class", "node-list-class");
      document.body.appendChild(div);
    }
  })

  it("removes a class from each element in an array of elements", () => {
    theDivs = Array.from(document.getElementsByTagName("div") as HTMLCollectionOf<HTMLDivElement>);
    removeClass("array-class", theDivs);

    expect(theDivs[0].classList).not.toContain("array-class");
  });

  it("removes a class from each element in a HTML collection", () => {
    theDivs = document.getElementsByTagName("div") as HTMLCollectionOf<HTMLDivElement>;
    removeClass("collection-class", theDivs);

    expect(theDivs[0].classList).not.toContain("collection-class");
  });

  it("removes a class from each element in a node list of HTML elements", () => {
    theDivs = document.querySelectorAll("div") as NodeListOf<HTMLDivElement>;
    removeClass("node-list-class", theDivs);

    expect(theDivs[0].classList).not.toContain("node-list-class");
  });
})

describe("createElement", () => {})
