import { useState } from "react";

import GameMenu from "@/components/GameMenu";
import LockdownEnigme from "@/components/LockDownEnigme";

import type { GameConfig } from "@/core";

export default function Game() {
  const [config, setConfig] = useState<GameConfig | null>(null);

  if (!config) {
    return <GameMenu onStart={setConfig} />;
  }

  return <LockdownEnigme config={config} onBack={() => setConfig(null)} />;
}
