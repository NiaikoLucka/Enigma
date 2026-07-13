import readline from "node:readline";

import { DifficultyMenu } from "./menus/DifficultyMenu";

import { LockGameEngine } from "../core/engine/LockGameEngine";

export class GameCLI {
  private rl = readline.createInterface({
    input: process.stdin,

    output: process.stdout,
  });

  private menu = new DifficultyMenu(this.rl);

  private game = new LockGameEngine();

  start() {
    console.log(`

========================

 🔒 CADENAS LOGIQUE

========================


`);

    this.menu.show((config) => {
      this.startGame(config);
    });
  }

  private startGame(config: Parameters<LockGameEngine["start"]>[0]) {
    this.game.start(config);

    console.log(`

🔎 INDICES

================

`);

    this.game.getClues().forEach((clue, index) => {
      console.log(`

Indice ${index + 1}

Code :
${clue.guess}

✔ Bien placé :
${clue.correctPlace}

↔ Mal placé :
${clue.correctWrongPlace}


`);
    });

    console.log(
      `
Tentatives :
${this.game.getRemainingAttempts()}
`,
    );

    this.ask();
  }

  private ask() {
    this.rl.question(
      "🔐 Votre code : ",

      (answer) => {
        this.play(answer);
      },
    );
  }

  private play(answer: string) {
    const result = this.game.checkAnswer(answer);

    if (result) {
      console.log(`

🎉 BRAVO !

Le cadenas est ouvert 🔓

`);

      this.rl.close();

      return;
    }

    if (this.game.isFinished()) {
      console.log(`

❌ PERDU !

Le cadenas reste fermé 🔒

`);

      this.rl.close();

      return;
    }

    console.log(`

❌ Mauvais code

Tentatives restantes :
${this.game.getRemainingAttempts()}


`);

    this.ask();
  }
}
