import { Lightbulb } from "lucide-react";

/**
 * Affiche la liste des indices, et l'historique des essais précédents
 * avec leur retour couleur (bien placé / mal placé / absent).
 */
const CELL_STYLES = {
  correct: "bg-emerald-200 text-emerald-900",
  misplaced: "bg-amber-200 text-amber-900",
  absent: "bg-stone-200 text-stone-500",
};

export default function Clues({
  clues,
  history,
}: {
  clues: string[];
  history: Array<{ guess: string; result: (keyof typeof CELL_STYLES)[] }>;
}) {
  return (
    <div>
      <h3 className="text-lg font-bold mb-3 text-stone-700">🔎 Indices</h3>
      <div className="flex flex-col gap-2 mb-5">
        {clues.map((clue, i) => (
          <div
            key={i}
            className="flex items-start gap-2 bg-amber-50 border border-amber-100 rounded-xl px-3 py-2.5 text-sm text-stone-700"
          >
            <Lightbulb size={16} className="mt-0.5 shrink-0 text-amber-500" />
            <span>{clue}</span>
          </div>
        ))}
      </div>

      {history.length > 0 && (
        <>
          <h3 className="text-sm font-semibold mb-2 text-stone-500">
            Essais précédents
          </h3>
          <div className="flex flex-col gap-1.5">
            {history.map((h, i) => (
              <div key={i} className="flex gap-1.5">
                {h.guess.split("").map((d, j) => (
                  <span
                    key={j}
                    className={`w-7 h-7 rounded-lg flex items-center justify-center text-sm font-bold ${CELL_STYLES[h.result[j]]}`}
                  >
                    {d}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
