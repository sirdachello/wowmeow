import character from "public/images/ServicesPage/ExamplesSection/Characters/Mask group.png";
import character1 from "public/images/ServicesPage/ExamplesSection/Characters/Mask group (1).png";
import character2 from "public/images/ServicesPage/ExamplesSection/Characters/Mask group (2).png";
import character3 from "public/images/ServicesPage/ExamplesSection/Characters/Mask group (3).png";
import character4 from "public/images/ServicesPage/ExamplesSection/Characters/Mask group (4).png";
import character5 from "public/images/ServicesPage/ExamplesSection/Characters/Mask group (5).png";
import character6 from "public/images/ServicesPage/ExamplesSection/Characters/Mask group (6).png";
import character7 from "public/images/ServicesPage/ExamplesSection/Characters/Mask group (7).png";
import character8 from "public/images/ServicesPage/ExamplesSection/Characters/Mask group (8).png";
import character9 from "public/images/ServicesPage/ExamplesSection/Characters/Mask group (9).png";
import character10 from "public/images/ServicesPage/ExamplesSection/Characters/Mask group (10).png";
import character11 from "public/images/ServicesPage/ExamplesSection/Characters/Mask group (11).png";
import character12 from "public/images/ServicesPage/ExamplesSection/Characters/Mask group (12).png";
import { StaticImageData } from "next/image";

export type characterItem = {
    id: number,
    src: StaticImageData,
    alt: string,
}

export const characterArtItems: characterItem[] = [
    {
        id: 1,
        src: character,
        alt: 'Three oriental-looking cats from wowmeow game "SamuRrr"',
    },
    {
        id: 2,
        src: character1,
        alt: 'Three oriental-looking cats from wowmeow game "SamuRrr, a geisha, ninja and a samurai',
    },
    {
        id: 3,
        src: character2,
        alt: 'Four creatures, a scarecrow, a one-eyed vampire bat, a horned devil and a rat with a bag over its shoulder.',
    },
    {
        id: 4,
        src: character3,
        alt: 'A cute-looking cat with a helmet on from Wow Meow game Cat Space Engineers',
    },
    {
        id: 5,
        src: character4,
        alt: 'A cute-looking cat without a helmet on from Wow Meow game Cat Space Engineers',
    },
    {
        id: 6,
        src: character5,
        alt: 'A rough-looking cat, a pilot from a Wow Meow game Cat Commanders, Tank Wars',
    },
    {
        id: 7,
        src: character6,
        alt: 'A rough-looking cat, a radio-soldier from a Wow Meow game Cat Commanders, Tank Wars',
    },
    {
        id: 8,
        src: character7,
        alt: 'An alien brain piloting a unicycle robo-suit from a Wow Meow game Henry War',
    },
    {
        id: 9,
        src: character8,
        alt: 'A strong lumberjack',
    },
    {
        id: 10,
        src: character9,
        alt: 'A drunkard with a red nose, bottle of liquor in one hand and the holy bible in another',
    },
    {
        id: 11,
        src: character10,
        alt: 'A fish monster with a fishing rod.',
    },
    {
        id: 12,
        src: character11,
        alt: 'A goblin holding a lantern in his hand, schimitar in the other.',
    },
    {
        id: 13,
        src: character12,
        alt: 'A burly looking soldier in plate armor with a red spear.',
    },
]