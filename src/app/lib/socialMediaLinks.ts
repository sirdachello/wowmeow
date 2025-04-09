import linkedin_white from "public/images/icons/socials/linkedin-white.svg";
import x_white from "public/images/icons/socials/x-white.svg";
import facebook_white from "public/images/icons/socials/facebook-white.svg";
import instagram_white from "public/images/icons/socials/instagram-white.svg";
import linkedin from "public/images/icons/socials/linkedin.svg";
import x from "public/images/icons/socials/x.svg";
import facebook from "public/images/icons/socials/facebook.svg";
import instagram from "public/images/icons/socials/instagram.svg";
import { StaticImageData } from "next/image";

type Media = {
    label: string,
    href: string,
    image: StaticImageData
}

  export const socialMediaLinks: Media[] = [
    { label: "LinkedIn", href: "https://linkedin.com", image: linkedin },
    { label: "Twitter", href: "https://x.com", image: x },
    { label: "Facebook", href: "https://facebook.com", image: facebook },
    { label: "Instagram", href: "https://instagram.com", image: instagram },
  ];

  export const socialMediaLinksWhite: Media[] = [
    { label: "LinkedIn", href: "https://linkedin.com", image: linkedin_white },
    { label: "Twitter", href: "https://x.com", image: x_white },
    { label: "Facebook", href: "https://facebook.com", image: facebook_white },
    { label: "Instagram", href: "https://instagram.com", image: instagram_white },
  ];