import {
  GAME_CONFIG,
  Difficulty,
  type GameSession,
  getDifficultyInfo,
} from "@/core";

import Card from "./ui/Card";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

interface GameMenuProps {
  onStart: (session: GameSession) => void;
}

export default function GameMenu({ onStart }: GameMenuProps) {
  return (
    <div className="flex items-center justify-center px-6 py-10">
      <div className=" w-full max-w-3xl">
        <Link
          to="/"
          className="enigma-back transition-colors flex items-center gap-2 bg-none text-muted-foreground hover:text-primary"
        >
          <ArrowLeft size={16} />
          <span className="text-sm">Retour</span>
        </Link>

        <div className="mt-8 text-center">
          <p className="text-xs tracking-[0.3em] text-primary uppercase font-Jetbrains">
            Avant de commencer
          </p>
          <h1 className="text-4xl font-extrabold font-Oswald uppercase mt-2">
            Choisis ton niveau
          </h1>
          <p
            className="mt-3 text-base leading-relaxed font-light max-w-lg mx-auto text-muted-foreground"
          >
            Plus le code est long, plus les indices demandent de rigueur pour
            être bien exploités.
          </p>
        </div>

        <div
          className="
          grid
          grid-cols-1
          md:grid-cols-2
          gap-5
          mt-10
          "
        >
          {Object.entries(GAME_CONFIG).map(([difficulty, config]) => {
            const level = difficulty as Difficulty;
            const info = getDifficultyInfo(level);
            const Icon = info.icon;

            return (
              <Card
                key={difficulty}

                onClick={() =>
                  onStart({
                    difficulty: level,

                    config,
                  })
                }

                className="cursor-pointer hover:-translate-y-1 transition-all hover:border-primary hover:shadow-md"
              >
                <div className="flex flex-col gap-3 text-center">
                  <Icon size={22} color={info.color} />
                  <h3 className="text-xl font-semibold  text-start font-Oswald">
                    {info.title}
                  </h3>
                  <p className="text-sm text-zinc-500 text-start">
                    {info.description}
                  </p>
                </div>

                <div className="flex gap-5 mt-4 font-Jetbrains">
                  <div>
                    <p className="text-xs uppercase tracking-wide">Code</p>{" "}
                    <p className="text-sm font-semibold mt-0.5">
                      {config.digits}
                    </p>{" "}
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-wide">Tentative</p>{" "}
                    <p className="text-sm font-semibold mt-0.5">
                      {config.maxAttempts}
                    </p>{" "}
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-wide">Indice</p>{" "}
                    <p className="text-sm font-semibold mt-0.5">
                      {config.minClues === config.maxClues
                        ? config.minClues
                        : `${config.minClues}-${config.maxClues}`}
                    </p>{" "}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
        <div className="flex w-full justify-center mt-5">
          <p className="text-xs mt-3 font-light text-muted-foreground ">
            Tu pourras changer de niveau à tout moment depuis le menu.
          </p>
        </div>
      </div>
    </div>
  );
}
