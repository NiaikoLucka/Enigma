import { describe, expect, it } from "vitest";

import { LockGameEngine } from "../core/engine/LockGameEngine";

describe("LockGameEngine", () => {
  const config = {
    digits: 3,

    maxAttempts: 5,

    minClues: 3,

    maxClues: 10,
  };

  it("démarre une partie", () => {
    const game = new LockGameEngine();

    game.start(config);

    const state = game.getState();

    expect(state.status).toBe("PLAYING");

    expect(state.clues.length).toBeGreaterThan(0);
  });

  it("compte les tentatives", () => {
    const game = new LockGameEngine();

    game.start(config);

    game.checkAnswer("000");

    expect(game.getAttempts()).toBe(1);
  });

  it("gagne avec la bonne réponse", () => {
    const game = new LockGameEngine();

    game.start(config);

    const secret = (game as any).puzzle.secret;

    const result = game.checkAnswer(secret);

    expect(result).toBe(true);

    expect(game.getStatus()).toBe("WON");
  });

  it("perd après trop de tentatives", () => {
    const game = new LockGameEngine();

    game.start(config);

    for (let i = 0; i < 5; i++) {
      game.checkAnswer("000");
    }

    expect(game.getStatus()).toBe("LOST");
  });
});
