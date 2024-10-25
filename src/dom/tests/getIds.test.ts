import { beforeAll, describe, it, expect } from "vitest";
import { getIds } from "..";

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
