import Link from "next/link";
import HeaderBackgroundImage from "./HeaderBackgroundImage";
import Image, { StaticImageData } from "next/image";

import arrowPrev from "public/images/GamesPage/ArrowPrev.png";
import arrowNext from "public/images/GamesPage/ArrowNext.png";

export default function HeaderGameLink({
  src,
  alt,
  title,
  link,
  scrollPrevAction,
  scrollNextAction,
}: {
  src: StaticImageData;
  alt: string;
  title: string;
  link: string;
  scrollPrevAction: () => void;
  scrollNextAction: () => void;
}) {
  return (
    <div className="relative">
      <HeaderBackgroundImage
        src={src}
        alt={alt}
      />
      <div className="bg-customBlack/[60%] absolute bottom-0 left-0 flex h-[40px] w-[200px] md:h-[70px] md:w-[450px] xl:h-[95px] xl:w-[800px] items-center [clip-path:polygon(0_0,92%_0,100%_60%,100%_100%,0_100%)]">
        <p className="text-customWhite pl-[10px] md:pl-[30px] xl:pl-[60px] md:text-3xl xl:text-(length:--font-lg) font-bold uppercase">
          {title}
        </p>
      </div>
      <div className="bg-customBlack/[80%] absolute right-0 bottom-0 flex h-[45px] w-[120px] md:h-[80px] md:w-[300px] xl:h-[114px] xl:w-[434px] items-center justify-center [clip-path:polygon(15%_0,100%_0,100%_100%,0%_100%,0_50%)]">
        <Link href={link}>
          <button className="bg-customYellow hover:bg-customYellow-highlight h-[30px] w-[80px] md:h-[40px] md:w-[190px] xl:h-[65px] xl:w-[280px] text-(length:--font-sm-plus) xl:text-(length:--font-md) font-bold uppercase">
            more
          </button>
        </Link>
      </div>
      <button
        className="bg-customBlack/[70%] hover:bg-customYellow-highlight/[70%] bg-opa absolute top-1/2 left-0 ml-[10px] sm:ml-[20px] md:ml-[60px] flex h-[40px] w-[30px] sm:h-[75px] sm:w-[65px] translate-y-[-40%] cursor-pointer items-center justify-center transition-colors duration-200 [clip-path:polygon(0_0,100%_0,100%_100%,12%_100%)]"
        onClick={scrollPrevAction}
      >
        <Image src={arrowPrev} alt="arrow previous" width={18} />
      </button>
      <button
        className="bg-customBlack/[70%] hover:bg-customYellow-highlight/[70%] bg-opa absolute top-1/2 right-0 mr-[10px] sm:mr-[20px] md:mr-[60px] flex h-[40px] w-[30px] sm:h-[75px] sm:w-[65px] translate-y-[-40%] cursor-pointer items-center justify-center transition-colors duration-200 [clip-path:polygon(0_0,100%_0,88%_100%,0_100%)]"
        onClick={scrollNextAction}
      >
        <Image src={arrowNext} alt="arrow next" width={18} />
      </button>
    </div>
  );
}
