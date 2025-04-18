export default function MoreButton() {
  return (
    <div className="relative bg-customGray">
      <div
        className="bg-customBlack absolute top-[-8px] right-[-8px] bottom-[-8px] left-[-8px] z-20 block w-[124px] md:top-[-12px] md:right-[-12px] md:bottom-[-12px] md:left-[-12px] md:w-[304px]"
        style={{
          clipPath: "polygon(3% 8%, 100% 0, 97% 92%, 0 100%)",
          WebkitClipPath: "polygon(3% 8%, 100% 0, 97% 92%, 0 100%)",
          transition: "all 0.2s",
        }}
      ></div>

      <button className="bg-customYellow hover:bg-customYellow-highlight focus:bg-customYellow-highlight relative z-30 h-[40px] w-[108px] cursor-pointer transition-colors duration-200 md:h-[66px] md:w-[280px]">
        <span className="font-bold uppercase md:text-(length:--font-md)">
          More
        </span>
      </button>
    </div>
  );
}
