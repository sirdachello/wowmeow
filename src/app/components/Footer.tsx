import Image from "next/image";
import Link from "next/link";
import { socialMediaLinksWhite } from "../lib/socialMediaLinks";
import { menuItems } from "../lib/routingLinks";

export default function Footer() {
  return (
    <footer className="bg-customBlack  md:px-[60px] pt-[25px] pb-[10px] z-[3] relative">
      <div className="mx-auto mb-[35px] flex max-w-[1920px] justify-between">
        <div className="max-950:justify-around max-950:w-full max-520:flex-col-reverse flex max-520:gap-[30px] gap-[60px]">
          <div className="max-950:flex max-950:flex-col max-950:justify-between">
            <div className="max-520:mb-[20px]">
              <h2 className="text-customWhite 1300:text-(length:--font-md) max-520:mb-[10px] mb-[20px] text-(length:--font-sm-plus) font-bold uppercase sm:mb-[40px] max-520:text-center">
                Connect with us:
              </h2>
              <ul className="flex gap-2.5 max-520:justify-center">
                {socialMediaLinksWhite.map((media) => (
                  <li key={media.href}>
                    <a
                      href={media.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        className="transition-transform duration-150 hover:scale-125"
                        src={media.image}
                        alt={`${media.label} logo`}
                        width={40}
                        height={40}
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="min-950:hidden max-520:text-center">
              <h2 className="text-customWhite max-520:mb-[10px] mb-[20px] text-(length:--font-sm-plus) font-bold uppercase sm:mb-[40px]">
                Email:
              </h2>
              <a
                className="text-customWhite hover:text-customYellow text-(length:--font-sm) uppercase underline transition-colors duration-300 sm:text-(length:--font-sm-plus) "
                href="mailto:info@wow-meow.fun"
              >
                info@wow-meow.fun
              </a>
            </div>
          </div>

          <div>
            <h2 className="text-customWhite 1300:text-(length:--font-md) max-950:text-right max-520:text-center mb-[20px] text-(length:--font-sm-plus) font-bold uppercase sm:mb-[40px]">
              Site links:
            </h2>
            <nav>
              <ul className="text-customWhite max-950:text-right max-520:text-center flex flex-col gap-[15px] uppercase min-sm:text-(length:--font-sm-plus)">
                {menuItems.map((route) => (
                  <li
                    key={route.href}
                    className="hover:text-customYellow transition-colors duration-300"
                  >
                    <Link href={route.href}>{route.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
        <div className="max-950:hidden">
          <h2 className="text-customWhite 1300:mr-[320px] 1300:text-(length:--font-md) mr-[20vw] mb-[40px] text-(length:--font-sm-plus) font-bold uppercase">
            Email:
          </h2>
          <a
            className="text-customWhite hover:text-customYellow text-(length:--font-sm-plus) uppercase underline transition-colors duration-300"
            href="mailto:info@wow-meow.fun"
          >
            info@wow-meow.fun
          </a>
        </div>
      </div>
      <div className="flex justify-between max-md:flex-col-reverse">
        <p className="text-customWhite text-[14px] uppercase max-md:text-center">
          @ copyright 2024 wow meow games
        </p>
        <div className="flex gap-[20px] 950:gap-[40px] max-md:justify-center">
          <Link
            className="text-customWhite hover:text-customYellow 950:text-(length:--font-sm-plus) uppercase transition-colors duration-300"
            href={"/privacy"}
          >
            Privacy policy
          </Link>
          <Link
            className="text-customWhite hover:text-customYellow 950:text-(length:--font-sm-plus) uppercase transition-colors duration-300"
            href={"/terms"}
          >
            terms & conditions
          </Link>
        </div>
      </div>
    </footer>
  );
}
