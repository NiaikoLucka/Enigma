import { useState } from "react";

import GameMenu from "@/components/GameMenu";
import LockdownEnigme from "@/components/LockDownEnigme";

import type { GameSession } from "@/core";

export default function Game() {
  const [session, setSession] = useState<GameSession | null>(null);

  function handleStart(session: GameSession) {
    setSession(session);
  }

  function handleBack() {
    setSession(null);
  }

  if (!session) {
    return <GameMenu onStart={handleStart} />;
  }

  return (
    <LockdownEnigme
      session={session}

      onBack={handleBack}
    />
  );
}
