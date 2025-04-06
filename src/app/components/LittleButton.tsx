
export default function LittleButton({text} : {text: 'more' | 'send'}) {
  return (
    <div className="m-10">
      <button className="cursor-pointer bg-customYellow before:[clip-path:polygon(3%_8%,100%_0,97%_92%,0_100%)] before:transition-all before:duration-200 hover:before:[clip-path:polygon(0_0,97%_8%,100%_100%,2%_92%)] hover:bg-customYellow-highlight before:bg-customBlack relative h-[66px] w-[280px] transition-colors duration-200 before:absolute before:inset-[50%] before:z-[-1] before:block before:h-[90px] before:w-[304px] before:translate-x-[-50%] before:translate-y-[-50%]">
        <span className="text-(length:--font-md) font-bold uppercase">
        {text}
        </span>
      </button>
    </div>
  );
}
