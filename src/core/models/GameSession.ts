import type { Difficulty } from "../config/Difficulty";
import type { GameConfig } from "../config/GameConfig";


export interface GameSession {
    difficulty: Difficulty;

    config: GameConfig;
}