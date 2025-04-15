"use client";

import { useState } from "react";
import {Pivot as Hamburger} from "hamburger-react";
import { Link } from "../lib/privacyLinks";

export default function TableOfContentsButton({links}:{links: Link[]}) {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div className="min-950:hidden">
      <div
        className={`transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-[100%]"} bg-customBlack text-customWhite fixed top-0 right-0 z-[55] h-[100vh] w-fit p-8`}
      >
        <nav role="section-navigation">
          <ol className="list-decimal pl-6 text-[12px] underline">
            {links.map((link) => (
              <li key={link.href}>
                <a onClick={toggleOpen} href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <div className="fixed right-[40px] bottom-[40px] z-[3]">
          <Hamburger
            toggled={open}
            toggle={setOpen}
            color="#F8F8F8"
            label="Show table of contents menu"
            hideOutline={false}
          />
        </div>
      </div>
      <div className="fixed right-[40px] bottom-[40px] z-[3] bg-customGray-dark/[50%] rounded-[50%]">
        <Hamburger
          toggled={open}
          toggle={setOpen}
          color="#141414"
          label="Show table of contents menu"
          hideOutline={false}
        />
      </div>
    </div>
  );
}
