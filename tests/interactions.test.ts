import { readFile } from "node:fs/promises";
import { describe, expect, it } from "vitest";

const read = (path: string) => readFile(new URL(path, import.meta.url), "utf8");

describe("site interactions", () => {
  it("supports mobile menu state and Escape dismissal", async () => {
    const script = await read("../src/scripts/site.ts");

    expect(script).toContain('setAttribute("aria-expanded"');
    expect(script).toContain('event.key === "Escape"');
    expect(script).toContain('document.body.classList.remove("menu-open")');
  });

  it("reveals content without continuous scroll listeners", async () => {
    const script = await read("../src/scripts/site.ts");

    expect(script).toContain("IntersectionObserver");
    expect(script).not.toContain('addEventListener("scroll"');
    expect(script).toContain("prefers-reduced-motion: reduce");
  });
});
