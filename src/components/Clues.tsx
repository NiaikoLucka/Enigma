import type { Clue } from "@/core";
import Card from "./ui/Card";
import Dot from "./Dot";

interface Props {
  clues: Clue[];
}
/**
 * Affiche la liste des indices, et l'historique des essais précédents
 * avec leur retour couleur (bien placé / mal placé / absent).
 */

export default function Clues({ clues }: Props) {
  return (
    <Card>
      <h3 className="text-base font-bold px-1 font-Oswald">Indices</h3>
      <p
        className="text-xs font-light px-1 mt-2 mb-1 text-muted-foreground"
      >
        Lis attentivement les indices, puis déduis le code.
      </p>

      <div className="flex flex-col gap-2 mt-3">
        {clues.map((clue, index) => (
          <div
            key={index}
            className="flex items-center gap-5 justify-between px-3 py-2.5 border-dashed border border-border rounded-sm"
          >
            <div className="flex items-center justify-center">
              <span className="text-base font-semibold font-Jetbrains tracking-wider ">
                {clue.guess || "0000"}{" "}
              </span>
            </div>
            <div className="flex items-center gap-4 ">
              <div className="flex items-center gap-1.5">
                <Dot color="#2E8873" />
                <span className="text-xs">
                  {clue.correctPlace || 0} Correct et Bien place{" "}
                </span>{" "}
              </div>
              <div className="flex items-center gap-1.5 ">
                <Dot color="#BD5236" />
                <span className="text-xs">
                  {clue.correctWrongPlace || 0} Correct mais mal place
                </span>{" "}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
