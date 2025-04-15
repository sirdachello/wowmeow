"use client";

import { useState } from "react";
import { newsList } from "../lib/news";
import NewsBit from "./NewsBit";

export default function ReadMoreButton() {
  const [expanded, setExpanded] = useState(false);
  return (
    <>
      <div
        className={`${expanded ? `[grid-template-rows:1fr]` : "[grid-template-rows:0fr]"} grid overflow-hidden transition-[grid-template-rows] duration-500`}
      >
        <div className="overflow-hidden flex flex-col gap-[40px] md:gap-[60px]">
          {newsList.slice(2).map((news) => (
            <NewsBit key={news.title} info={news} />
          ))}
        </div>
        <div className={`${expanded? 'mt-[30px]' : 'mt-0 pt-2' }  pb-2 transition-all duration-500 before:bg-customBlack relative mx-auto before:absolute before:inset-[-12px] before:block before:w-[304px] before:transition-all before:duration-200 before:[clip-path:polygon(3%_8%,100%_0,97%_92%,0_100%)]`}>
        <button
          onClick={() => setExpanded((prev) => !prev)}
          className={`bg-customYellow focus:bg-customYellow-highlight hover:bg-customYellow-highlight relative z-10 h-[66px] w-[280px] cursor-pointer transition-colors duration-200 `}
        >
          <span className="text-(length:--font-md) font-bold uppercase">
            {expanded ? "Show Less" : "Read More"}
          </span>
        </button>
      </div>
      </div>

    </>
  );
}
