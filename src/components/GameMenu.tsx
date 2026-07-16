import { GAME_CONFIG, Difficulty, type GameConfig } from "@/core";

interface GameMenuProps {
  onStart: (config: GameConfig) => void;
}

export default function GameMenu({ onStart }: GameMenuProps) {
  return (
    <div className="flex items-cente justify-center p-6">
      <div className="w-full max-w-4xl">
        <h1 className="text-4xl font-bold text-center mb-8">🔒 Enigma</h1>

        <div
          className="
          grid
          grid-cols-1
          md:grid-cols-2
          gap-5
          "
        >
          {Object.entries(GAME_CONFIG).map(([difficulty, config]) => (
            <button
              key={difficulty}

              onClick={() => onStart(config)}

              className="
                  rounded-3xl
                  bg-white
                  p-8
                  flex
                  flex-col
                  items-center
                  gap-6
                  shadow
                  cursor-pointer
                  hover:-translate-y-1
                  transition-all
                  "
            >
              <h2
                className="
                    text-xl
                    font-bold
                    mb-3
                    "
              >
                {getDifficultyLabel(difficulty as Difficulty)}
              </h2>

              <div
                className="
                    space-y-2
                    text-sm
                    text-zinc-600
                    "
              >
                <p> Chiffres : {config.digits}</p>

                <p>Tentatives : {config.maxAttempts}</p>

                <p>
                   Indices : {config.minClues}
                </p>
              </div>
            </button>
          ))}
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
