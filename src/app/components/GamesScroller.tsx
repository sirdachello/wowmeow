'use client'

import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import { headerGamesList } from "../lib/headerGamesList";
import GameLinkComponent from "./GameLinkComponent"

export default function GamesScroller() {
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
      )
}