import { Feather, Flame, Gauge, Skull, type LucideIcon } from "lucide-react";

import { Difficulty } from "../config/Difficulty";

export interface DifficultyInfo {
  title: string;

  description: string;

  color: string;

  icon: LucideIcon;
}

export function getDifficultyInfo(difficulty: Difficulty): DifficultyInfo {
  switch (difficulty) {
    case Difficulty.EASY:
      return {
        title: "Facile",
        description: "Pour découvrir le principe du jeu, sans pression.",
        color: "#2E8873",
        icon: Feather,
      };

    case Difficulty.NORMAL:
      return {
        title: "Normal",
        description:
          "L'expérience classique, un bon équilibre pour progresser.",
        color: "#A9762F",
        icon: Gauge,
      };

    case Difficulty.HARD:
      return {
        title: "Difficile",
        description:
          "Un chiffre de plus, des tentatives en moins. Reste méthodique.",
        color: "#BD5236",
        icon: Flame,
      };

    case Difficulty.EXPERT:
      return {
        title: "Expert",
        description:
          "Le code le plus long, le moins de marge d'erreur possible.",
        color: "#1B1C20",
        icon: Skull,
      };
  }
}


