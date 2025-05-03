import Image from "next/image";
import Link from "next/link";
import reviewBackground from "public/images/ServicesPage/ReviewsSection/reviewBG.png";
import catReviewer from "public/images/nav-catThumbsUp.png";

export default function ReviewContactUsComponent() {
  return (
    <div className="flex justify-center">
      <div className="relative mb-[200px]">
        <div className="text-customBlack p-[20px] sm:mb-[-50px] sm:p-[40px]">
          <Image
            src={reviewBackground}
            alt=""
            className={`test absolute inset-0 z-[-1] h-full w-full`}
          />

          <style jsx global>{`
            .test {
              max-width: 640px;
            }
          `}</style>
          <div className="max-w-[560px]">
            <h3 className="mb-[10px] text-(length:--font-sm-plus) font-bold text-balance uppercase sm:mb-[30px] sm:text-(length:--font-md)">
              Want your testimonial to be here?
            </h3>
            <p className="leading-[25px] sm:leading-[30px]">
              The team at Wow Meow Games is always open to collaboration and
              ready to help you bring your most ambitious projects to life. If
              you&#39;d like to see your success featured on our site, let&#39;s
              work together!
            </p>
            <p className="leading-[25px] sm:leading-[30px]">
              <Link href={"#contacts"}>
                <span className="bg-customBackground text-customYellow inline-block px-4 font-bold transition-transform duration-200 [clip-path:polygon(3%_8%,100%_0,97%_92%,0_100%)] hover:scale-105">
                  Contact us
                </span>
              </Link>{" "}
              and let&#39;s start creating something great!
            </p>
          </div>
        </div>
        <div className="relative left-[22%] h-auto w-[150px] translate-y-[30%] sm:left-[60px] sm:h-[222px] sm:w-[240px]">
          <Image
            src={catReviewer}
            height={222}
            width={240}
            alt="A cat in a baseball cap holding a controller, and giving thumbs up, clearly satisfied."
          />
        </div>
      </div>
    </div>
  );
}
