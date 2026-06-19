import { readFile } from "node:fs/promises";
import { describe, expect, it } from "vitest";

const read = (path: string) => readFile(new URL(path, import.meta.url), "utf8");

describe("home page", () => {
  it("states the project purpose without presenting planned work as completed", async () => {
    const page = await read("../src/pages/index.astro");

    expect(page).toContain("Science should travel across languages");
    expect(page).toContain("TaMTAS is building");
    expect(page).toContain("<PrismHero");
  });

  it("contains the complete project narrative", async () => {
    const page = await read("../src/pages/index.astro");

    expect(page).toContain("<ProjectStats");
    expect(page).toContain("<ResearchPipeline");
    expect(page).toContain("<LanguageField");
    expect(page).toContain("<PartnerGrid");
    expect(page).toContain("Open foundations");
  });

  it("uses the brand prism as a meaningful visual", async () => {
    const hero = await read("../src/components/PrismHero.astro");

    expect(hero).toContain("/brand/tamtas-logo-mark.svg");
    expect(hero).toContain("Complex scientific document");
    expect(hero).toContain("Clearer scientific communication");
    expect(hero).toContain('aria-hidden="true"');
  });
});
