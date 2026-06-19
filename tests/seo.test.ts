import { access, readFile } from "node:fs/promises";
import { describe, expect, it } from "vitest";

const read = (path: string) => readFile(new URL(path, import.meta.url), "utf8");

describe("discovery files", () => {
  it("provides RSS, sitemap configuration and robots discovery", async () => {
    const config = await read("../astro.config.mjs");
    const robots = await read("../public/robots.txt");
    const rss = await read("../src/pages/rss.xml.ts");

    expect(config).toContain("sitemap()");
    expect(config).toContain("https://tamtas-project.eu");
    expect(robots).toContain("Sitemap: https://tamtas-project.eu/sitemap-index.xml");
    expect(rss).toContain('getCollection("news")');
  });

  it("ships the complete official icon and social image set", async () => {
    await expect(access(new URL("../public/brand/favicon.ico", import.meta.url))).resolves.toBeUndefined();
    await expect(access(new URL("../public/brand/apple-touch-icon.png", import.meta.url))).resolves.toBeUndefined();
    await expect(access(new URL("../public/brand/social-card-light-1200x630.png", import.meta.url))).resolves.toBeUndefined();
  });
});
