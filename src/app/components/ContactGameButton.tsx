export default function ContactGameButton() {
  return (
    <button className="before:bg-customBlack relative z-30 cursor-pointer before:absolute before:inset-[-10px] before:z-[-10] before:[clip-path:polygon(2%_8%,100%_0,98%_92%,0_100%)] sm:before:inset-[-15px] lg:before:inset-[-20px]">
      <span className="bg-customYellow focus:bg-customYellow-highlight hover:bg-customYellow-highlight flex h-[60px] w-[300px] items-center justify-center font-bold uppercase transition-colors duration-200 text-(length:--font-sm-plus) sm:text-(length:--font-lg) lg:h-[140px] sm:h-[80px]  sm:w-[450px] lg:w-[700px] text-nowrap">
        contact us
      </span>
    </button>
  );
}
