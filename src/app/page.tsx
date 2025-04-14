"use client";

import useEmblaCarousel from "embla-carousel-react";

import "./components/styles/headerGameSelection.css";
import Autoplay from "embla-carousel-autoplay";

import { useCallback } from "react";
import GameLinkComponent from "./components/GameLinkComponent";
import { headerGamesList } from "./lib/headerGamesList";

export default function GamesPage() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true }),
  ]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);


  return (
    <div className="embla relative z-[0]" ref={emblaRef}>
      <div className="embla__container">
        {headerGamesList.map(game => (
          <div key={game.id} className="embla__slide">
            <GameLinkComponent alt={game.alt} src={game.image} title={game.title} link={game.link} scrollNextAction={scrollNext} scrollPrevAction={scrollPrev} />
          </div>
        ))}
      </div>
    </div>
  );
}
