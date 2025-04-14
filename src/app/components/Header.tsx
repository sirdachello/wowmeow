// TODO: split into components after adapting to mobile

import Image from "next/image";
import Link from "next/link";
import { menuItems } from "../lib/routingLinks";
import { socialMediaLinks } from "../lib/socialMediaLinks";

// Images
import Logo from "public/images/wowLogo.png";
import nav_catThumbsUp from "public/images/nav-catThumbsUp.png";
import nav_socialbox from "public/images/nav-socialbox.svg";

// Components
import HamburgerComponent from "./Hamburger";

export default function Header() {
  return (
    <header className="bg-customBlack h-[80px] relative">
      <div className="relative mx-auto flex max-w-[1920px] items-center justify-between px-[20px] sm:px-[60px]">
        <Link href={"/"}>
          <Image
            className="relative top-3 left-4 z-[1] transition-transform duration-300 hover:scale-[140%] sm:top-4 sm:scale-[120%]"
            src={Logo}
            height={80}
            alt="WoW Meow logo"
          ></Image>
        </Link>
        <div className="min-950:hidden">
          <HamburgerComponent />
        </div>
        <nav className="max-950:hidden 1300:absolute 1300:top-[50%] 1300:left-[50%] 1300:translate-x-[-50%] 1300:translate-y-[-50%]">
          <ul className="text-customWhite flex gap-[40px] text-(length:--font-sm-plus) text-nowrap uppercase">
            {menuItems.map((item) => (
              <li
                key={item.href}
                className="hover:text-customYellow transition-colors duration-300"
              >
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="1300:flex relative top-1 left-1 hidden items-start">
          <Image
            width={56}
            height={56}
            src={nav_catThumbsUp}
            alt="A smiling cat holding a controller, giving the thumbs up."
          ></Image>
          <div className="relative flex shrink-0">
            <Image aria-hidden src={nav_socialbox} alt="" />
            <ul className="absolute top-[6px] right-[8px] flex gap-2.5">
              {socialMediaLinks.map((media) => (
                <li key={media.href}>
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href={media.href}
                  >
                    <Image
                      className="transition-transform duration-150 hover:scale-125"
                      src={media.image}
                      alt={`${media.label} logo`}
                      width={30}
                      height={30}
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
