"use client";

import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import ReviewComponent from "./ReviewComponent";

import arrowPrev from "public/images/GamesPage/ArrowPrev.png";
import arrowNext from "public/images/GamesPage/ArrowNext.png";
import Image from "next/image";

import styles from "./styles/reviewsSlider.module.css";
import ReviewContactUsComponent from "./ReviewContactUsComponent";
import { reviews } from "../lib/reviews";

export default function ServicesReviewsBlock() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { align: "start", loop: true },
    [
      Autoplay({
        delay: 15000,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ],
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);
  return (
    <section className="bg-customWhite pt-[20px]">
      <h1 className="text-customBlack mb-[30px] text-center text-(length:--font-lg) font-bold uppercase">
        Reviews
      </h1>
      <div className={`${styles.embla} relative`} ref={emblaRef}>
        <div className={`${styles.embla__container}`}>
          {reviews.map((review) => (
            <div key={review.name} className={`${styles.embla__slide}`}>
              <ReviewComponent review={review} />
            </div>
          ))}
          <div className={`${styles.embla__slide}`}>
          <ReviewContactUsComponent />
          </div>
        </div>
        <button
          className="bg-customBlack/[70%] hover:bg-customYellow-highlight/[70%]  absolute top-[60%] md:top-1/3 1300:top-[60%] left-0 ml-[10px] flex h-[40px] w-[30px] translate-y-[-40%] cursor-pointer items-center justify-center transition-colors duration-200 [clip-path:polygon(0_0,100%_0,100%_100%,12%_100%)] sm:ml-[20px] sm:h-[75px] sm:w-[65px] md:ml-[30px] 2xl:top-[40%]"
          onClick={scrollPrev}
        >
          <Image src={arrowPrev} alt="" width={18} />
        </button>
        <button
          className="bg-customBlack/[70%] hover:bg-customYellow-highlight/[70%]  absolute top-[60%]  md:top-1/3 1300:top-[60%] right-0 mr-[10px] flex h-[40px] w-[30px] translate-y-[-40%] cursor-pointer items-center justify-center transition-colors duration-200 [clip-path:polygon(0_0,100%_0,88%_100%,0_100%)] sm:mr-[20px] sm:h-[75px] sm:w-[65px] md:mr-[30px] 2xl:top-[40%]"
          onClick={scrollNext}
        >
          <Image src={arrowNext} alt="" width={18} />
        </button>
      </div>
    </section>
  );
}
