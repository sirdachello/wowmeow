import cyberCatsBackground from "public/images/backgrounds/gameBackgrounds/CyberCatsBackground.png";
import samuraiCatBackground from "public/images/backgrounds/gameBackgrounds/SamuraiCatBackground.png";
import monsterMergeBackground from "public/images/backgrounds/gameBackgrounds/MonsterMergeBackground.png";
import drinkMasterBackground from "public/images/backgrounds/gameBackgrounds/DrinkMasterBackground.png";
import catCommandersBackground from "public/images/backgrounds/gameBackgrounds/CatCommandersBackground.png";

  export const gamesBackgroundImages = {
    cybercats: cyberCatsBackground,
    samuraicat: samuraiCatBackground,
    monstermerge: monsterMergeBackground,
    drinkmaster: drinkMasterBackground,
    catcommanders: catCommandersBackground,
  } 

  export const headerGamesList = [
    {
      id: 'cybercats',
      title: 'Cybercats: World',
      image:  gamesBackgroundImages.cybercats,
      link: '/games/cybercats',
      alt: 'A scene from game Cybercats: Word. Cyberpunk-looking warehouse',
    },
    {
      id: 'samuraicat',
      title: 'Samurai cat',
      image:  gamesBackgroundImages.samuraicat,
      link: '/games/samuraicat',
      alt: 'An image of a samurai cat, wielding two catanas and fighting monsters. SamuRRR cat logo in the center of the image.',
    },
    {
      id: 'monstermerge',
      title: 'Monster Merge',
      image:  gamesBackgroundImages.monstermerge,
      link: '/games/monstermerge',
      alt: 'A few vibrant, cute monsters with "Monsters in the Box" logo at the center.'
    },
    {
      id: 'drinkmaster',
      title: 'Drink Master',
      image:  gamesBackgroundImages.drinkmaster,
      link: '/games/drinkmaster',
      alt: 'Fox Bartender standing at the bar, "Drink Master: Tap and Serve" logo in the center'
    },
    {
      id: 'catcommanders',
      title: 'Cat Commanders',
      image:  gamesBackgroundImages.catcommanders,
      link: '/games/catcommanders',
      alt: 'Six military-looking cats from the game "Cat Commanders: Tank Wars"'
    },
  ]
