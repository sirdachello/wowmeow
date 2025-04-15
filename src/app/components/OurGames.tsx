import OurGamesScroller from "./OurGamesScroller";

export default function OurGames() {
    return (
        <section className="bg-customWhite pt-[80px] pb-[100px]">
        <h1 className="text-customBlack mb-[45px] text-center text-(length:--font-lg) font-bold uppercase">
          Our games
        </h1>
        <OurGamesScroller />
      </section>
    )
}