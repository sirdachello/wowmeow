import aboutBackground from "public/images/backgrounds/aboutBackground.png";
import catSalute from "public/images/AboutPage/Cats/catSalute.png";
import catArtist from "public/images/AboutPage/Cats/catArtist.png";
import catGamer from "public/images/AboutPage/Cats/catGamer.png";
import EmployeeCard from "../components/EmployeeCard";

import { employees } from "../lib/employeeInfo";
import HeaderBackgroundImage from "../components/HeaderBackgroundImage";
import InformationLeft from "../components/InformationLeft";
import InformationRight from "../components/InformationRight";
import JoinCard from "../components/JoinCard";

export default function AboutPage() {
  return (
    <article>
      <HeaderBackgroundImage
        src={aboutBackground}
        alt={
          "A group of professional cats working diligently to deliver a project"
        }
      />
      <section className="bg-customBackground px-[8vw] pt-[80px] pb-[100px] 2xl:px-[240px]">
        <h1 className="text-customWhite mb-[90px] text-center text-(length:--font-lg) font-bold uppercase">
          About
        </h1>
        <div className="flex flex-col gap-[105px]">
          <InformationLeft
            src={catSalute}
            alt={"A smiling cat saluting you!"}
            title={"Our Mission"}
            description={
              "Founded in 2023, Wow Meow it's a source of enchantment at the heart of game experience. Our small team is dedicated to creating unique moments that, while they may only take a brief instant, will stay with you for a long time."
            }
          />
          <InformationRight
            src={catGamer}
            alt={
              "Happy cat with a controller in his paws, playing a WoW Meow game!"
            }
            title={"Gaming industry"}
            description={
              "Today, Wow Meow is a beacon of hope in the gaming industry, standing out for creating unique, beautiful games in a variety of genres, including simulation, role-playing, and strategy games."
            }
          />
          <InformationLeft
            src={catArtist}
            alt={"A happy cat with a paintbrush, ready to create!"}
            title={"Our Creations"}
            description={
              "Our creations stand out from the crowd with their original vision, meticulous work and cute characters. Meow Wow seeks to create a lasting, unique, and captivating gaming experience that becomes an integral part of players' lives, measuring success beyond data and reviews."
            }
          />
        </div>
      </section>
      <section className="bg-customWhite px-[8vw] pt-[80px] pb-[100px] 2xl:px-[240px]">
        <h2 className="text-customBlack mb-[40px] text-center text-(length:--font-lg) font-bold uppercase">
          Our Team
        </h2>
        <div className="">
          <ul className="flex flex-wrap items-center justify-center gap-x-[10px] gap-y-[50px] md:gap-y-[50px] xl:gap-x-[50px]">
            {employees.map((employee) => {
              return (
                <li key={employee.id} className="mx-auto">
                  <EmployeeCard employee={employee} />
                </li>
              );
            })}
            <li className="group relative m-auto">
              <JoinCard />
            </li>
          </ul>
        </div>
      </section>
    </article>
  );
}
