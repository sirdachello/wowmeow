export default function MoreButton() {
  return (
    <div className="before:bg-customBlack relative before:absolute before:inset-[-8px] before:block before:transition-all before:duration-200 before:[clip-path:polygon(3%_8%,100%_0,97%_92%,0_100%)] md:before:inset-[-12px] md:before:w-[304px]">
      <button
        className={`bg-customYellow focus:bg-customYellow-highlight hover:bg-customYellow-highlight relative z-10 h-[40px] w-[100px] cursor-pointer transition-colors duration-200 md:h-[66px] md:w-[280px]`}
      >
        <span className="font-bold uppercase md:text-(length:--font-md)">
          More
        </span>
      </button>
    </div>
  );
}
