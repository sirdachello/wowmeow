import Image from "next/image";
import { steps } from "../lib/RoadMapSteps";

import backgroundLineDesktop from "public/images/ServicesPage/RoadMapSection/backgroundLineDesktop.png";
import backgroundLineMobile from "public/images/ServicesPage/RoadMapSection/backgroundLineMobile.png";

export default function ServicesHowWeWorkBlock() {
  return (
    <section className="bg-customWhite px-[10px] pt-[80px] pb-[100px] 2xl:px-[240px]">
      <h1 className="text-customBlack mb-[30px] text-center text-(length:--font-lg) font-bold uppercase">
        How we work?
      </h1>
      <div className="relative mx-auto flex max-w-[1440px] items-center justify-center">
        <Image
          src={backgroundLineDesktop}
          alt=""
          className="absolute hidden object-fill px-[100px] py-[100px] sm:block lg:px-[80px] xl:px-[100px] 2xl:px-[140px]"
          fill
        />
        <Image
          src={backgroundLineMobile}
          alt=""
          className="absolute block object-fill px-[40px] py-[60px] sm:hidden"
          fill
        />
        <ul className="z-10 grid grid-cols-2 gap-x-[10px] gap-y-[20px] text-center text-[12px] font-bold text-wrap uppercase sm:grid-cols-3 sm:gap-[20px] sm:text-[14px] sm:leading-[30px] lg:gap-[30px] lg:text-[18px] xl:gap-[60px] xl:text-[20px] 2xl:gap-[120px] 2xl:text-[32px]">
          <li className="flex max-h-[343px] max-w-[400px] items-center justify-center">
            <div className="bg-customYellow flex size-[150px] items-center justify-center [clip-path:polygon(0_3%,100%_0,100%_100%,0_100%)] md:size-[200px] lg:size-[250px] xl:size-[280px] 2xl:size-[300px]">
              <p className="text-center text-[20px] font-bold uppercase md:text-3xl md:leading-[3rem] lg:text-4xl 2xl:text-5xl">
                Your <br /> Request
              </p>
            </div>
          </li>
          {steps.map((step) => (
            <li
              className={`${step.smPosition} max-4-[343px] flex max-w-[400px] items-center justify-center`}
              key={step.id}
            >
              <figure>
                <Image
                  src={step.image}
                  alt={step.alt}
                  className="mx-auto mb-4 w-auto lg:h-[180] xl:h-[200] min-2xl:h-[240]"
                />
                <figcaption>{step.caption}</figcaption>
              </figure>
            </li>
          ))}
          <li className="col-start-2 flex max-h-[343px] max-w-[400px] items-center justify-center">
            <div className="bg-customYellow flex size-[150px] items-center justify-center [clip-path:polygon(0_3%,100%_0,100%_100%,0_100%)] md:size-[200px] lg:size-[250px] xl:size-[280px] 2xl:size-[300px]">
              <p className="text-center text-[20px] font-bold uppercase md:text-3xl md:leading-[3rem] lg:text-4xl 2xl:text-5xl">
                Project <br /> Delivery
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
