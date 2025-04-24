import "../components/styles/headerGameSelection.css";

import GamesScroller from "../components/GamesScroller";

import { newsList } from "../lib/news";
import NewsBit from "../components/NewsBit";
import OurGames from "../components/OurGames";
import ReadMoreButton from "../components/ReadMoreButton";

export default function GamesPage() {
  return (
    <>
      <GamesScroller />
      <OurGames />
      <section className="bg-customBackground px-[8vw] pt-[80px] pb-[100px] 2xl:px-[240px]">
        <h2 className="text-customWhite mb-[40px] text-center text-(length:--font-lg) font-bold uppercase">
          Updates
        </h2>
        <div className="flex flex-col gap-[40px] md:gap-[60px]">
          {[newsList[0], newsList[1]].map(news => <NewsBit key={news.title} info={news}/>)}
          <ReadMoreButton/>
        </div>
      </section>
    </>
  );
}
