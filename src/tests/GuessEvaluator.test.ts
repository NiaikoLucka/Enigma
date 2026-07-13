import { describe, expect, it } from "vitest";
import { GuessEvaluator } from "../core/validators/GuessEvaluator";


describe("GuessEvaluator",()=>{


const evaluator =
new GuessEvaluator();



it("trouve un code parfait",()=>{


const result =
evaluator.evaluate(
"427",
"427"
);



expect(result.correctPlace)
.toBe(3);



expect(result.correctWrongPlace)
.toBe(0);



});




it("détecte les chiffres mal placés",()=>{


const result =
evaluator.evaluate(
"427",
"472"
);



expect(result.correctPlace)
.toBe(1);



expect(result.correctWrongPlace)
.toBe(2);



});




it("retourne zéro si aucun chiffre trouvé",()=>{


const result =
evaluator.evaluate(
"427",
"890"
);



expect(result.correctPlace)
.toBe(0);



expect(result.correctWrongPlace)
.toBe(0);



});


});