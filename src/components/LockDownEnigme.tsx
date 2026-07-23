import { useEffect, useRef, useState, type KeyboardEvent } from "react";

import type { GameSession } from "@/core";

import AnimatedLock from "./Animatedlock";
import Clues from "./Clues";

import { useLockGame } from "../hooks/useLockGame";
import { ArrowLeft, Delete, RotateCcw } from "lucide-react";
import Card from "./ui/Card";
import { Button } from "./ui/Button";
import { cn } from "@/lib/utils";

interface LockdownEnigmeProps {
  session: GameSession;
  onBack: () => void;
}

export default function LockdownEnigme({
  session,
  onBack,
}: LockdownEnigmeProps) {
  const { config, difficulty } = session;
  const { state, startGame, submitGuess, animation, animationKey } =
    useLockGame();

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

  const clearInputs = () => {
    if (won || lost) return;
    setDigits(Array(config.digits).fill(""));
    // focusInput(0);
  };

  if (!state) {
    return <div>Chargement...</div>;
  }

  const won = state.status === "WON";

  const lost = state.status === "LOST";
  const isSubmitDisabled = digits.some((digit) => digit === "");

  const remainingAttempts = state.maxAttempts - state.attempts;
  const secretCode = state.secretCode ?? "";

  return (
    <div className="flex-col flex items-center px-6 py-14">
      <div className="w-full max-w-4xl ">
        <div className="flex item-center justify-between">
          <button
            onClick={onBack}
            className="text-sm flex text-muted-foreground items-center gap-2 hover:text-primary transition-all  cursor-pointer"
          >
            <ArrowLeft size={16} />
            <span className="text-sm">Retour</span>
          </button>
          <div className="flex items-center gap-3">
            <span className="text-xs uppercase tracking-wide text-primary font-Jetbrains font-semibold px-2.5 py-1.5 border border-border rounded-lg">
              {getDifficultyLabel(difficulty)}
            </span>

            <button
              onClick={handleRestart}
              className="enigma-btn-ghost transition-colors flex items-center gap-2 bg-none text-muted-foreground rounded-lg px-2.5 py-1.5 border border-border cursor-pointer"
            >
              <RotateCcw size={14} />
              <span className="text-xs font-medium">Nouveau code</span>
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
        {/* Partie cadenas */}
        <Card className="flex flex-col w-full items-center p-8">
          <AnimatedLock animation={animation} key={animationKey} />

          <p className="text-xs tracking-[0.25em] uppercase  text-primary font-Jetbrains">
            {won && "Cadenas ouvert"}
            {lost && "Cadenas verrouillé"}
            {!won && !lost && "Saisis le code"}
          </p>

          <div className="flex gap-3 mt-6 flex-wrap justify-center">
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

                className="w-12 h-14 text-center text-2xl font-semibold border border-border rounded-xl bg-background text-foreground outline-none focus:border-primary"
              />
            ))}
          </div>

          {/* Button */}
          {!won && !lost && (
            <div className="flex gap-3 mt-6">
              <Button
                onClick={clearInputs}
                variant="ghost"
                className="gap-2 text-muted-foreground rounded-lg focus:ring-0"
              >
                <Delete size={14} />
                Effacer
              </Button>
              <Button
                onClick={handleSubmit}
                disabled={isSubmitDisabled}
                className={cn(
                  "px-8 disabled:cursor-not-allowed",
                  isSubmitDisabled && "opacity-45",
                )}
              >
                Vérifier
              </Button>
            </div>
          )}

          {(won || lost) && (
            <div className="flex mt-6">
              <button
                onClick={handleRestart}
                className="enigma-btn-ghost transition-colors flex items-center gap-2 bg-none text-muted-foreground rounded-lg px-4 py-2 border border-border cursor-pointer"
              >
                <RotateCcw size={14} />
                <span className="text-xs font-medium">Nouveau code</span>
              </button>
            </div>
          )}

          <p className=" text-sm text-muted-foreground font-light mt-6">
            {!won &&
              !lost &&
              `${remainingAttempts} tentative${remainingAttempts > 1 ? "s" : ""} restante${remainingAttempts > 1 ? "s" : ""}`}
            {lost && (
              <>
                Le code était {"  "}
                <span className="font-Jetbrains font-semibold">
                  {secretCode}
                </span>
              </>
            )}
          </p>
        </Card>

        {/* Partie indices */}

        <aside>
          {" "}
          <Clues clues={state.clues} />
        </aside>
      </div>
    </div>
  );
  function getDifficultyLabel(difficulty: GameSession["difficulty"]) {
    switch (difficulty) {
      case "easy":
        return "Facile";

      case "normal":
        return "Normal";

      case "hard":
        return "Difficile";

      case "expert":
        return "Expert";

      default:
        return difficulty;
    }
  }
}
