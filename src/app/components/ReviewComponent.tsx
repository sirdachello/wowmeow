"use client";

import Image from "next/image";
import reviewBackground from "public/images/ServicesPage/ReviewsSection/reviewBG.png";
import catReviewer from "public/images/nav-catThumbsUp.png";

export default function ReviewComponent({
  review,
}: {
  review: { name: string; position: string; reviewText: string };
}) {
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
          <h3 className="text-(length:--font-sm-plus) font-bold uppercase sm:text-(length:--font-md)">
            {review.name}
          </h3>
          <p className="mb-[10px] text-[12px] sm:mb-[30px] sm:text-[14px]">
            {review.position}
          </p>
          <p className="leading-[25px] sm:leading-[30px]">
            {review.reviewText}
          </p>
        </div>
      </div>
      <div className="relative left-[22%]  h-auto w-[150px] translate-y-[30%] sm:left-[60px] sm:h-[222px] sm:w-[240px]">
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
