"use client";

import useEmblaCarousel from "embla-carousel-react";

//requited to be a module to contain the embla style changes (if not a module, /games page header slider breaks)
import styles from "./styles/scrollerstyles.module.css";
import Image from "next/image";

import AutoScroll from "embla-carousel-auto-scroll";
import { characterItem } from "../lib/characterArtData";
import { environmentItem } from "../lib/environmentArtData";
import { gameObjectItem } from "../lib/gameObjectArtData";

export function EmblaCarousel({imageData, direction}: {imageData: characterItem[] | environmentItem[] | gameObjectItem[], direction: 'forward' | 'backward'}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, dragFree: true }, [
    AutoScroll({
      startDelay: 500,
      speed: 1,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
      direction: direction,
    }),
  ]);



  return (
    <div className={`${styles.embla} py-[50px]`} ref={emblaRef}>
      <div className={`${styles.embla__container}`}>
        {imageData.map((character) => (
          <div key={character.id} className={`${styles.embla__slide} relative shrink-0 grow hover:z-20`}>
            <div className={`${styles.embla__slide__inner}`}>
              <Image src={character.src} alt={character.alt} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}