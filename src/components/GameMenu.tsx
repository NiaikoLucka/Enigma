import { GAME_CONFIG, Difficulty, type GameSession } from "@/core";

import Card from "./ui/Card";

interface GameMenuProps {
  onStart: (session: GameSession) => void;
}

export default function GameMenu({ onStart }: GameMenuProps) {
  return (
    <div
      className="
      flex
      items-center
      justify-center
      p-6
      "
    >
      <div
        className="
        w-full
        max-w-4xl
        "
      >
        <h1
          className="
          text-4xl
          font-bold
          text-center
          mb-8
          "
        >
          🔒 Enigma 
        </h1>

        <div
          className="
          grid
          grid-cols-1
          md:grid-cols-2
          gap-5
          "
        >
          {Object.entries(GAME_CONFIG).map(([difficulty, config]) => {
            const level = difficulty as Difficulty;

            return (
              <Card
                key={difficulty}

                onClick={() =>
                  onStart({
                    difficulty: level,

                    config,
                  })
                }

                className="
                bg-zinc-50
                p-8
                flex
                flex-col
                items-center
                gap-6
                cursor-pointer
                hover:-translate-y-1
                hover:shadow-lg
                transition-all
                "
              >
                <h2
                  className="
                  text-xl
                  font-bold
                  "
                >
                  {getDifficultyLabel(level)}
                </h2>

                <div
                  className="
                  space-y-2
                  text-sm
                  text-zinc-600
                  "
                >
                  <p>Chiffres : {config.digits}</p>

                  <p>Tentatives : {config.maxAttempts}</p>

                  <p>Indices : {config.minClues}</p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function getDifficultyLabel(difficulty: Difficulty) {
  switch (difficulty) {
    case Difficulty.EASY:
      return "Facile 🟢";

    case Difficulty.NORMAL:
      return "Normal 🔵";

    case Difficulty.HARD:
      return "Difficile 🟠";

    case Difficulty.EXPERT:
      return "Expert 🔴";

    default:
      return difficulty;
  }
}
