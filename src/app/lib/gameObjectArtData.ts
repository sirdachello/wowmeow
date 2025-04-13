import { StaticImageData } from "next/image";

import obj1 from 'public/images/ServicesPage/ExamplesSection/GameObjects/gameObject (1).png'
import obj2 from 'public/images/ServicesPage/ExamplesSection/GameObjects/gameObject (2).png'
import obj3 from 'public/images/ServicesPage/ExamplesSection/GameObjects/gameObject (3).png'
import obj4 from 'public/images/ServicesPage/ExamplesSection/GameObjects/gameObject (4).png'
import obj5 from 'public/images/ServicesPage/ExamplesSection/GameObjects/gameObject (5).png'
import obj6 from 'public/images/ServicesPage/ExamplesSection/GameObjects/gameObject (6).png'
import obj7 from 'public/images/ServicesPage/ExamplesSection/GameObjects/gameObject (7).png'
import obj8 from 'public/images/ServicesPage/ExamplesSection/GameObjects/gameObject (8).png'
import obj9 from 'public/images/ServicesPage/ExamplesSection/GameObjects/gameObject (9).png'
import obj10 from 'public/images/ServicesPage/ExamplesSection/GameObjects/gameObject (10).png'
import obj11 from 'public/images/ServicesPage/ExamplesSection/GameObjects/gameObject (11).png'

export type gameObjectItem = {
  id: number;
  src: StaticImageData;
  alt: string;
};

export const gameObjectArtdata: gameObjectItem[] = [
    {
        id: 1,
        src: obj1,
        alt: 'cartoonish house',
    },
    {
        id: 2,
        src: obj2,
        alt: 'cartoonish run-down house with patched roof and trash outside',
    },
    {
        id: 3,
        src: obj3,
        alt: 'lavish cartoonish house with foliage around it',
    },
    {
        id: 4,
        src: obj4,
        alt: 'cute hot-dog stand with a table near it',
    },
    {
        id: 5,
        src: obj5,
        alt: 'building assets from SamuRRR cat game',
    },
    {
        id: 6,
        src: obj6,
        alt: 'different assets made of stone, portals, wells, shrines',
    },
    {
        id: 7,
        src: obj7,
        alt: 'oriental weapons assets, kukri, katana, arrow, bow',
    },
    {
        id: 8,
        src: obj8,
        alt: 'vibrant playground',
    },
    {
        id: 9,
        src: obj9,
        alt: 'military assets from Cat Commanders, Tank wars, a game by Wow Meow. Tanks, mortars, howitzer.',
    },
    {
        id: 10,
        src: obj10,
        alt: 'military assets from Cat Commanders, Tank wars, a game by Wow Meow. Tanks, bulldozers.',
    },
    {
        id: 11,
        src: obj11,
        alt: 'military assets from Cat Commanders, Tank wars, a game by Wow Meow. Tanks covered with spikes.',
    },
];
