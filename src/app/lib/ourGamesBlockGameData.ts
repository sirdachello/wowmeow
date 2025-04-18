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
      "CyberCats World - The First Cozy-Cyberpunk RPG!",
    image: {
      src: cyberCatsThumb,
      alt: 'A group of characters from "Cybercats: World"',
    },
    storeGameLinks: storeGameLinks.cybercats
  },
  {
    id: "samuraicat",
    description:
      "Welcome to the mystical world of Samurai Cat. In this thrilling survival game, you'll step into the paws of a brave samurai cat on an adventure to rescue his beloved, who has been kidnapped by sinister demons.",
    image: {
      src: samuraiCatThumb,
      alt: "logo of Samurai cat with monsters on the background",
    },
    storeGameLinks: storeGameLinks.samuraicat
  },
  {
    id: "catcommanders",
    description:
      `Lead an army of charismatic feline commanders in thrilling tactical battles! Build your base, upgrade your tanks, and conquer the raid map. Your strategies will determine the outcome of every battle!`,
    image: {
      src: catCommandersThumb,
      alt: 'Two military-looking feline characters from "cat commanders: tank wars"',
    },
    storeGameLinks: storeGameLinks.catcommanders
  },
  {
    id: "drinkmaster",
    description:
      `Have you ever dreamed of running your own bar? In our game, you have the chance to become a true bar master! Show off your drink-mixing skills!`,
    image: {
      src: drinkMasterThumb,
      alt: 'logo for the game "Drink Master: Tap & serve"',
    },
    storeGameLinks: storeGameLinks.drinkmaster
  },
  {
    id: "monstermerge",
    description:
      "Do you enjoy watermelon-style game mechanics? Then you'll love this one!",
    image: {
      src: monsterBoxThumb,
      alt: 'logo for the game "Monsters in the box"',
    },
    storeGameLinks: storeGameLinks.monstermerge
  },
];
