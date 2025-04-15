import cyberCatsThumb from "public/images/GamesPage/gameThumbnails/cyberCatsThumb.png";
import samuraiCatThumb from "public/images/GamesPage/gameThumbnails/samuraiCatThumb.png";
import catCommandersThumb from "public/images/GamesPage/gameThumbnails/catCommandersThumb.png";
import monsterBoxThumb from "public/images/GamesPage/gameThumbnails/monsterBoxThumb.png";
import drinkMasterThumb from "public/images/GamesPage/gameThumbnails/drinkMasterThumb.png";
import { StaticImageData } from "next/image";
import { storeGameLinks } from "./storesGameLinks";

export type ourGamesBlockGame = {
  id: string;
  description: string;
  image: {
    src: StaticImageData;
    alt: string;
  };
  storeGameLinks: null | {
    appStore: string | null;
    googlePlay: string | null;
  }
};

export const ourGamesBlockInfo: ourGamesBlockGame[] = [
  {
    id: "cybercats",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
    image: {
      src: cyberCatsThumb,
      alt: 'A group of characters from "Cybercats: World"',
    },
    storeGameLinks: storeGameLinks.cybercats
  },
  {
    id: "samuraicat",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
    image: {
      src: samuraiCatThumb,
      alt: "logo of Samurai cat with monsters on the background",
    },
    storeGameLinks: storeGameLinks.samuraicat
  },
  {
    id: "catcommanders",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
    image: {
      src: catCommandersThumb,
      alt: 'Two military-looking feline characters from "cat commanders: tank wars"',
    },
    storeGameLinks: storeGameLinks.catcommanders
  },
  {
    id: "drinkmaster",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
    image: {
      src: drinkMasterThumb,
      alt: 'logo for the game "Drink Master: Tap & serve"',
    },
    storeGameLinks: storeGameLinks.drinkmaster
  },
  {
    id: "monstermerge",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
    image: {
      src: monsterBoxThumb,
      alt: 'logo for the game "Monsters in the box"',
    },
    storeGameLinks: storeGameLinks.monstermerge
  },
];
