import { readFile } from "node:fs/promises";
import { describe, expect, it } from "vitest";

const read = (path: string) => readFile(new URL(path, import.meta.url), "utf8");

describe("global layout", () => {
  it("provides semantic navigation and a skip link", async () => {
    const layout = await read("../src/layouts/BaseLayout.astro");
    const header = await read("../src/components/Header.astro");

    expect(layout).toContain('href="#main-content"');
    expect(layout).toContain("<Header");
    expect(layout).toContain("<Footer");
    expect(header).toContain('aria-label="Primary navigation"');
    expect(header).toContain('aria-expanded="false"');
  });

  it("defines the approved visual tokens and reduced-motion behavior", async () => {
    const css = await read("../src/styles/global.css");

    expect(css).toContain("--ink: #073b4c");
    expect(css).toContain("--blue: #0077c8");
    expect(css).toContain("--green: #54b948");
    expect(css).toContain("--yellow: #ffc20e");
    expect(css).toContain("@media (prefers-reduced-motion: reduce)");
  });

  it("includes canonical, Open Graph and structured metadata", async () => {
    const layout = await read("../src/layouts/BaseLayout.astro");

    expect(layout).toContain('rel="canonical"');
    expect(layout).toContain('property="og:title"');
    expect(layout).toContain('type="application/ld+json"');
  });

  it("includes the requested Codex signature in the footer", async () => {
    const footer = await read("../src/components/Footer.astro");

    expect(footer).toContain('class="footer-signature"');
    expect(footer).toContain("by Codex");
  });
});
