import type { Clue } from "@/core";

interface Props {
  clues: Clue[];
}
/**
 * Affiche la liste des indices, et l'historique des essais précédents
 * avec leur retour couleur (bien placé / mal placé / absent).
 */

export default function Clues({ clues }: Props) {
  return (
    <div>
      <h3 className="text-lg font-bold mb-3 text-stone-700">🔎 Indices</h3>
      <div className="flex flex-col gap-2 mb-5">
        {clues.map((clue, index) => (
          <div
            key={index}
            className="flex items-center justify-between gap-2 bg-amber-50 border border-amber-100 rounded-xl px-8 py-2.5  text-stone-700 w-80"
          >
            <div className="flex items-center justify-center">
              <span className="text-2xl font-bold">
                {clue.guess || "0000"}{" "}
              </span>
            </div>
            <div className="flex-row items-center justify-cente p">
              <p className="mb-1 ">
                <span className="font-semibold">{clue.correctPlace || 0}</span>{" "}
                Correct et Bien place 
              </p>
              <p>
                <span className="font-semibold">
                  {clue.correctWrongPlace || 0}
                </span>{" "}
                Correct mais mal place
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
