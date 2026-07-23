const Dot = ({ color }: { color: string }) => {
  return (
    <span
      style={{
        display: "inline-block",
        width: 9,
        height: 9,
        borderRadius: "9999px",
        backgroundColor: color,
      }}
    />
  );
};

export default Dot;
