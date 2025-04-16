import Image from "next/image";
import HeaderBackgroundImage from "../components/HeaderBackgroundImage";
import investorsBackgroundImage from "public/images/backgrounds/investorsBackground.png";
import catInvestor from "public/images/InvestorsPage/catInvestor.png";
import ContactComponent from "../components/ContactComponent";
export default function InvestorsPage() {
  return (
    <article>
      <HeaderBackgroundImage
        src={investorsBackgroundImage}
        alt={
          "Three cats cheering on the account of stocks going up."
        }
      />
      <section>
      <div className="bg-customWhite uppercase leading-[30px] text-customBlack pt-[80px] pb-[100px] px-[20px] sm:px-[50px] md:px-[50px] lg:px-[80] xl:px-[150px] 2xl:px-[240px]">
        <h1 className="text-center font-bold text-(length:--font-md) md:text-(length:--font-lg) mb-[30px] leading-normal">For Investors</h1>
        <h2 className="text-center font-bold text-(length:--font-sm-plus) md:text-(length:--font-md) mb-[25px] leading-normal text-balance">invest in the Future of Gaming with WowMeow Games!</h2>
        <p>Invest in a Game Studio with Proven Expertise.</p>
        <p>
          WowMeow Games is a team of industry professionals bringing together
          experts with years of experience in game development. We create casual
          and mid-core games with a distinctive style, engaging mechanics, and
          well-balanced monetization strategies.
        </p>
        <p>Why consider Partnering with us?</p>
        <ul className="list-disc pl-6">
          <li>
            Our team consists of specialists with 13+ years in game development,
            having worked on successful mobile and MMO RPG projects.
          </li>
          <li>
            We develop games based on in-depth market analysis, trends, and
            player preferences.
          </li>
          <li>
            We implement proven monetization strategies: in-app purchases, ads,
            and live-ops for sustainable revenue growth.
          </li>
        </ul>
        <p>
          Want to learn more about our projects and collaboration opportunities?
        </p>
        <p> Leave your details, and we&apos;ll share more information.</p>
        
      <Image
        className="mx-auto mt-[70px]"
        src={catInvestor}
        height={224}
        width={233}
        alt="A serious looking cat in a suit, sitting at the desk."
      />
      </div>
      </section>
      <section>
        <ContactComponent contactsPage={false}/>
      </section>
    </article>
  );
}
