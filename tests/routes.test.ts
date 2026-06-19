import { access, readFile } from "node:fs/promises";
import { describe, expect, it } from "vitest";

const routes = [
  ["project.astro", "A multilingual future for scientific knowledge"],
  ["research.astro", "A connected research pipeline"],
  ["outputs.astro", "Open outputs, published as the project advances"],
  ["news/index.astro", "Project news and progress"],
  ["consortium.astro", "Five partners, one integrated research programme"],
  ["resources.astro", "Open tools and project resources"],
  ["404.astro", "This page has not passed through the prism"],
] as const;

describe("public routes", () => {
  it.each(routes)("provides %s with a specific heading", async (file, heading) => {
    const url = new URL(`../src/pages/${file}`, import.meta.url);
    await expect(access(url)).resolves.toBeUndefined();
    const source = await readFile(url, "utf8");
    expect(source).toContain(heading);
    expect(source).toContain("<BaseLayout");
  });
});
