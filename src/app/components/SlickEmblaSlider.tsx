"use client";

import useEmblaCarousel from "embla-carousel-react";

import cybercatstyles from './styles/gamescrollerstyles/cybercats.module.css'
import catcommandersstyles from './styles/gamescrollerstyles/catcommanders.module.css'
import drinkmastersstyles from './styles/gamescrollerstyles/drinkmaster.module.css'
import monstermergestyles from './styles/gamescrollerstyles/monsterbox.module.css'
import samuraicatstyles from './styles/gamescrollerstyles/samuraicat.module.css'
import Image from "next/image";

import AutoScroll from "embla-carousel-auto-scroll";
import { characterItem } from "../lib/characterArtData";
import { environmentItem } from "../lib/environmentArtData";
import { gameObjectItem } from "../lib/gameObjectArtData";

const gameStyleMap: Record<string, any> = {
    cybercats: cybercatstyles,
    catcommanders: catcommandersstyles,
    drinkmaster: drinkmastersstyles,
    monstermerge: monstermergestyles,
    samuraicat: samuraicatstyles,
  };

export function SlickEmblaSlider({
  gameName,
  imageData,
  direction,
}: {
  gameName: string;
  imageData: characterItem[] | environmentItem[] | gameObjectItem[];
  direction: "forward" | "backward";
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, dragFree: true },
    [
      AutoScroll({
        startDelay: 500,
        speed: 1,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
        direction: direction,
      }),
    ],
  );

  const activeStyles = gameStyleMap[gameName];

  return (
    <div className={`${activeStyles.embla} py-[20px] md:py-[50px]`} ref={emblaRef}>
      <div className={`${activeStyles.embla__container}`}>
        {imageData.map((character) => (
          <div
            key={character.id}
            className={`${activeStyles.embla__slide} relative shrink-0 grow hover:z-20`}
          >
            <div className={`${activeStyles.embla__slide__inner}`}>
              <Image src={character.src} alt={character.alt} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
