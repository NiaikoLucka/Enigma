import { useRef, useState } from "react";

import { LockGameEngine, type LockGameState } from "@/core";

import type { GameConfig } from "@/core/config/GameConfig";


export function useLockGame() {
  const engineRef = useRef<LockGameEngine | null>(null);

  const [state, setState] = useState<LockGameState | null>(null);

  function startGame(config: GameConfig) {
    const engine = new LockGameEngine();

    engine.start(config);

    engineRef.current = engine;

    setState({
      ...engine.getState(),
    });
  }

  function submitGuess(answer: string) {
    if (!engineRef.current) return false;

    const result = engineRef.current.checkAnswer(answer);

    setState({
      ...engineRef.current.getState(),
    });

    return result;
  }

  return {
    state,

    startGame,

    submitGuess,
  };
}
