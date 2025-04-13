"use client";

// misc
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// animations
import './animations/menuAnimations.css'

// images
import nav_catThumbsUp from "public/images/nav-catThumbsUp.png";
import nav_socialbox from "public/images/nav-socialbox.svg";

// data
import { menuItems } from '../lib/routingLinks';
import { socialMediaLinks } from '../lib/socialMediaLinks';

// components
import Hamburger from "hamburger-react";

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const pathname = usePathname();

  // Handle animation timing
  useEffect(() => {
    if (isOpen) {
      setMenuVisible(true);
    } else {
      // Delay hiding the menu until after the fade-out animation
      const timer = setTimeout(() => {
        setMenuVisible(false);
      }, 300); // Has to match with duration-300
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent body scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <div className="">
      <div className="absolute top-4 right-0 z-50 px-[20px] sm:px-[60px]">
        <Hamburger
          toggled={isOpen}
          toggle={setIsOpen}
          color="#F8F8F8"
          label="Show menu"
          hideOutline={false}
        />
      </div>
      
      {/* Menu overlay with animations */}
      {menuVisible && (
        <div 
          className={`
            bg-customBlack text-customWhite fixed inset-0 z-40 
            flex flex-col items-center justify-center gap-6 p-4 uppercase
            transition-opacity duration-300 ease-in-out
            ${isOpen ? 'opacity-100' : 'opacity-0'}
          `}
        >
          <nav className="flex flex-col items-center">
            <ul className="text-customWhite flex flex-col gap-3 text-center text-(length:--font-sm-plus) uppercase">
              {menuItems.map((item, index) => (
                <li
                  key={item.href}
                  className="hover:text-customYellow transition-colors duration-300"
                  style={{
                    opacity: 0,
                    transform: 'translateY(-20px)',
                    animation: isOpen 
                      ? `fadeInDown 0.4s ease forwards ${0.2 + index * 0.1}s` 
                      : 'none'
                  }}
                >
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
          
          {/* Social section with animation */}
          <div 
            className="relative top-1 left-1 flex items-start"
            style={{
              opacity: 0,
              transform: 'translateY(20px)',
              animation: isOpen 
                ? 'fadeInUp 0.5s ease forwards 0.6s' 
                : 'none'
            }}
          >
            <Image
              src={nav_catThumbsUp}
              width={70}
              height={70}
              alt="A smiling cat holding a controller, giving the thumbs up."
            />
            <div className="relative flex shrink-0">
              <Image aria-hidden src={nav_socialbox} alt="" />
              <ul className="absolute top-[6px] right-[8px] flex gap-2.5">
                {socialMediaLinks.map((media, index) => (
                  <li 
                    key={media.label}
                    style={{
                      opacity: 0,
                      animation: isOpen 
                        ? `fadeIn 0.3s ease forwards ${0.7 + index * 0.1}s` 
                        : 'none'
                    }}
                  >
                    <a
                      href={media.href}
                      rel="noopener noreferrer"
                      target="_blank"
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
      )}
    </div>
  );
}