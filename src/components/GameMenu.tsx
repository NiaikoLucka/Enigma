import { GAME_CONFIG, Difficulty, type GameConfig } from "@/core";

interface GameMenuProps {
  onStart: (config: GameConfig) => void;
}

export default function GameMenu({ onStart }: GameMenuProps) {
  return (
    <div
      className="
      min-h-screen flex items-cente justify-center bg-zinc-950 p-6"
    >
      <div className="w-full max-w-4xl">
        <h1 className="text-4xl font-bold text-white text-center mb-8">
          🔒 Enigma Lock
        </h1>

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
                  text-left
                  bg-zinc-900
                  border
                  border-zinc-800
                  rounded-2xl
                  p-6
                  text-white
                  hover:border-blue-500
                  hover:scale-[1.02]
                  transition
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
                    text-zinc-400
                    "
              >
                <p>🔢 Chiffres : {config.digits}</p>

                <p>❤️ Tentatives : {config.maxAttempts}</p>

                <p>
                  🧩 Indices : {config.minClues}-{config.maxClues}
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
