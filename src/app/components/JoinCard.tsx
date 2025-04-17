import Image from "next/image";
import Link from "next/link";

import arrowRight from "public/images/AboutPage/arrow-right.svg";
import catGamerThumbsUp from "public/images/AboutPage/Cats/catGamerThumbsUp.png"

export default function JoinCard() {
    return (
        <Link href={"/contacts"}>
        <div
          className="bg-customBlack absolute top-[50%] left-[50%] z-[1] h-[200px] w-[160px] translate-x-[-50%] translate-y-[-50%] transition-all duration-200 [clip-path:polygon(3%_3%,100%_0,97%_97%,0_100%)]  sm:h-[293px] sm:w-[220px] lg:h-[386px] lg:w-[331px]"
        ></div>
        <div className="group bg-customYellow hover:bg-customYellow-highlight relative z-10 flex h-[180px] w-[140px] cursor-pointer items-center overflow-hidden transition-all duration-300 sm:h-[273px] sm:w-[200px] lg:h-[355px] lg:w-[299px]">
          <div className="text-customBlack relative flex w-full flex-col items-center justify-center transition-all duration-300 group-hover:translate-y-[-10px] sm:group-hover:translate-y-[-10px] lg:group-hover:translate-y-[-70px]">
            <h3 className="px-[22px] text-center text-(length:--font-sm-plus) leading-8 font-bold uppercase sm:mb-[10px] sm:px-[75px] sm:text-(length:--font-md)">
              Want to join?
            </h3>
            <p className="text-[12px] font-normal sm:text-(length:--font-sm)">
              View our vacancies{" "}
              <span>
                <Image
                  className="inline-block"
                  src={arrowRight}
                  alt=""
                />
              </span>
            </p>
          </div>
          <Image
            className="absolute bottom-[-100px] left-[25%] h-[80px] w-auto transition-all duration-300 group-hover:bottom-[0px] md:bottom-[-250px] md:h-[179px]"
            src={catGamerThumbsUp}
            alt={`A smiling cat-recruiter with a Resume in his paws`}
          />
        </div>
      </Link>
    )
}