"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";

import "./styles/scrollerstyles.css";
import Image from "next/image";

import AutoScroll from "embla-carousel-auto-scroll";
import { characterItem } from "../lib/characterArtData";
import { environmentItem } from "../lib/environmentArtData";
import { gameObjectItem } from "../lib/gameObjectArtData";

export function EmblaCarousel({imageData, direction}: {imageData: characterItem[] | environmentItem[] | gameObjectItem[], direction: 'forward' | 'backward'}) {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    AutoScroll({
      startDelay: 500,
      speed: 1,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
      direction: direction,
    }),
  ]);

  return (
    <div className="embla py-[50px]" ref={emblaRef}>
      <div className="embla__container">
        {imageData.map((character) => (
          <div key={character.id} className="embla__slide relative shrink-0 grow basis-[150px] hover:z-20 sm:basis-[25%] md:basis-[20%] lg:basis-[15%]">
            <div className="embla__slide__inner">
              <Image src={character.src} alt={character.alt} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}