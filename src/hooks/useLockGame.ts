import { useRef, useState } from "react";

import { LockGameEngine, type LockAnimation, type LockGameState } from "@/core";

import type { GameConfig } from "@/core/config/GameConfig";

export function useLockGame() {
  const engineRef = useRef<LockGameEngine | null>(null);

  const [state, setState] = useState<LockGameState | null>(null);

  const [animation, setAnimation] = useState<LockAnimation>("idle");

  const [animationKey, setAnimationKey] = useState(0);

  function startGame(config: GameConfig) {
    const engine = new LockGameEngine();

    engine.start(config);

    engineRef.current = engine;

    setState({
      ...engine.getState(),
    });

    setAnimation("idle");

    setAnimationKey((prev) => prev + 1);
  }

  function submitGuess(answer: string) {
    if (!engineRef.current) return false;

    const result = engineRef.current.checkAnswer(answer);

    setState({
      ...engineRef.current.getState(),
    });

    setAnimation(result.animation);

    setAnimationKey((prev) => prev + 1);

    return result;
  }

  return {
    state,

    startGame,

    submitGuess,

    animation,

    animationKey,
  };
}
