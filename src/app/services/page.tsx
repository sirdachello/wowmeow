import HeaderBackgroundImage from "../components/HeaderBackgroundImage";
import servicesBacgkround from "public/images/backgrounds/servicesBackground.png";
import ServicesDescriptionBlock from "../components/ServicesDescriptionBlock";
import ServicesHowWeWorkBlock from "../components/ServicesHowWeWorkBlock";
import ServicesWhyUsBlock from "../components/ServicesWhyUsBlock";
import ContactComponent from "../components/ContactComponent";
import ServicesExamplesBlock from "../components/ServicesExamplesBlock";

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
      <ServicesExamplesBlock />
      <ContactComponent contactsPage={false} />
    </article>
  );
}
