import { StaticImageData } from "next/image";

import followersnewsImage from "public/images/AboutPage/News/followersNews.png";
import cybercatnewsImage from "public/images/AboutPage/News/cybercatNews.png";
import vikingnewsImage from "public/images/AboutPage/News/vikingNews.png";

export type newsBit = {
  title: string;
  date: string;
  description: string;
  image: StaticImageData;
  imageAlt: string;
};

export const newsList: newsBit[] = [
  {
    title: "CyberCats are in full combat mode",
    date: "14.04.2025",
    description: `CyberCats are in full combat mode.
    
    We've just wrapped our first internal playtest — the combat system is alive and kicking. Controls feel tight, the action flows, and now we're moving on to the first quest-driven location: dialogue, NPCs, and that signature neon-noir charm.
    
    The project is moving fast, and we're open to partnerships.
    
    If a cozy RPG in a cyberpunk world full of attitude (and cats in armor) sounds like your thing — let's talk.`,
    image: cybercatnewsImage,
    imageAlt:
      "A cyberpunk-looking scene. A diner with a cute-looking frog as the host and a lizard for a customer.",
  },

  {
    title: "Spoilers Ahead!",
    date: "12.04.2025",
    description: `A little spoiler: we're working on two new projects!
The first is a cozy tower defense game featuring strategic cats.
The second is a stylish puzzle game with unexpected twists.
Stay tuned — things are getting exciting.`,
    image: vikingnewsImage,
    imageAlt: "A fearsome furry viking holding two axes!",
  },
  {
    title: "1000 followers!",
    date: "09.04.2025",
    description: `A year and a half ago, we had no idea anyone would care about what we make — we just made stuff because not making felt worse. Now, there are a thousand of you here. Wild.
    \n
    In that time:\n
    🐾 Released four projects.\n
    🐾 Kicked off CyberCats World — our chaotic cyberpunk cat adventure full of chips, gangs, and fluffy mayhem.\n
    🐾 Got more weird ideas in the works.\n
    
    No "just the beginning" speech. We're already moving.\n
    If you're riding with us — awesome.\n
    If you're lurking — hit follow. Won't hurt.`,
    image: followersnewsImage,
    imageAlt:
      'A group of cats smiling at you, caption behind them says "1000 followers!"',
  },
];
