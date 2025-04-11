export default function FormButton({
    disabled,
    loading,
  }: {
    disabled: boolean;
    loading: boolean;
  }) {
    return (
      <div className="before:bg-customBlack relative before:absolute before:inset-[-12px] before:block lg:before:w-[170px] xl:before:w-[304px] before:transition-all before:duration-200 before:[clip-path:polygon(3%_8%,100%_0,97%_92%,0_100%)]">
        <button
          type='submit'
          disabled={disabled}
          className={`relative z-10 h-[40px] lg:h-[66px] w-[100px] lg:w-[150px] xl:w-[280px] transition-colors duration-200 ${disabled ? "bg-customGray-dark cursor-not-allowed" : "bg-customYellow focus:bg-customYellow-highlight hover:bg-customYellow-highlight cursor-pointer" }`}
        >
          <span className="text-(length:--font-sm) md:text-(length:--font-sm-plus) lg:text-(length:--font-md) font-bold uppercase">
            {loading? "Sending..." :  "Send"}
          </span>
        </button>
      </div>
    );
  }
  