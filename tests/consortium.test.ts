import { access, readFile } from "node:fs/promises";
import { describe, expect, it } from "vitest";
import { partners } from "../src/data/project";

const read = (path: string) => readFile(new URL(path, import.meta.url), "utf8");

describe("consortium composition", () => {
  it("uses a dedicated six-cell composition with one context card and five equal member cards", async () => {
    const page = await read("../src/pages/consortium.astro");
    const component = await read("../src/components/ConsortiumGrid.astro");

    expect(page).toContain("<ConsortiumGrid");
    expect(component).toContain('class="consortium-context-card"');
    expect(component).toContain('class="consortium-member-card"');
    expect(component).toContain("partners.map");
  });

  it("stores a local logo asset for every consortium member", async () => {
    for (const partner of partners) {
      await expect(
        access(new URL(`../public${partner.logo}`, import.meta.url)),
      ).resolves.toBeUndefined();
    }
  });

  it("uses partner logos in the reusable homepage grid and footer", async () => {
    const grid = await read("../src/components/PartnerGrid.astro");
    const footer = await read("../src/components/Footer.astro");

    expect(grid).toContain("partner.logo");
    expect(footer).toContain("partner.logo");
  });
});
