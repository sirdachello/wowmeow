import Image from "next/image";
import { infoBlocks } from "../lib/whyInfoBlocks";
import WhyInfoBlock from "./WhyInfoBlock";
import CharacterTrio from "public/images/ServicesPage/WhyWowMeowSection/CharacterTrio.png";

export default function ServicesWhyUsBlock() {
  return (
    <section className="bg-customBackground px-[8vw] pt-[80px] pb-[100px] 2xl:px-[240px]">
      <h1 className="text-customWhite 950:text-(length:--font-lg) mb-[60px] text-center text-(length:--font-md) font-bold text-balance uppercase">
        Why choose wow meow
      </h1>
      <div className="950:flex-row flex flex-col items-center justify-between gap-[60px]">
        <div className="flex flex-col gap-[70px]">
          {infoBlocks.map((block) => (
            <WhyInfoBlock
              key={block.id}
              title={block.title}
              description={block.description}
            />
          ))}
        </div>
        <div className="max-950:mt-[50px]">
          <Image
            src={CharacterTrio}
            height={740}
            alt="A trio of cool looking characters, two rough-looking cats and a frog explorer."
          />
        </div>
      </div>
    </section>
  );
}
