export default function WhyInfoBlock({title, description}: {title: string, description: string}) {
    return (
        <div className="relative mx-auto max-w-[630px]">
        <div className="bg-customYellow 950:top-[-45px] 950:h-[66px] 950:pr-[60px] absolute top-[-30px] left-[20px] z-10 flex h-[45px] w-[80%] max-w-[500px] items-center justify-start pl-[20px] [clip-path:polygon(0%_0,98%_0,100%_100%,0_100%)]">
          <h2 className="950:text-[20px] 1300:text-[22px] 1900:text-(length:--font-md) text-(length:--font-sm) font-bold uppercase">
            {title}
          </h2>
        </div>
        <div className="bg-customWhite relative flex-row items-center justify-center gap-[60px] [clip-path:polygon(0%_0,98%_0,100%_100%,0_100%)] max-md:px-[20px] md:flex md:pr-[40px] md:pl-[40px] xl:h-[140px]">
          <p className="text-customBlack text-(length:--font-sm) leading-[25px] font-normal text-balance max-xl:py-8 md:leading-[30px]">
            {description}
          </p>
        </div>
      </div>
    )
}