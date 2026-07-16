import { PartyPopper } from "lucide-react";
import type { LockAnimation } from "@/core";

/**
 * Cadenas SVG animé.
 * status: "idle" | "shake" | "open"
 * - "open"  : l'anse pivote vers le haut, le corps passe au vert, confetti.
 * - "shake" : tout le cadenas tremble brièvement (mauvais code).
 */
export default function AnimatedLock({
  animation,
}: {
  animation: LockAnimation;
}) {
  return (
    <div
      className={`relative w-24 h-28 ${animation === "shake" ? "animate-lock-shake" : ""} ${animation === "open" ? "animate-lock-open" : ""} ${animation === "broken" ? "animate-lock-broken" : ""}`}
    >
      <style>{`
        @keyframes lock-shake {
          0%, 100% { transform: translateX(0); }
          20% { transform: translateX(-8px) rotate(-4deg); }
          40% { transform: translateX(7px) rotate(4deg); }
          60% { transform: translateX(-5px) rotate(-2deg); }
          80% { transform: translateX(4px) rotate(2deg); }
        }
        .animate-lock-shake { animation: lock-shake 0.5s ease-in-out; }

        @keyframes lock-open-bounce {
          0% { transform: translateY(0); }
          20% { transform: translateY(-10px); }
          40% { transform: translateY(-20px); }
          60% { transform: translateY(-10px); }
          80% { transform: translateY(-5px); }
          100% { transform: translateY(0); }
        }
        .animate-lock-open { animation: lock-open-bounce 0.5s ease-in-out; }

        @keyframes party-pop-in {
          0% { opacity: 0; transform: translateY(-4px) scale(0.8); }
          50% { opacity: 1; transform: translateY(-12px) scale(1.05); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes party-pop-bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        .party-popper-appear {
          opacity: 0;
          animation: party-pop-in 0.3s ease-out 0.3s forwards,
                     party-pop-bounce 1.2s ease-in-out 0.3s infinite;
        }
        @keyframes lock-broken {
          0% {
            transform: rotate(0deg);
          }
          20% {
            transform: rotate(-10deg);
          }
          40% {
            transform: rotate(10deg);
          }
          60% {
            transform: rotate(-8deg);
          }

          80% {
            transform: rotate(8deg);
          }
          100% {
            transform: rotate(0deg);
            opacity:.6;
            filter:grayscale(1);
          }
        }

        .animate-lock-broken{
          animation:
            lock-broken
            .8s
            ease;
        }       
        
      `}</style>

      <svg viewBox="0 0 100 110" className="w-full h-full overflow-visible">
        <path
          d="M 28 46 V 32 a 22 22 0 0 1 44 0 v 14"
          fill="none"
          stroke="#8b5e34"
          strokeWidth="9"
          strokeLinecap="round"
          className="origin-[72px_46px] transition-transform duration-500 ease-out"
          style={{
            transform:
              animation === "open"
                ? "rotate(-38deg) translate(5px,-25px) "
                : "rotate(0deg)",
            transitionDelay: animation === "open" ? "0.3s" : "0s",
          }}
        />
        <rect
          x="18"
          y="44"
          width="64"
          height="54"
          rx="14"
          fill={
            animation === "open"
              ? "#34d399"
              : animation === "broken"
                ? "#6b7280"
                : "#fb7185"
          }
          className="transition-colors duration-500"
          style={{ transitionDelay: animation === "open" ? "0.3s" : "0s" }}
        />
        <circle cx="50" cy="66" r="7" fill="#fff" opacity="0.85" />
        <rect
          x="47"
          y="70"
          width="6"
          height="14"
          rx="3"
          fill="#fff"
          opacity="0.85"
        />
      </svg>

      {animation === "open" && (
        <PartyPopper
          size={22}
          className="absolute -top-2 -right-2 text-amber-400 party-popper-appear"
        />
      )}
    </div>
  );
}
