
import monstermerge1 from "public/images/Games/monsterBox/Mask group-1.png";
import monstermerge2 from "public/images/Games/monsterBox/Mask group-2.png";
import monstermerge3 from "public/images/Games/monsterBox/Mask group.png";

export const monsterMergeArt: characterItem[] = [
  {
    id: 1,
    src: monstermerge1,
    alt: 'A screenshot with vibrant characters and a caption "Stress Relieve!"',
  },
  {
    id: 2,
    src: monstermerge2,
    alt: 'A screenshot with vibrant characters and a caption "Useful Boosters!"',
  },
  {
    id: 3,
    src: monstermerge3,
    alt: 'A screenshot with vibrant characters and a caption "Many Skins, your monsters!"',
  },
];

import catcommanders1 from "public/images/Games/catCommanders/Mask group-1.png";
import catcommanders2 from "public/images/Games/catCommanders/Mask group-2.png";
import catcommanders3 from "public/images/Games/catCommanders/Mask group-3.png";
import catcommanders4 from "public/images/Games/catCommanders/Mask group-4.png";
import catcommanders5 from "public/images/Games/catCommanders/Mask group.png";

export const catcommandersArt: characterItem[] = [
  {
    id: 1,
    src: catcommanders1,
    alt: "A commander-cat with a knife in his paws showing a slide on technology research",
  },
  {
    id: 2,
    src: catcommanders2,
    alt: 'A commander-cat with a slide behind him, caption says: "Explore the raid map and uncover rewards! Defeat powerful bosses and claim victory!"',
  },
  {
    id: 3,
    src: catcommanders3,
    alt: 'Cat commander shows the slice with tanks and their stats, caption says "Three unique unit classes! Adapt your strategy with powerful tanks!',
  },
  {
    id: 4,
    src: catcommanders4,
    alt: 'Battlefield from the game "cat commanders" Caption says "Experience epic auto-battles! Let your strategy lead you to victory!"',
  },
  {
    id: 5,
    src: catcommanders5,
    alt: 'Veteran cat shows you a battlefield slide, caption: "Plan your tactics and dominate the battlefield!',
  },
];

import samuraicat1 from "public/images/Games/samuraiCat/Mask group-1.png";
import samuraicat2 from "public/images/Games/samuraiCat/Mask group-2.png";
import samuraicat3 from "public/images/Games/samuraiCat/Mask group-3.png";
import samuraicat4 from "public/images/Games/samuraiCat/Mask group-4.png";
import samuraicat5 from "public/images/Games/samuraiCat/Mask group.png";

export const samuraicatArt: characterItem[] = [
  {
    id: 5,
    src: samuraicat5,
    alt: 'Enemy characters from the game Samurai Cat, the caption reads: "Fight Bosses!"',
  },
  {
    id: 1,
    src: samuraicat1,
    alt: 'Samurai cat battling monsters, the caption says "Battle"',
  },
  {
    id: 2,
    src: samuraicat2,
    alt: 'Cards of weapons, captions: "many Weapons!"',
  },
  {
    id: 3,
    src: samuraicat3,
    alt: "A fiersome cat samurai, equippd with two swords, surrounded by enemies.",
  },
  {
    id: 4,
    src: samuraicat4,
    alt: 'A cat-damsel in distress, captured by an evil entity pleading cat samurai for help: "Meow!"',
  },
];

import drinkmaster1 from "public/images/Games/drinkMaster/Mask group-1.png";
import drinkmaster2 from "public/images/Games/drinkMaster/Mask group-2.png";
import drinkmaster3 from "public/images/Games/drinkMaster/Mask group-3.png";
import drinkmaster4 from "public/images/Games/drinkMaster/Mask group-4.png";
import drinkmaster5 from "public/images/Games/drinkMaster/Mask group-5.png";
import drinkmaster6 from "public/images/Games/drinkMaster/Mask group.png";

export const drinkmasterArt: characterItem[] = [
  {
    id: 1,
    src: drinkmaster1,
    alt: "neon-colored bar, renovation screen of the game",
  },
  {
    id: 2,
    src: drinkmaster2,
    alt: 'neon-colored bar, buttons show selection: "Floor, Walls, Shelves"',
  },
  {
    id: 3,
    src: drinkmaster3,
    alt: 'A bar with selection of beverages, mixing a drink resulted in "Perfect!" scoring.',
  },
  {
    id: 4,
    src: drinkmaster4,
    alt: 'A pixel-art of the street from the game, it shows an irish bug "Neon bar" with 5-star ranking and a "Play" button at the bottom.',
  },
  {
    id: 5,
    src: drinkmaster5,
    alt: "Birds-eye view of the game map, a selection of different bars you can interact with.",
  },
  {
    id: 6,
    src: drinkmaster6,
    alt: "Bright-neon bar with a female at enjoying her drink, buttons indicate the ability to stylize the look of the bar.",
  },
];

import cybercatsLogoBg from "public/images/backgrounds/gameBackgrounds/cyberCatsLogoBackground.png";
import cybercats1 from "public/images/Games/cyberCats/Mask group-1.png";
import cybercats2 from "public/images/Games/cyberCats/Mask group-2.png";
import cybercats3 from "public/images/Games/cyberCats/Mask group-3.png";
import cybercats4 from "public/images/Games/cyberCats/Mask group-4.png";
import cybercats5 from "public/images/Games/cyberCats/Mask group.png";
import { ReactNode } from "react";
import { characterItem } from "./characterArtData";
import { StaticImageData } from "next/image";
import { gamesBackgroundImages } from "./headerGamesList";
import { storeGameLinks } from "./storesGameLinks";
import { Service } from "./services";

export const cybercatsArt: characterItem[] = [
  {
    id: 5,
    src: cybercats5,
    alt: "game screen, a cyberpunk-looking warehouse with a diner, an oriental-looking frog seems to be the host. in-game UI is visible.",
  },
  {
    id: 1,
    src: cybercats1,
    alt: 'fight screen of the game, four allies vs four enemy characters. The "Fight" caption in the middle of the screen.',
  },
  {
    id: 2,
    src: cybercats2,
    alt: "fight screen of the game, four allies vs four enemy characters. Battle UI is visible.",
  },
  {
    id: 3,
    src: cybercats3,
    alt: "grid-system showcase of the battle UI.",
  },
  {
    id: 4,
    src: cybercats4,
    alt: "fight scene, enemies get damaged by powerful abilities of your allies.",
  },
];



export type gameSpecifics = {
  monstermerge: gameDataDetails;
  cybercats: gameDataDetails;
  samuraicat: gameDataDetails;
  drinkmaster: gameDataDetails;
  catcommanders: gameDataDetails;
};

export type gameDataDetails = {
  title: string;
  headerImage: StaticImageData;
  headerAlt: string;
  storeGameLinks: null | {
    appStore: null | string;
    googlePlay: null | string;
  };
  presentationalImages: characterItem[];
  description: null | ReactNode;
};

export const gameSpecificData: gameSpecifics = {
  monstermerge: {
    title: "Monster Merge: Puzzle Brain Test",
    headerImage: gamesBackgroundImages.monstermerge,
    headerAlt:
      'A few vibrant, cute monsters with "Monsters in the Box" logo at the center.',
    storeGameLinks: storeGameLinks.monstermerge,
    presentationalImages: monsterMergeArt,
    description: (
      <div className="text-customWhite leading-[30px] uppercase text-[14px] lg:text-(length:--font-sm)">
        <p>Do you enjoy watermelon-style game mechanics? Then you'll love this one!</p>
        <p>Download "Monster Merge: Puzzle Brain Test" now and put your mind to the test! Dive into an adventure with adorable monsters in Monster Merge: Puzzle Brain Test! Explore a world of dynamic monster merging and strategic gameplay.</p>
        <p>Combine cute monsters to earn points and create even bigger ones! Compete with other players for the highest score. Use boosters to score even more! Tap to drop charming monsters and merge them to make even larger ones. Compete globally to create the ultimate monster. Keep them in the box to win!</p>
        <p>Game Features:</p>
        <ul>
          <li><p>Controls: Classic “watermelon” game mechanics — simple and intuitive. Just tap to control how the monsters fall and merge.</p></li>
          <li><p>Exciting competitions, daily challenges, and new adventures</p></li>
          <li><p>Each day brings a new challenge. Compete with friends to see who can last the longest.</p></li>
          <li><p>Train and test your brain</p></li>
          <li><p>Every monster drop matters. Every move requires strategy. Keep your mind sharp, avoid overflow, and enjoy the unpredictable evolution of monsters. Test your IQ.</p></li>
          <li><p>No Wi-Fi needed</p></li>
          <li><p>Play anytime, anywhere — no internet connection required. No limits.</p></li>
          <li><p>Challenge yourself</p></li>
          <li><p>Complete tasks to earn great rewards and spice up your gameplay. Unlock new characters and locations.</p></li>
          <li><p>Customize your game</p></li>
          <li><p>Unlock characters and environments. Find your favorite one.</p></li>
        </ul>
        <p>Sounds simple, right?</p>
        <p>Enjoy playing Monster Merge: Puzzle Brain Test!</p>
      </div>
    )
  },
  catcommanders: {
    title: "cat commanders: tank wars",
    headerImage: gamesBackgroundImages.catcommanders,
    headerAlt:
      'Six military-looking cats from the game "Cat Commanders: Tank Wars"',
    storeGameLinks: storeGameLinks.catcommanders,
    presentationalImages: catcommandersArt,
    description: (
      <div className="text-customWhite leading-[30px] uppercase text-[14px] lg:text-(length:--font-sm)">
        <p>Become a legendary commander in "Cat Commanders: Tank Wars"!</p>
        <p>Lead an army of charismatic feline commanders in thrilling tactical battles! Build your base, upgrade your tanks, and conquer the raid map. Your strategies will determine the outcome of every battle!</p>
        <p>Game Features:</p>
        <ul>
          <li><p>Strategic Battles with Unique Mechanics</p></li>
          <li><p>Position your units on the battlefield, use their strengths, and dominate your enemies. Every fight is a true test of your tactical skills.</p></li>
          <li><p>Three Unique Unit Classes:</p>
          <ul className="list-disc pl-6">
            <li>Melee: Fast and powerful warriors who charge into battle.</li>
            <li>Ranged: Reliable mid-range fighters.</li>
            <li>Artillery: Devastating long-range units that damage both enemies and terrain.</li>
          </ul>
          </li>
          <li><p>Build and Upgrade Your Base</p></li>
          <li><p>Construct and improve buildings, create new tanks, and develop advanced technology to strengthen your army.</p></li>
          <li><p>Research System</p></li>
          <li><p>Unlock new upgrades, personalize your units, and adapt your army to suit your playstyle.</p></li>
          <li><p>Explore the Raid Map</p></li>
          <li><p>Move through dozens of grid cells, battle enemies, and defeat powerful bosses. Each cell holds valuable rewards and unique challenges.</p></li>
          <li><p>Auto Battles for True Strategists</p></li>
          <li><p>Focus on planning and watch your units fight. Victory depends on your smart decisions.</p></li>
        </ul>

        <p>Why Choose "Cat Commanders: Tank Wars"?</p>
        <ul className="list-disc pl-6">
          <li>A unique theme with charming cat commanders</li>
          <li>A mix of auto battles and deep strategic gameplay</li>
          <li>Colorful graphics and well-designed units for fans of tactical games</li>
          <li>The ability to grow your base and adapt your army to new challenges</li>
        </ul>
        <p>Build, evolve, and conquer. In "Cat Commanders: Tank Wars", every battle tells the story of your triumph. Become the ultimate tank commander today!</p>
      </div>
    )
  },
  samuraicat: {
    title: "Samurai Cat: Soul Rescue",
    headerImage: gamesBackgroundImages.samuraicat,
    headerAlt:
      "An image of a samurai cat, wielding two catanas and fighting monsters. SamuRRR cat logo in the center of the image.",
    storeGameLinks: storeGameLinks.samuraicat,
    presentationalImages: samuraicatArt,
    description: (
      <div className="text-customWhite leading-[30px] uppercase text-[14px] lg:text-(length:--font-sm)">
        <p>Welcome to the mystical world of "Samurai Cat". In this thrilling survival game, you’ll step into the paws of a brave samurai cat on an extraordinary adventure to rescue his beloved, who has been kidnapped by sinister demons. Your mission is not only to survive in these perilous lands but to save your love from the clutches of darkness.</p>
        <p>Game Features:</p>
        <ul>
          <li>Samurai Cat in Action</li>
          <li>Take control of a sword-wielding samurai cat and master the art of combat. Upgrade his fighting skills to defeat a variety of demonic enemies.</li>
          <li>Survive in a Mystical World</li>
          <li>Explore mysterious lands filled with secrets and danger at every turn. Gather resources to stay alive in this hostile environment.</li>
          <li>Endless Battles</li>
          <li>Face countless waves of demons using unique moves and powerful combos. Upgrade your weapons and armor to become a true guardian.</li>
          <li>Epic Storyline</li>
          <li>Embark on an emotional journey to rescue your beloved from the demonic threat. Uncover secrets of the past and future alongside the samurai cat.</li>
          <li>Vibrant Graphics and Soundtrack</li>
        </ul>
        <p>Immerse yourself in a stunning world brought to life with breathtaking visuals and an epic soundtrack.</p>
        <p>Accept your destiny, become a legend, and save your love in "Samurai Cat: Soul Rescue!"</p>
      </div>
    )
  },
  drinkmaster: {
    title: "Drink Master: Tap & Serve",
    headerImage: gamesBackgroundImages.drinkmaster,
    headerAlt:
      "An image of a samurai cat, wielding two catanas and fighting monsters. SamuRRR cat logo in the center of the image.",
    storeGameLinks: storeGameLinks.drinkmaster,
    presentationalImages: drinkmasterArt,
    description: (
      <div className="text-customWhite leading-[30px] uppercase text-[14px] lg:text-(length:--font-sm)">
        <p>Have you ever dreamed of running your own bar? In our game, you have the chance to become a true bar master! Serve drinks to your customers — from simple beers to complex cocktails. Show off your drink-mixing skills!</p>
        <p>Don't forget one of the most important parts of the game — customizing your bar. Renovate and upgrade your venue by purchasing new items and creating a cozy atmosphere. From chairs and tables to unique decor, your bar will become the hottest spot in town!</p>
        <p>But that's not all! Travel the world and discover new locations. Buy old bars, restore them, and expand your drink menu. With every new bar, your network grows, and your skills improve.</p>
        <p>Game Features:</p>
        <ul className="list-disc pl-6">
          <li><p>Drink Mixing: Serve everything from beer to sophisticated cocktails</p></li>
          <li><p>Bar Customization: Repair and upgrade your bar with new furniture and decor</p></li>
          <li><p>Network Expansion: Buy and restore new venues to grow your bar empire</p></li>
          <li><p>World Map: Unlock new locations and diversify your drink selection</p></li>
          <li><p>Unique Recipes & Decorations: Each bar comes with its own style and specialties</p></li>
        </ul>
        <p>Join us and become a true master of the bar!</p>
      </div>
    )
  },
  cybercats: {
    title: "CyberCats World - The First Cozy-Cyberpunk RPG",
    headerImage: cybercatsLogoBg,
    headerAlt: "A scene from game Cybercats: Word. Cyberpunk-looking warehouse",
    storeGameLinks: storeGameLinks.cybercats,
    presentationalImages: cybercatsArt,
    description: null
  },
};

export const cybercatsDetails: Service[] = [
  {
    id: "1",
    title: "Tactical idle combat system with player control",
    description:
      "Battles play out automatically, but your strategy determines victory—position your squad, equip implants, and unleash powerful abilities!",
  },
  {
    id: "2",
    title: "Collect a unique squad of cyber-cats",
    description:
      "Upgrade each cat with cybernetic implants to change their combat role: Fighter, Gatherer, Netrunner, Courier, or Guard. Discover rare cyber-cats and build your ultimate collection!",
  },
  {
    id: "3",
    title: "Rebuild the neon megacity with your cyber-cats",
    description:
      "Gather resources, construct and upgrade your hideout, supply the city, or trade for profit.",
  },
  {
    id: "4",
    title: "Explore a cyberpunk world full of secrets",
    description:
      "Venture into neon ruins, underground labs, and abandoned factories to discover rare cyber-cats and lost technologies. Hack security systems, battle techno-mutants, and survive in a world full of danger!",
  },
  {
    id: "5",
    title: "A cozy open-world RPG with deep quests and faction dynamics",
    description:
      "Work jobs, assist NPCs, join factions, and shape the city with your choices!",
  },
  {
    id: "6",
    title: "Forge friendships, rivalries, and romantic connections",
    description:
      "Befriend, rival, or romance NPCs and companions to unlock exclusive quests, bonuses, and story twists!",
  },
];