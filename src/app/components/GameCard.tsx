import Link from "next/link";
import MoreButton from "./MoreButton";
import Image from "next/image";

import styles from "./styles/outGameScrollerStyles.module.css";
import appStoreLogo from "public/images/icons/stores/AppStoreLogo.png";
import googlePlayLogo from "public/images/icons/stores/googlePlayLogo.png";
import { ourGamesBlockGame } from "../lib/ourGamesBlockGameData";

export default function GameCard({ game }: { game: ourGamesBlockGame }) {
  return (
    <div
      key={game.id}
      className={`${styles.embla__slide} flex justify-center px-[10px]`}
    >
      <div
        className={`${styles.embla__slide__innerCard} bg-customGray w-[280px] max-w-[440px] [clip-path:polygon(0_0,100%_0,100%_100%,0_98%)] md:h-[588px] md:w-[440px]`}
      >
        <div className="relative [clip-path:polygon(0_0,100%_0,100%_96%,0_100%)]">
          <Image src={game.image.src} alt={game.image.alt} />
          {game.storeGameLinks && (
            <div className="bg-customBlack/[60%] absolute bottom-0 left-0 flex h-[25%] w-[55%] items-center gap-[10px] pl-[20px] [clip-path:polygon(0_0,85%_0,100%_60%,100%_100%,0_100%)]">
              {game.storeGameLinks.googlePlay && (
                <a
                  href={game.storeGameLinks.googlePlay}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={googlePlayLogo}
                    height={30}
                    width={30}
                    alt="google play logo"
                  />
                </a>
              )}
              {game.storeGameLinks.appStore && (
                <a
                  href={game.storeGameLinks.appStore}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={appStoreLogo}
                    height={30}
                    width={30}
                    alt="appstore logo"
                  />
                </a>
              )}
            </div>
          )}
        </div>
        <div className="flex min-h-[220px] flex-col items-center gap-[20px] px-[20px] py-[20px] md:gap-[40px] md:px-[40px] md:py-[30px]">
          <p className="md:leading-[30px]">
            {" "}
            {game.description.split("\n").map((line, index) => (
              <span key={index}>
                {line}
                <br />
              </span>
            ))}
          </p>
          <div className="absolute bottom-6 md:bottom-12">
            <Link href={`games/${game.id}`}>
              <MoreButton />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
