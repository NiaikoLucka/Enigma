import readline from "node:readline";

import { GAME_CONFIG } from "../../core/config/GameConfig";

import { Difficulty } from "../../core/config/Difficulty";

type GameConfig = (typeof GAME_CONFIG)[keyof typeof GAME_CONFIG];

export class DifficultyMenu {
  private rl: readline.Interface;

  constructor(rl: readline.Interface) {
    this.rl = rl;
  }

  show(callback: (config: GameConfig) => void) {
    console.log(`

🔐 CHOISIR LA DIFFICULTE


1 - 🟢 Facile

2 - 🟡 Normal

3 - 🔴 Difficile


`);

    this.rl.question(
      "Votre choix : ",

      (choice) => {
        switch (choice) {
          case "1":
            callback(GAME_CONFIG[Difficulty.EASY]);

            break;

          case "2":
            callback(GAME_CONFIG[Difficulty.NORMAL]);

            break;

          case "3":
            callback(GAME_CONFIG[Difficulty.HARD]);

            break;

          default:
            console.log("Choix invalide");

            this.show(callback);
        }
      },
    );
  }
}
