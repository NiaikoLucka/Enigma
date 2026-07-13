import { describe, expect, it } from "vitest";
import { GameEngine } from "../core/engine/GameEngine";
import { Difficulty } from "../core/config/Difficulty";


describe("GameEngine",()=>{


it("démarre une partie",()=>{


const game =
new GameEngine();



const state =
game.start(
Difficulty.NORMAL
);



expect(state.puzzle)
.not.toBeNull();



expect(state.attempts)
.toBe(0);



});





it("augmente les tentatives",()=>{


const game =
new GameEngine();



game.start(
Difficulty.NORMAL
);



game.play("123");



expect(
game.getState().attempts
)
.toBe(1);



});





it("gagne avec la bonne réponse",()=>{


const game =
new GameEngine();



const state =
game.start(
Difficulty.NORMAL
);



const secret =
state.puzzle!.secret;



const result =
game.play(secret);



expect(result.correctPlace)
.toBe(secret.length);



expect(
game.getState().isWon
)
.toBe(true);



});



}); 