export class CombinationGenerator {
  generate(length: number): string[] {
    const result: string[] = [];

    const generateRecursive = (current: string) => {
      if (current.length === length) {
        result.push(current);

        return;
      }

      for (let i = 0; i <= 9; i++) {
        const digit = i.toString();

        if (current.includes(digit)) continue;

        generateRecursive(current + digit);
      }
    };

    generateRecursive("");

    return result;
  }
}
