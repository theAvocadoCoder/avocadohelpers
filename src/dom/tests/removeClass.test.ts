import { beforeAll, describe, it, expect } from "vitest";
import { IterableElements, removeClass } from "..";

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
