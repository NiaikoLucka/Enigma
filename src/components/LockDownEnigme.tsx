import { useEffect, useRef, useState, type KeyboardEvent } from "react";

import type { GameConfig } from "@/core";

import AnimatedLock from "./Animatedlock";
import Clues from "./Clues";

import { useLockGame } from "../hooks/useLockGame";

interface LockdownEnigmeProps {
  config: GameConfig;
}

export default function LockdownEnigme({ config }: LockdownEnigmeProps) {
  const { state, startGame, submitGuess } = useLockGame();

  const [digits, setDigits] = useState<string[]>(() =>
    Array(config.digits).fill(""),
  );

  const inputsRef = useRef<Array<HTMLInputElement | null>>([]);

  /*
    Initialisation du jeu
  */

  useEffect(() => {
    startGame(config);
  }, []);

  function handleChange(index: number, value: string) {
    const clean = value.replace(/[^0-9]/g, "").slice(-1);

    const next = [...digits];

    next[index] = clean;

    setDigits(next);

    if (clean && index < digits.length - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  }

  function handleKeyDown(index: number, e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Backspace" && !digits[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  }

  function handleSubmit() {
    const answer = digits.join("");

    if (answer.length !== config.digits) {
      return;
    }

    submitGuess(answer);

    setDigits(Array(config.digits).fill(""));
  }

  function handleRestart() {
    startGame(config);
  }

  if (!state) {
    return <div>Chargement...</div>;
  }

  const won = state.status === "WON";

  const lost = state.status === "LOST";

  return (
    <div
      className="
      grid
      grid-cols-1
      lg:grid-cols-[1fr_350px]
      gap-6
      max-w-6xl
      mx-auto
      p-6
      "
    >
      {/* Partie cadenas */}

      <section
        className="
        rounded-3xl
        bg-white
        p-8
        flex
        flex-col
        items-center
        gap-6
        shadow
        "
      >
        <div
          className="
          text-center
          "
        >
          <h1
            className="
            text-3xl
            font-bold
            "
          >
            🔒 Enigma Lock
          </h1>

          <p
            className="
            text-gray-500
            "
          >
            Tentatives : {state.attempts}/{state.maxAttempts}
          </p>
        </div>

        <AnimatedLock status={state.status} />

        <div
          className="
          flex
          gap-3
          "
        >
          {digits.map((digit, index) => (
            <input
              key={index}

              ref={(el) => {
                inputsRef.current[index] = el;
              }}

              value={digit}

              onChange={(e) => handleChange(index, e.target.value)}

              onKeyDown={(e) => handleKeyDown(index, e)}

              disabled={won || lost}

              maxLength={1}

              inputMode="numeric"

              className="
                w-14
                h-16
                text-center
                text-3xl
                font-bold
                border-2
                rounded-xl
                border-zinc-200
                focus:border-blue-500
                outline-none
                "
            />
          ))}
        </div>

        {!won && !lost && (
          <button
            onClick={handleSubmit}

            className="
            w-full
            rounded-xl
            py-3
            bg-blue-600
            text-white
            font-bold
            hover:bg-blue-700
            transition
            "
          >
            Vérifier
          </button>
        )}

        {(won || lost) && (
          <button
            onClick={handleRestart}

            className="
            w-full
            rounded-xl
            py-3
            bg-zinc-900
            text-white
            font-bold
            "
          >
            Nouvelle partie
          </button>
        )}

        {won && (
          <p
            className="
            text-green-600
            font-bold
            "
          >
            🔓 Cadenas ouvert !
          </p>
        )}

        {lost && (
          <p
            className="
            text-red-600
            font-bold
            "
          >
            🔒 Cadenas bloqué !
          </p>
        )}
      </section>

      {/* Partie indices */}

      <aside
        className="
        rounded-3xl
        bg-zinc-50
        p-6
        "
      >
        {" "}
        <Clues clues={state.clues} />
      </aside>
    </div>
  );
}
