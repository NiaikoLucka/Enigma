const LockEmblem = () => {
  return (
    <div className="flex items-center justify-center">
      <svg width="60" height="66" viewBox="0 0 72 80" fill="none">
      <path
        d="M20 34V22C20 12.6 27.2 5 36 5C44.8 5 52 12.6 52 22V34"
        stroke="#A9762F"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <rect
        x="12"
        y="32"
        width="48"
        height="42"
        rx="8"
        fill="#FFFFFF"
        stroke="#A9762F"
        strokeWidth="2"
      />
      <circle cx="36" cy="50" r="5.5" fill="#8A5F22" />
      <rect
        x="33.7"
        y="53.5"
        width="4.6"
        height="11"
        rx="2.3"
        fill="#8A5F22"
      />
    </svg>
    </div>
  );
};

export default LockEmblem;
