import { describe, expect, it } from "vitest";
import { SecretGenerator } from "../core/generators/SecretGenerator";

describe("SecretGenerator", () => {
  const generator = new SecretGenerator();

  it("génère un code de 3 chiffres", () => {
    const secret = generator.generate(3);

    expect(secret).toHaveLength(3);
  });

  it("génère un code de 4 chiffres", () => {
    const secret = generator.generate(4);

    expect(secret).toHaveLength(4);
  });

  it("ne contient pas de doublons", () => {
    const secret = generator.generate(4);

    const unique = new Set(secret);

    expect(unique.size).toBe(4);
  });
});
