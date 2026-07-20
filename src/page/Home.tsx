// import { Link } from "react-router-dom";
import { LockKeyhole, Sparkles, Brain } from "lucide-react";

export default function HomePage() {
  return (
    <main
      className="
      min-h-screen flex items-center justify-center px-6"
    >
      <div
        className="
        max-w-xl
        text-center
        space-y-8
        "
      >
        {/* Logo */}

        <div
          className="
          relative
          mx-auto
          w-32
          h-32
          rounded-4xl
          bg-rose-100
          flex
          items-center
          justify-center
          "
        >
          <LockKeyhole size={70} strokeWidth={1.5} className="text-rose-500" />

          <Sparkles
            size={25}
            className="
            absolute
            top-3
            right-3
            text-amber-400
            "
          />
        </div>

        {/* Titre */}

        <section
          className="
          space-y-4
          "
        >
          <h1
            className="
            text-5xl
            font-black
            text-stone-800
            "
          >
            Enigma Lock
          </h1>

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

        {/* Features */}

        <div
          className="
          grid
          grid-cols-2
          gap-4
          "
        >
          <Feature
            icon={<Brain size={22} />}
            title="Réfléchis"
            text="Analyse chaque indice"
          />

          <Feature
            icon={<LockKeyhole size={22} />}
            title="Débloque"
            text="Trouve le code"
          />
        </div>

        {/* Boutons */}

        <div
          className="
          flex
          flex-col
          gap-4
          "
        >
          {/* <Link
            to="/game"
            className="
            py-4
            rounded-2xl
            bg-rose-500
            text-white
            font-bold
            hover:bg-rose-600
            transition
            "
          >
            Commencer le jeu
          </Link> */}

          {/* <Link
            to="/tutorial"
            className="
            py-4
            rounded-2xl
            bg-white
            border
            border-stone-200
            font-bold
            text-stone-700
            hover:bg-stone-100
            transition
            "
          >
            Comment jouer ?
          </Link> */}
        </div>
      </div>
    </main>
  );
}

function Feature({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div
      className="
      bg-white
      rounded-2xl
      p-4
      border
      border-stone-100
      "
    >
      <div
        className="
        flex
        justify-center
        mb-2
        text-rose-500
        "
      >
        {icon}
      </div>

      <h3
        className="
        font-bold
        text-stone-800
        "
      >
        {title}
      </h3>

      <p
        className="
        text-sm
        text-stone-500
        "
      >
        {text}
      </p>
    </div>
  );
}
