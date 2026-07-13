import readline from "node:readline";

import { GameEngine } from "../core/engine/GameEngine";
import { Difficulty } from "../core/config/Difficulty";

export class GameCLI {
  private game = new GameEngine();

  private rl = readline.createInterface({
    input: process.stdin,

    output: process.stdout,
  });

  start() {
    console.log("🔒 Cadenas Game");

    console.log("Trouve le code secret");

    this.game.start(Difficulty.NORMAL);

    this.ask();
  }

  private ask() {
    this.rl.question(
      "Votre proposition : ",

      (guess) => {
        this.play(guess);
      },
    );
  }

  private play(guess: string) {
    const result = this.game.play(guess);

    console.log(`Bien placé : ${result.correctPlace}`);

    console.log(`Mal placé : ${result.correctWrongPlace}`);

    const state = this.game.getState();

    if (state.isWon) {
      console.log("🎉 Cadenas ouvert !");

      this.rl.close();

      return;
    }

    if (state.isFinished) {
      console.log("💀 Partie terminée");

      this.rl.close();

      return;
    }

    this.ask();
  }
}
