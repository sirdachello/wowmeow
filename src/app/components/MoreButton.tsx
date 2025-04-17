export default function MoreButton() {
  return (
    <div className="relative">
      {/* Safari-friendly pseudo-element styling */}
      <div className="absolute top-[-8px] right-[-8px] bottom-[-8px] left-[-8px] block bg-customBlack w-[124px] md:w-[304px] md:top-[-12px] md:right-[-12px] md:bottom-[-12px] md:left-[-12px]" style={{
        clipPath: "polygon(3% 8%, 100% 0, 97% 92%, 0 100%)",
        WebkitClipPath: "polygon(3% 8%, 100% 0, 97% 92%, 0 100%)",
        transition: "all 0.2s",
      }}></div>
      
      <button
        className="bg-customYellow hover:bg-customYellow-highlight focus:bg-customYellow-highlight relative z-10 h-[40px] w-[108px] cursor-pointer transition-colors duration-200 md:h-[66px] md:w-[280px]"
      >
        <span className="font-bold uppercase md:text-(length:--font-md)">
          More
        </span>
      </button>
    </div>
  );
}