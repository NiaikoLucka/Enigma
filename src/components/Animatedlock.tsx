import { PartyPopper } from "lucide-react";

/**
 * Cadenas SVG animé.
 * status: "idle" | "shake" | "open"
 * - "open"  : l'anse pivote vers le haut, le corps passe au vert, confetti.
 * - "shake" : tout le cadenas tremble brièvement (mauvais code).
 */
export default function AnimatedLock({ status = "idle" }) {
  return (
    <div
      className={`relative w-24 h-28 ${status === "shake" ? "animate-lock-shake" : ""} ${status === "open" ? "animate_lock_open" : ""}`}
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

        @keyframe lock-updown {
            0%, 100% {transform: translateY(0);}
            20% {transform: translateY(4px);}
            40% {transform: translateY(6px);}
            60% {transform: translateY(5px);}
            80% {transform: translateY(3px);}
            }
        .animate_lock_open { animation : lock-updown 0.5s ease-in-out;}
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
              status === "open"
                ? "rotate(-38deg) translate(5px,-25px) "
                : "rotate(0deg)",
          }}
        />
        <rect
          x="18"
          y="44"
          width="64"
          height="54"
          rx="14"
          fill={status === "open" ? "#34d399" : "#fb7185"}
          className="transition-colors duration-500"
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

      {status === "open" && (
        <PartyPopper
          size={22}
          className="absolute -top-2 -right-2 text-amber-400 animate-bounce"
        />
      )}
    </div>
  );
}
