import { useState, useRef, useEffect, type KeyboardEvent } from "react";
import AnimatedLock from "./Animatedlock";
import Clues from "./Clues";
import {
  DEFAULT_CODE,
  DEFAULT_CLUES,
  evaluateGuess,
  isWinningGuess,
} from "./Gamecore";

interface LockdownEnigmeProps {
  code?: string;
  clues?: string[];
}

type GuessResult = ReturnType<typeof evaluateGuess>;

type LockStatus = "idle" | "shake" | "open";

export default function LockdownEnigme({
  code = DEFAULT_CODE,
  clues = DEFAULT_CLUES,
}: LockdownEnigmeProps) {
  const [digits, setDigits] = useState<string[]>(Array(code.length).fill(""));
  const [history, setHistory] = useState<
    Array<{ guess: string; result: GuessResult }>
  >([]);
  const [lockStatus, setLockStatus] = useState<LockStatus>("idle"); // "idle" | "shake" | "open"
  const [message, setMessage] = useState<string>(
    "Entre ton code pour ouvrir le cadenas.",
  );
  const inputsRef = useRef<Array<HTMLInputElement | null>>([]);

  useEffect(() => {
    if (lockStatus === "shake") {
      const t = setTimeout(() => setLockStatus("idle"), 500);
      return () => clearTimeout(t);
    }
  }, [lockStatus]);

  const handleChange = (index: number, value: string) => {
    const clean = value.replace(/[^0-9]/g, "").slice(-1);
    const next = [...digits];
    next[index] = clean;
    setDigits(next);
    if (clean && index < code.length - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !digits[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const handleCheck = () => {
    const guess = digits.join("");
    if (guess.length < code.length) {
      setMessage("Complète les quatre chiffres.");
      return;
    }

    const result = evaluateGuess(guess, code);
    setHistory((prev) => [{ guess, result }, ...prev]);

    if (isWinningGuess(guess, code)) {
      setLockStatus("open");
      setMessage("Cadenas ouvert, bravo !");
    } else {
      setLockStatus("shake");
      setMessage("Presque ! Regarde les couleurs et retente.");
      setDigits(Array(code.length).fill(""));
      setTimeout(() => inputsRef.current[0]?.focus(), 500);
    }
  };

  const solved = lockStatus === "open";

  return (
    <div
      className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-6 max-w-3xl p-4 rounded-2xl"
      style={{
        fontFamily: "ui-rounded, 'Segoe UI Rounded', system-ui, sans-serif",
      }}
    >
      <Clues clues={clues} history={history} />

      <div className="bg-white border-2 border-stone-100 rounded-3xl p-6 flex flex-col items-center gap-4 shadow-sm">
        <AnimatedLock status={lockStatus} />

        <div className="flex gap-2">
          {digits.map((d, i) => (
            <input
              key={i}
              ref={(el) => { if (el) inputsRef.current[i] = el; }}
              value={d}
              onChange={(e) => handleChange(i, e.target.value)}
              onKeyDown={(e) => handleKeyDown(i, e)}
              inputMode="numeric"
              maxLength={1}
              disabled={solved}
              className="w-10 h-12 text-center text-xl font-bold border-2 border-stone-200 rounded-xl focus:outline-none focus:border-rose-300 disabled:bg-emerald-50 disabled:border-emerald-200"
            />
          ))}
        </div>

        {!solved && (
          <button
            onClick={handleCheck}
            className="w-full py-2.5 rounded-xl bg-rose-400 text-white font-semibold text-sm hover:bg-rose-500 active:scale-[0.97] transition"
          >
            Valider
          </button>
        )}

        <div className="flex gap-3 text-xs text-stone-500">
          <span className="flex items-center gap-1">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" /> bien
            placé
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400" /> mal placé
          </span>
        </div>

        <p
          className={`text-sm text-center font-medium ${solved ? "text-emerald-600" : "text-stone-500"}`}
        >
          {message}
        </p>
      </div>
    </div>
  );
}
