import { describe, expect, it } from "vitest";
import { CandidateManager } from "../core/validators/CandidateManager";

describe("CandidateManager", () => {
  it("réduit les candidats après un indice", () => {
    const manager = new CandidateManager(["427", "123", "456"]);

    manager.filter("427", {
      correctPlace: 3,
      correctWrongPlace: 0,
    });

    expect(manager.count()).toBe(1);

    expect(manager.getCandidates()).toEqual(["427"]);
  });
});
