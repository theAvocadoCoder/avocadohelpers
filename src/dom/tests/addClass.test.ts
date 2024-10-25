import { beforeAll, describe, it, expect } from "vitest";
import { addClass, IterableElements } from "..";

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
