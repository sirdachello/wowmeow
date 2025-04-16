import Image from "next/image";

import HeaderBackgroundImage from "@/app/components/HeaderBackgroundImage";
import ServicesItem from "@/app/components/ServicesItem";
import ContactGameButton from "@/app/components/ContactGameButton";
import Link from "next/link";
import { SlickEmblaSlider } from "@/app/components/SlickEmblaSlider";

const gameNamesList = [
  "cybercats",
  "drinkmaster",
  "samuraicat",
  "catcommanders",
  "monstermerge",
];

import appstoreButton from 'public/images/icons/stores/appStoreButton.png'
import googleplayButton from 'public/images/icons/stores/googlePlayButton.png'
import { cybercatsDetails, gameSpecificData } from "@/app/lib/specificGameData";
import { notFound } from "next/navigation";
export default async function GamePage({
  params,
}: {
  params: Promise<{ game: string }>;
}) {
  const { game } = await params;
  if (!gameNamesList.includes(game)) {
    notFound();
  }

  const gameData = gameSpecificData[game as keyof typeof gameSpecificData];
  return (
    <article>
      <HeaderBackgroundImage
        src={gameData.headerImage}
        alt={gameData.headerAlt}
      />
      <section className="bg-customBackground text-customWhite px-[8vw] pt-[80px] pb-[60px] 2xl:px-[240px]">
        <h1 className="mb-[35px] text-center text-(length:--font-sm-plus) font-bold text-balance uppercase md:text-(length:--font-lg)">
          {gameData.title}
        </h1>
        {game === "cybercats" ? (
          <ul className="grid grid-cols-1 gap-x-[20px] gap-y-[60px] md:grid-cols-2 md:gap-x-[30px] lg:gap-x-[60px] 2xl:gap-x-[120px]">
            {cybercatsDetails.map((item) => (
              <li key={item.id}>
                <ServicesItem
                  title={item.title}
                  description={item.description}
                />
              </li>
            ))}
          </ul>
        ) : (
          gameData.description
        )}
      </section>
      {gameData.storeGameLinks && (
        <section className="bg-customBackground">
          <p className="text-customWhite mb-[40px] font-bold text-center text-(length:--font-sm-plus) uppercase md:text-(length:--font-md)">
            You can download it here:
          </p>
          <div className="pb-[20px] px-[20px] flex items-center justify-center gap-[30px] md:gap-[100px]">
            {gameData.storeGameLinks.appStore && (
              <a href={gameData.storeGameLinks.appStore} target="_blank" rel="noopener noreferrer">
                <Image src={appstoreButton} alt="app store logo" className="hover:scale-110 transition-transform duration-200"/>
              </a>
            )}
            {gameData.storeGameLinks.googlePlay && (
              <a href={gameData.storeGameLinks.googlePlay} target="_blank" rel="noopener noreferrer">
                <Image src={googleplayButton} alt="google Play logo" className="hover:scale-110 transition-transform duration-200"/>
              </a>
            )}
          </div>
        </section>
      )}
      <section className="bg-customBackground">
        <SlickEmblaSlider
          gameName={game}
          imageData={gameData.presentationalImages}
          direction="forward"
        />
      </section>
      <section className="bg-customBackground flex items-center justify-center px-[8vw] pt-[80px] pb-[100px] 2xl:px-[240px]">
        <Link href={"/contacts"}>
          <ContactGameButton />
        </Link>
      </section>
    </article>
  );
}