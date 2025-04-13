import { StaticImageData } from "next/image";
import stepOneImage from "public/images/ServicesPage/RoadMapSection/1.png";
import stepTwoImage from "public/images/ServicesPage/RoadMapSection/2.png";
import stepThreeImage from "public/images/ServicesPage/RoadMapSection/3.png";
import stepFourImage from "public/images/ServicesPage/RoadMapSection/4.png";
import stepFiveImage from "public/images/ServicesPage/RoadMapSection/5.png";
import stepSixImage from "public/images/ServicesPage/RoadMapSection/6.png";
import stepSevenImage from "public/images/ServicesPage/RoadMapSection/7.png";
import stepEightImage from "public/images/ServicesPage/RoadMapSection/8.png";

type Step = {
  id: number;
  image: StaticImageData;
  alt: string;
  caption: string;
  smPosition?: string;
};

export const steps: Step[] = [
  {
    id: 1,
    image: stepOneImage,
    alt: "Two cats collaborating and discussing ideas.",
    caption: "Discussion of project goals and objectives",
  },
  {
    id: 2,
    image: stepTwoImage,
    alt: "A smiling cat, standing tall and saluting you.",
    caption: "Signing the NDA at any stage",
    smPosition: "max-sm:col-start-2 max-sm:row-start-2",
  },
  {
    id: 3,
    image: stepThreeImage,
    alt: "A serious-looking cat in a suit sitting at the desk.",
    caption: "Approval of the TOR and the project timeline",
    smPosition: "max-sm:col-start-2 max-sm:row-start-3",
  },
  {
    id: 4,
    image: stepFourImage,
    alt: "A happy cat holding a signed document.",
    caption: "Signing the agreement",
    smPosition: "max-sm:col-start-1 max-sm:row-start-3",
  },
  {
    id: 5,
    image: stepFiveImage,
    alt: "A cat with multiple controllers playing games",
    caption: "2 test days",
  },
  {
    id: 6,
    image: stepSixImage,
    alt: "A strong, happy cat doing some sit-downs with a barbell on his shoulders.",
    caption: "Start of work",
    smPosition: "max-sm:col-start-2 max-sm:row-start-4",
  },
  {
    id: 7,
    image: stepSevenImage,
    alt: "An artistic cat with a brush in his paws.",
    caption: "Options for choice and step-by-step submission of tasks",
  },
  {
    id: 8,
    image: stepEightImage,
    alt: "Pleased cat finishing a race by passing through the ribbon.",
    caption: "Making edits",
  },
];
