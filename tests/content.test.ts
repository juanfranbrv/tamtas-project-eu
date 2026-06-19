import { describe, expect, it } from "vitest";
import {
  languages,
  partners,
  projectFacts,
  stakeholders,
  tools,
} from "../src/data/project";
import { navigation } from "../src/data/navigation";

describe("public project content", () => {
  it("defines the complete public navigation", () => {
    expect(navigation.map((item) => item.href)).toEqual([
      "/project",
      "/research",
      "/outputs",
      "/news",
      "/consortium",
      "/resources",
    ]);
  });

  it("represents the five project languages", () => {
    expect(languages.map((language) => language.code)).toEqual([
      "EN",
      "ES",
      "CA",
      "ET",
      "GA",
    ]);
  });

  it("represents all consortium partners", () => {
    expect(partners).toHaveLength(5);
    expect(partners.map((partner) => partner.short)).toEqual([
      "UOC",
      "BSC",
      "UoS",
      "DCU",
      "UT",
    ]);
  });

  it("uses proposal facts without claiming unfinished results", () => {
    expect(projectFacts.durationMonths).toBe(36);
    expect(projectFacts.domain).toBe("Life Sciences");
    expect(projectFacts.status).toBe("Research and development");
  });

  it("links stakeholders and existing open tools", () => {
    expect(stakeholders).toHaveLength(4);
    expect(tools.map((tool) => tool.name)).toEqual([
      "TBXTools",
      "MTUOC",
      "TransQuest",
    ]);
    expect(tools.every((tool) => tool.href.startsWith("https://"))).toBe(true);
  });
});
