import { GuessEvaluator } from "./GuessEvaluator";

export class CandidateManager {
  private candidates: string[];

  private evaluator = new GuessEvaluator();

  constructor(candidates: string[]) {
    this.candidates = candidates;
  }

  filter(
    guess: string,
    result: { correctPlace: number; correctWrongPlace: number }
  ) {
    this.candidates = this.candidates.filter((candidate) => {
      const evaluation = this.evaluator.evaluate(candidate, guess);

      return (
        evaluation.correctPlace === result.correctPlace &&
        evaluation.correctWrongPlace === result.correctWrongPlace
      );
    });
  }

  count() {
    return this.candidates.length;
  }

  getCandidates() {
    return this.candidates;
  }
}
