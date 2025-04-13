import HeaderBackgroundImage from "../components/HeaderBackgroundImage";
import servicesBacgkround from "public/images/backgrounds/servicesBackground.png";
import ServicesDescriptionBlock from "../components/ServicesDescriptionBlock";
import ServicesHowWeWorkBlock from "../components/ServicesHowWeWorkBlock";
import ServicesWhyUsBlock from "../components/ServicesWhyUsBlock";
import ContactComponent from "../components/ContactComponent";
import { EmblaCarousel } from "../components/ExampleSlider";
import { characterArtItems } from "../lib/characterArtData";
import { gameObjectArtdata } from "../lib/gameObjectArtData";
import { environmentArtData } from "../lib/environmentArtData";

export default function ServicesPage() {
  return (
    <article>
      <HeaderBackgroundImage
        src={servicesBacgkround}
        alt={
          "A group of professional cats working diligently to deliver a project"
        }
      />
      <ServicesDescriptionBlock />
      <ServicesHowWeWorkBlock />
      <ServicesWhyUsBlock />

      <section className="bg-customWhite pt-[80px] pb-[100px]">
        <h1 className="text-customBlack mb-[45px] text-center text-(length:--font-lg) font-bold uppercase">
          Examples
        </h1>

        <div className="bg-customYellow mx-auto flex h-[55px] max-w-[320px] items-center justify-center [clip-path:polygon(0%_0,98%_0,100%_100%,0_100%)] sm:h-[66px] sm:max-w-[500px]">
          <h2 className="text-[25px] font-bold uppercase sm:text-[40px]">
          environment art
          </h2>
        </div>
        <EmblaCarousel imageData={characterArtItems} direction="forward" />

        <div className="bg-customYellow mx-auto flex h-[55px] max-w-[320px] items-center justify-center [clip-path:polygon(0%_0,98%_0,100%_100%,0_100%)] sm:h-[66px] sm:max-w-[500px] ">
          <h2 className="text-[25px] font-bold uppercase sm:text-[40px]">
          environment art
          </h2>
        </div>
        <EmblaCarousel imageData={environmentArtData} direction="backward" />

        <div className="bg-customYellow mx-auto flex h-[55px] max-w-[320px] items-center justify-center [clip-path:polygon(0%_0,98%_0,100%_100%,0_100%)] sm:h-[66px] sm:max-w-[500px] ">
          <h2 className="text-[25px] font-bold uppercase sm:text-[40px]">
          game objects art
          </h2>
        </div>
        <EmblaCarousel imageData={gameObjectArtdata} direction="forward" />
      </section>

      <ContactComponent contactsPage={false} />
    </article>
  );
}
