import { describe, expect, it } from "vitest";
import { convertCase } from "../index";

describe("convertCase - basic", () => {
  it("accepts a string and the target case and returns a string", () => {
    expect(convertCase("yes ma'am", "pascal")).toBe("YesMa'am");
  });

  it("accepts an optional string or regex parameter, 'separator'", () => {
    expect(convertCase("dyno%dog%is%here", "pascal", "%")).toBe("DynoDogIsHere");
  });

  it("sanitizes the separator", () => {
    expect(convertCase("anybody$&can$&be$&a$&star", "kebab", "$&")).toBe("anybody-can-be-a-star")
  });
});

describe("convertCase - variable cases", () => {
  it("converts to camel case", () => {
    expect(convertCase("haLlEluJa aMen", "camel")).toBe("hallelujaAmen");
    
  });
  
  it("converts to pascal case", () => {
    expect(convertCase("haLLelUja amEN", "pascal")).toBe("HallelujaAmen");
    
  });
  
  it("converts to snake case", () => {
    expect(convertCase("HalLEluJa AmEn", "snake")).toBe("halleluja_amen");
    
  });
  
  it("converts to screaming snake case", () => {
    expect(convertCase("hALLelujA amen", "screamingSnake")).toBe("HALLELUJA_AMEN");
  });
  
  it("converts to kebab case", () => {
    expect(convertCase("HALLelujA aMEn", "kebab")).toBe("halleluja-amen");
    
  });
});

describe("convertCase - text cases", () => {
  it("converts to sentence case", () => {
    expect(convertCase("hallEluJa AMen", "sentence")).toBe("Halleluja amen");
  });

  it("converts to title case", () => {
    expect(convertCase("hALleluja aMen", "title")).toBe("Halleluja Amen");
  });

  it("converts to inverted title case", () => {
    expect(convertCase("HaLLeluja amen", "invertedTitle")).toBe("hALLELUJA aMEN");
  });

})
