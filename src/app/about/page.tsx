import Image, { StaticImageData } from "next/image";
import aboutBackground from "public/images/AboutPage/aboutBackground.png";
import catSalute from "public/images/AboutPage/Cats/catSalute.png";
import catArtist from "public/images/AboutPage/Cats/catArtist.png";
import catGamer from "public/images/AboutPage/Cats/catGamer.png";
import EmployeeCard from "../components/EmployeeCard";
import catRecruiter from "public/images/AboutPage/Cats/catRecruiter.png";

import arrowRight from "public/images/AboutPage/arrow-right.svg";

import Valentine from "public/images/AboutPage/Employees/Valentine Kliuchev/Valentine.jpg";
import ValentineCat from "public/images/AboutPage/Employees/Valentine Kliuchev/ValentineCat.png";
import Link from "next/link";

export type Employee = {
  id: string;
  name: string;
  title: string;
  catImage: StaticImageData;
  employeePhoto: StaticImageData;
};

const employees: Employee[] = [
  {
    id: "1",
    name: "Valentine Kliuchev",
    title: "Front-End Developer",
    catImage: ValentineCat,
    employeePhoto: Valentine,
  },
  {
    id: "3",
    name: "Valentine Kliuchev",
    title: "Front-End Developer",
    catImage: ValentineCat,
    employeePhoto: Valentine,
  },
  {
    id: "12",
    name: "Valentine Kliuchev",
    title: "Front-End Developer",
    catImage: ValentineCat,
    employeePhoto: Valentine,
  },
  {
    id: "11",
    name: "Valentine Kliuchev",
    title: "Front-End Developer",
    catImage: ValentineCat,
    employeePhoto: Valentine,
  },
  {
    id: "111",
    name: "Valentine Kliuchev",
    title: "Front-End Developer",
    catImage: ValentineCat,
    employeePhoto: Valentine,
  },
  {
    id: "1111",
    name: "Valentine Kliuchev",
    title: "Front-End Developer",
    catImage: ValentineCat,
    employeePhoto: Valentine,
  },
  {
    id: "4",
    name: "Valentine Kliuchev",
    title: "Front-End Developer",
    catImage: ValentineCat,
    employeePhoto: Valentine,
  },
];

export default function About() {
  return (
    <article>
      <div className="relative z-[-1] h-[200px] sm:h-[300px] md:h-[400px] lg:h-[540px]">
        <Image
          className="object-cover"
          fill
          src={aboutBackground}
          placeholder="blur"
          alt="A group of professional cats working diligently to deliver a project"
        />
      </div>
      <section className="bg-customBackground px-[8vw] pt-[80px] pb-[100px] 2xl:px-[240px]">
        <h1 className="text-customWhite mb-[90px] text-center text-(length:--font-lg) font-bold uppercase">
          About
        </h1>
        <div className="flex flex-col gap-[105px]">
          <div className="relative mx-auto max-w-[1440px]">
            <div className="bg-customYellow absolute top-[-30px] left-[30px] z-10 flex h-[45px] w-[250] items-center justify-start pl-[20px] [clip-path:polygon(0%_0,98%_0,100%_100%,0_100%)] md:top-[-45px] md:h-[66px] md:w-[450] md:pr-[60px] lg:w-[600px]">
              <h2 className="text-(length:--font-sm-plus) font-bold uppercase md:text-(length:--font-md)">
                Our Mission
              </h2>
            </div>
            <div className="bg-customWhite relative flex-row items-center justify-center gap-[60px] max-md:px-[20px] md:flex md:pr-[40px] md:pl-[80px] xl:h-[177px]">
              <p className="text-customBlack max-950:py-8 text-(length:--font-sm) leading-[25px] font-normal md:leading-[30px]">
                Founded in 2023, Wow Meow it's a source of enchantment at the
                heart of game experience. Our small team is dedicated to
                creating unique moments that, while they may only take a brief
                instant, will stay with you for a long time.{" "}
              </p>

              <Image
                className="950:bottom-7 relative bottom-2 mx-auto size-[212px]"
                src={catSalute}
                alt="A smiling cat saluting you!"
              />
            </div>
          </div>

          <div className="relative mx-auto max-w-[1440px]">
            <div className="bg-customYellow absolute top-[-30px] right-[30px] z-10 flex h-[45px] w-[250] items-center justify-end pr-[20px] [clip-path:polygon(2%_0,100%_0,100%_100%,0_100%)] md:top-[-45px] md:h-[66px] md:w-[450] md:pr-[60px] lg:w-[600px]">
              <h2 className="text-(length:--font-sm-plus) font-bold uppercase md:text-(length:--font-md)">
                Gaming industry
              </h2>
            </div>
            <div className="bg-customWhite relative flex-row-reverse items-center justify-center gap-[60px] max-md:px-[20px] md:flex md:pr-[80px] md:pl-[40px] xl:h-[177px]">
              <p className="text-customBlack max-950:py-8 text-(length:--font-sm) leading-[25px] font-normal md:leading-[30px]">
                Founded in 2023, Wow Meow it's a source of enchantment at the
                heart of game experience. Our small team is dedicated to
                creating unique moments that, while they may only take a brief
                instant, will stay with you for a long time.
              </p>

              <Image
                className="950:bottom-7 relative mx-auto size-[212px]"
                src={catGamer}
                alt="A smiling cat saluting you!"
              />
            </div>
          </div>

          <div className="relative mx-auto max-w-[1440px]">
            <div className="bg-customYellow absolute top-[-30px] left-[30px] z-10 flex h-[45px] w-[250] items-center justify-start pl-[20px] [clip-path:polygon(0%_0,98%_0,100%_100%,0_100%)] md:top-[-45px] md:h-[66px] md:w-[450] md:pr-[60px] lg:w-[600px]">
              <h2 className="text-(length:--font-sm-plus) font-bold uppercase md:text-(length:--font-md)">
                Our Creations
              </h2>
            </div>
            <div className="bg-customWhite relative flex-row items-center justify-center gap-[60px] max-md:px-[20px] md:flex md:pr-[40px] md:pl-[80px] xl:h-[177px]">
              <p className="text-customBlack max-950:py-8 text-(length:--font-sm) leading-[25px] font-normal md:leading-[30px]">
                Our creations stand out from the crowd with their original
                vision, meticulous work and cute characters. Meow Wow seeks to
                create a lasting, unique, and captivating gaming experience that
                becomes an integral part of players' lives, measuring success
                beyond data and reviews.
              </p>

              <Image
                className="950:bottom-7 relative bottom-2 mx-auto size-[212px]"
                src={catArtist}
                alt="A smiling cat saluting you!"
              />
            </div>
          </div>
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
              <Link href={"/"}>
                <div
                  aria-hidden
                  className="bg-customBlack absolute top-[50%] left-[50%] z-[1] h-[200px] w-[160px] translate-x-[-50%] translate-y-[-50%] transition-all duration-200 [clip-path:polygon(3%_3%,100%_0,97%_97%,0_100%)] group-hover:[clip-path:polygon(0_0,97%_3%,100%_100%,3%_97%)] sm:h-[293px] sm:w-[220px] lg:h-[386px] lg:w-[331px]"
                ></div>
                <div className="group bg-customYellow hover:bg-customYellow-highlight relative z-10 flex h-[180px] w-[140px] cursor-pointer items-center overflow-hidden transition-all duration-300 sm:h-[273px] sm:w-[200px] lg:h-[355px] lg:w-[299px]">
                  <div className="text-customBlack relative flex w-full flex-col items-center justify-center transition-all duration-300 group-hover:translate-y-[-10px] sm:group-hover:translate-y-[-10px] lg:group-hover:translate-y-[-70px]">
                    <h3 className="px-[22px] text-center text-(length:--font-sm-plus) leading-8 font-bold uppercase sm:mb-[10px] sm:px-[75px] sm:text-(length:--font-md)">
                      Want to join?
                    </h3>
                    <p className="text-[12px] font-normal sm:text-(length:--font-sm)">
                      View our vacancies{" "}
                      <span>
                        <Image
                          className="inline-block"
                          src={arrowRight}
                          alt=""
                        />
                      </span>
                    </p>
                  </div>
                  <Image
                    className="absolute bottom-[-50px] left-[15%] h-[80px] w-auto transition-all duration-300 group-hover:bottom-[-40px] sm:bottom-[-150px] sm:h-[220px]"
                    src={catRecruiter}
                    alt={`A smiling cat-recruiter with a Resume in his paws`}
                  />
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </article>
  );
}
