export default function LittleButton({
  text,
  type,
}: {
  text: "more" | "send";
  type: "button" | "submit";
}) {
  return (
    <div className="before:bg-customBlack relative before:absolute before:inset-[-12px] before:block before:h-[90px] before:w-[304px] before:transition-all before:duration-200 before:[clip-path:polygon(3%_8%,100%_0,97%_92%,0_100%)] focus-within:before:[clip-path:polygon(0_0,97%_8%,100%_100%,2%_92%)] hover:before:[clip-path:polygon(0_0,97%_8%,100%_100%,2%_92%)]">
      <button
        type={type}
        className={`focus:bg-customYellow-highlight hover:bg-customYellow-highlight relative z-10 h-[66px] w-[280px] cursor-pointer transition-colors duration-200 ${text === "send" ? "bg-customGray-dark" : "bg-customYellow"} `}
      >
        <span className="text-(length:--font-md) font-bold uppercase">
          {text}
        </span>
      </button>
    </div>
  );
}
