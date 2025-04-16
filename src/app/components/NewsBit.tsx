import Image from "next/image";

import { newsBit } from "../lib/news";

export default function NewsBit({info}: {info: newsBit}) {
    return (
        <div className="flex [clip-path:polygon(0%_0,98%_0,100%_100%,0_100%)] bg-customWhite overflow-hidden">
        <Image src={info.image} height={242} alt={info.imageAlt} className="[clip-path:polygon(0%_0,95%_0,100%_100%,0_100%)] object-cover overflow-visible hidden min-lg:flex min-w-[326px]"/>
        <div className="text-customBlack leading-[30px] pl-[20px] sm:pl-[40px] xl:pl-[80px] pr-[20px] md:pr-[40px] xl:pr-[80px] flex flex-col justify-center py-[30px]">
          <h2 className="uppercase text-(length:--font-md) font-bold mb-[10px]">{info.title}</h2>
          <p className="text-[14px] mb-[15px]">{info.date}</p>
          <p className="text-(length:--font-sm) ">{info.description}</p>
        </div>
      </div>
    )
}