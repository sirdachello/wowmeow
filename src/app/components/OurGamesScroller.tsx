"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import styles from "./styles/outGameScrollerStyles.module.css";

import arrowPrev from "public/images/GamesPage/ArrowPrev.png";
import arrowNext from "public/images/GamesPage/ArrowNext.png";

import Image from "next/image";
import { ourGamesBlockInfo } from "../lib/ourGamesBlockGameData";
import GameCard from "./GameCard";

export default function OurGamesScroller() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      dragFree: false,
    },
    [],
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="relative sm:px-[150px]">
      <div
        className={`${styles.embla} relative z-[0] mx-auto max-w-[1500px]`}
        ref={emblaRef}
      >
        <div className={`${styles.embla__container}`}>
          {ourGamesBlockInfo.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </div>

      <button
        className="bg-customBlack/[70%] hover:bg-customYellow-highlight/[70%] bg-opa absolute top-1/2 left-0 ml-4 flex h-[40px] w-[30px] translate-y-[-40%] cursor-pointer items-center justify-center transition-colors duration-200 [clip-path:polygon(0_0,100%_0,100%_100%,12%_100%)] md:ml-[20px] md:h-[75px] md:w-[65px] lg:ml-[60px]"
        onClick={scrollPrev}
      >
        <Image src={arrowPrev} alt="arrow previous" width={18} />
      </button>
      <button
        className="bg-customBlack/[70%] hover:bg-customYellow-highlight/[70%] bg-opa absolute top-1/2 right-0 mr-4 flex h-[40px] w-[30px] translate-y-[-40%] cursor-pointer items-center justify-center transition-colors duration-200 [clip-path:polygon(0_0,100%_0,88%_100%,0_100%)] md:mr-[20px] md:h-[75px] md:w-[65px] lg:mr-[60px]"
        onClick={scrollNext}
      >
        <Image src={arrowNext} alt="arrow next" width={18} />
      </button>
    </div>
  );
}
