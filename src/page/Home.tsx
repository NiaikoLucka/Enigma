// import { Link } from "react-router-dom";
import {
  LockKeyhole,
  Brain,
  KeyRound,
  SlidersHorizontal,
  PlayCircle,
  BookOpen,
} from "lucide-react";
import LockEmblem from "../components/LockEmblem";
import Feature from "@/components/ui/Feature";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/Button";

const cards = [
  {
    icon: KeyRound,
    title: "Les indices sont la clé",
    desc: "Chaque détail compte. Utilise les indices pour découvrir la position exacte des chiffres du code.",
  },
  {
    icon: SlidersHorizontal,
    title: "Des défis adaptés",
    desc: "Choisis ton niveau et affronte des cadenas de plus en plus difficiles à déchiffrer.",
  },
  {
    icon: Brain,
    title: "La logique avant tout",
    desc: "Observe, déduis et construis ta stratégie. La solution se trouve dans les détails.",
  },
  {
    icon: LockKeyhole,
    title: "Ouvre le cadenas",
    desc: "Surmonte chaque défi et prouve que tu maîtrises l'art de la déduction.",
  },
];

export default function HomePage() {
  return (
    <main className="flex items-center justify-center px-6 py-16 w-full h-auto">
      <div className="flex-col justify-center items-center text-center space-y-8 mt-6">
        {/* Logo */}
        <LockEmblem />

        {/* Titre */}

        <section className="space-y-4">
          <h1 className="text-6xl  font-Oswald font-bold">ENIGMA</h1>

          <p
            className="
            text-lg
            text-stone-500
            "
          >
            Résous les indices, trouve la combinaison secrète et ouvre le
            cadenas.
          </p>
        </section>

        {/* Boutons */}

        <div className="flex gap-4  justify-center items-center">
          <Link to="/game">
            <Button className="rounded-lg">
              <span className="flex items-center justify-center gap-2 px-4 py-2 font-medium ">
                <PlayCircle size={19} />
                Commencer le jeu
              </span>
            </Button>
          </Link>
          <Link to="/tutoriel">
            <Button className="rounded-lg" variant="outline">
              <span className="flex items-center justify-center gap-2 px-4 py-2 font-medium ">
                <BookOpen size={18} />
                Voir le tutoriel
              </span>
            </Button>
          </Link>
        </div>

        <div className="w-full max-w-5xl mt-10">
          <div className="h-px w-full border-t mb-10 border-border" />

          {/* Features */}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
            {cards.map(({ icon: Icon, title, desc }, index) => (
              <Feature
                key={index}
                icon={<Icon size={22} />}
                title={title}
                text={desc}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
