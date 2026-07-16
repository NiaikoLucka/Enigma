// gameCore.js
// Logique pure du jeu : aucune dépendance React, aucun affichage.
// Facilement testable et réutilisable (web, React Native, etc.)

export const DEFAULT_CODE = "8213";

export const DEFAULT_CLUES = [
  "Le code contient quatre chiffres, tous différents.",
  "La somme des quatre chiffres fait 15.",
  "Le premier chiffre est pair et supérieur à 6.",
];

/**
 * Compare une tentative au code secret et renvoie, pour chaque position,
 * un statut parmi : "correct" | "misplaced" | "absent".
 * @param {string} guess
 * @param {string} code
 * @returns {("correct"|"misplaced"|"absent")[]}
 */
export function evaluateGuess(
  guess: string,
  code: string,
): ("correct" | "misplaced" | "absent")[] {
  const result: ("correct" | "misplaced" | "absent")[] = new Array(
    code.length,
  ).fill("absent");
  const codeArr: string[] = code.split("");
  const guessArr: string[] = guess.split("");
  const used: boolean[] = new Array(code.length).fill(false);

  for (let i = 0; i < code.length; i++) {
    if (guessArr[i] === codeArr[i]) {
      result[i] = "correct";
      used[i] = true;
    }
  }
  for (let i = 0; i < code.length; i++) {
    if (result[i] === "correct") continue;
    for (let j = 0; j < code.length; j++) {
      if (!used[j] && guessArr[i] === codeArr[j]) {
        result[i] = "misplaced";
        used[j] = true;
        break;
      }
    }
  }
  return result;
}

/**
 * Vérifie si une tentative est valide (bonne longueur, chiffres uniquement).
 */
export interface IGuessComplete {
  (guess: string, codeLength: number): boolean;
}

export const isGuessComplete: IGuessComplete = (
  guess: string,
  codeLength: number,
) => {
  return guess.length === codeLength && /^[0-9]+$/.test(guess);
};

export interface IWinningGuess {
  (guess: string, code: string): boolean;
}

export const isWinningGuess: IWinningGuess = (guess: string, code: string) => {
  return guess === code;
};
