import readline from "node:readline";

import { GAME_CONFIG } from "../../core/config/GameConfig";

import { Difficulty } from "../../core/config/Difficulty";

type GameConfig = (typeof GAME_CONFIG)[keyof typeof GAME_CONFIG];

function getDifficultyLabel(difficulty: Difficulty): string {
  switch (difficulty) {
    case Difficulty.EASY:
      return "Facile";

    case Difficulty.NORMAL:
      return "Normal";

    case Difficulty.HARD:
      return "Difficile";

    case Difficulty.EXPERT:
      return "Expert";

    default:
      return difficulty;
  }
}

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
          case "1": {
            const difficulty = Difficulty.EASY;
            console.log(
              `\n🎯 Difficulté choisie : ${getDifficultyLabel(difficulty)}\n`,
            );
            callback(GAME_CONFIG[difficulty]);

            break;
          }

          case "2": {
            const difficulty = Difficulty.NORMAL;
            console.log(
              `\n🎯 Difficulté choisie : ${getDifficultyLabel(difficulty)}\n`,
            );
            callback(GAME_CONFIG[difficulty]);

            break;
          }

          case "3": {
            const difficulty = Difficulty.HARD;
            console.log(
              `\n🎯 Difficulté choisie : ${getDifficultyLabel(difficulty)}\n`,
            );
            callback(GAME_CONFIG[difficulty]);

            break;
          }

          default:
            console.log("Choix invalide");

            this.show(callback);
        }
      },
    );
  }
}
