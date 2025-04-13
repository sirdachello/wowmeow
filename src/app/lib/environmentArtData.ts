import { StaticImageData } from "next/image"

import env1 from 'public/images/ServicesPage/ExamplesSection/Environment/env (1).png'
import env2 from 'public/images/ServicesPage/ExamplesSection/Environment/env (2).png'
import env3 from 'public/images/ServicesPage/ExamplesSection/Environment/env (3).png'
import env4 from 'public/images/ServicesPage/ExamplesSection/Environment/env (4).png'
import env5 from 'public/images/ServicesPage/ExamplesSection/Environment/env (5).png'
import env6 from 'public/images/ServicesPage/ExamplesSection/Environment/env (6).png'
import env7 from 'public/images/ServicesPage/ExamplesSection/Environment/env (7).png'
import env8 from 'public/images/ServicesPage/ExamplesSection/Environment/env (8).png'
import env9 from 'public/images/ServicesPage/ExamplesSection/Environment/env (9).png'
import env10 from 'public/images/ServicesPage/ExamplesSection/Environment/env (10).png'

export type environmentItem = {
    id: number,
    src: StaticImageData,
    alt: string,
}

export const environmentArtData: environmentItem[] = [
    {
        id: 1,
        src: env1,
        alt: 'neon looking cyberpunk-styled 2d warehouse',
    },
    {
        id: 2,
        src: env2,
        alt: 'cyberpunk-styled diner with neon lights and a frog hostess',
    },
    {
        id: 3,
        src: env3,
        alt: 'mythical forest road, leading deeper into the woods',
    },
    {
        id: 4,
        src: env4,
        alt: 'mythical forest road, leading deeper into the woods',
    },
    {
        id: 5,
        src: env5,
        alt: 'a mysterious house standing next to a tall tree, purple colors dominate the scene',
    },
    {
        id: 6,
        src: env6,
        alt: 'a road leading deeper into the woods, stones to the sides of the road.',
    },
    {
        id: 7,
        src: env7,
        alt: 'a cute cattor-kid with huge eyes in an amusement part',
    },
    {
        id: 8,
        src: env8,
        alt: 'silly frogs swimming in the pond',
    },
    {
        id: 9,
        src: env9,
        alt: 'an asset of a ice-cream truck colored in vibrant pink colors',
    },
    {
        id: 10,
        src: env10,
        alt: 'assets of run-down building, with a grandma at the front, she is not happy',
    },
]