import Image from "next/image";
import ContactForm from "./ContactForm";
import { BASE_MEDIA_LINKS } from "@/app/lib/socialMediaLinks";
import logo from "public/images/wowLogo.svg";

export default function ContactComponent({
  contactsPage,
}: {
  contactsPage: boolean;
}) {
  return (
    <article className="bg-customBackground px-[20px] sm:px-[50px] md:px-[50px] lg:px-[80] xl:px-[150px] 2xl:px-[240px] pt-[40px] pb-[100px]    lg:pt-[80px] lg:pb-[200px] ">
      {contactsPage ? (
        <h1 className="text-customWhite mb-[40px] text-center text-(length:--font-lg) font-bold uppercase">
          Let's Talk
        </h1>
      ) : (
        <h2 className="text-customWhite mb-[40px] text-center text-(length:--font-lg) font-bold uppercase">
          Let's Talk
        </h2>
      )}
      <div className="flex flex-col-reverse items-center justify-between md:flex-row md:items-stretch">
        <div className="flex justify-between">
          <div className="flex flex-col justify-between max-md:w-[90vw]">
            <Image
              src={logo}
              alt="WoW Meow Logo"
              height={200}
              className="max-md:mx-auto max-md:my-10 md:ml-auto"
            />
            <div className="text-customWhite text-(length:--font-sm-plus) max-md:text-center">
              <h3 className="mb-[30px] font-bold uppercase lg:text-(length:--font-md)">
                Also available via:
              </h3>
              <div className="flex flex-col gap-[15px] max-lg:text-(length:--font-sm)">
                <div>
                  <a href="mailto:info@wow-meow.fun">
                    <span className="font-bold uppercase">Email:</span>
                    <br />
                    <span className="hover:text-customYellow uppercase underline">
                      info@wow-meow.fun{" "}
                    </span>
                  </a>
                </div>
                <div>
                  <a href="tel:+995557642459">
                    <span className="font-bold uppercase">
                      Telegram / WhatsApp:
                    </span>
                    <br />
                    <span className="hover:text-customYellow">
                      +995(557)642459
                    </span>
                  </a>
                </div>
                <div>
                  <span className="font-bold uppercase">Social media:</span>
                  <br />
                  <a
                    className="hover:text-customYellow uppercase underline"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={BASE_MEDIA_LINKS.linkedin}
                  >
                    LinkedIn
                  </a>
                  <span> | </span>
                  <a
                    className="hover:text-customYellow uppercase underline"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={BASE_MEDIA_LINKS.facebook}
                  >
                    Facebook
                  </a>
                  <span> | </span>
                  <a
                    className="hover:text-customYellow uppercase underline"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={BASE_MEDIA_LINKS.x}
                  >
                    Twitter
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-customGray-dark w-[25px] [clip-path:polygon(0%_2%,100%_0,64%_100%,0_100%)]"></div>
        <ContactForm />
      </div>
    </article>
  );
}
