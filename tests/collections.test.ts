import { readFile } from "node:fs/promises";
import { describe, expect, it } from "vitest";

const read = (path: string) => readFile(new URL(path, import.meta.url), "utf8");

describe("content collections", () => {
  it("defines news, outputs and resources with explicit loaders", async () => {
    const config = await read("../src/content.config.ts");

    expect(config).toContain('base: "./src/content/news"');
    expect(config).toContain('base: "./src/content/outputs"');
    expect(config).toContain('base: "./src/content/resources"');
    expect(config).toContain("publishedAt: z.coerce.date()");
    expect(config).toContain("status: z.enum");
  });

  it("starts with honest, dated project content", async () => {
    const news = await read("../src/content/news/project-website.md");
    const output = await read("../src/content/outputs/project-website.md");
    const resource = await read("../src/content/resources/tbxtools.md");

    expect(news).toContain("status: published");
    expect(output).toContain("status: available");
    expect(resource).toContain("externalUrl: https://github.com/aoliverg/TBXTools");
  });
});
