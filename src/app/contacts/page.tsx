import Image from "next/image";
import ContactForm from "../components/ContactForm";

import logo from "public/images/wowLogo.svg";

export default function About() {
  return (
    <article className="bg-customBackground px-[240] pt-[80px] pb-[200px]">
      <h1 className="text-customWhite mb-[40px] text-center text-(length:--font-lg) font-bold uppercase">
        Let's Talk
      </h1>
      <div className="flex items-center justify-around">
        <div>
          <Image src={logo} alt="WoW Meow Logo" height={200} />
          <div aria-hidden className="bg-customBlack w-[30px] h-full"></div>
        </div>
        <ContactForm />
      </div>
    </article>
  );
}
