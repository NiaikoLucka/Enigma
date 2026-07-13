import { describe, expect, it } from "vitest";
import { CombinationGenerator } from "../core/generators/CombinationGenerator";


describe("CombinationGenerator",()=>{


it("génère 720 combinaisons pour 3 chiffres",()=>{


const generator =
new CombinationGenerator();


const result =
generator.generate(3);



expect(result.length)
.toBe(720);



});



it("génère 5040 combinaisons pour 4 chiffres",()=>{


const generator =
new CombinationGenerator();


const result =
generator.generate(4);



expect(result.length)
.toBe(5040);


});


});