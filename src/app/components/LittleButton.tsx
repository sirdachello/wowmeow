export default function LittleButton({
  text,
  type,
  color,
  isDisabled,
}: {
  text: "more" | "send";
  type: "button" | "submit";
  color: "yellow" | "gray";
  isDisabled: boolean;
}) {
  return (
    <div className="before:bg-customBlack relative before:absolute before:inset-[-12px] before:block before:h-[90px] before:w-[304px] before:transition-all before:duration-200 before:[clip-path:polygon(3%_8%,100%_0,97%_92%,0_100%)]">
      <button
        type={type}
        disabled={isDisabled}
        className={`relative z-10 h-[66px] w-[280px] transition-colors duration-200 ${color === "yellow" ? "bg-customYellow" : "bg-customGray-dark"} ${isDisabled ? "cursor-not-allowed" : "focus:bg-customYellow-highlight hover:bg-customYellow-highlight cursor-pointer"}`}
      >
        <span className="text-(length:--font-md) font-bold uppercase">
          {text}
        </span>
      </button>
    </div>
  );
}
