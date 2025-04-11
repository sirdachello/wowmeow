import Image, { StaticImageData } from "next/image";

export default function InformationLeft({
  src,
  alt,
  title,
  description,
}: {
  src: StaticImageData;
  alt: string;
  title: string;
  description: string;
}) {
  return (
    <div className="relative mx-auto max-w-[1440px]">
      <div className="bg-customYellow absolute top-[-30px] left-[30px] z-10 flex h-[45px] w-[250] items-center justify-start pl-[20px] [clip-path:polygon(0%_0,98%_0,100%_100%,0_100%)] md:top-[-45px] md:h-[66px] md:w-[450] md:pr-[60px] lg:w-[600px]">
        <h2 className="text-(length:--font-sm-plus) font-bold uppercase md:text-(length:--font-md)">
          {title}
        </h2>
      </div>
      <div className="bg-customWhite relative flex-row items-center justify-center gap-[60px] max-md:px-[20px] md:flex md:pr-[40px] md:pl-[80px] xl:h-[177px]">
        <p className="text-customBlack max-950:py-8 text-(length:--font-sm) leading-[25px] font-normal md:leading-[30px]">
          {description}
        </p>

        <Image
          className="950:bottom-7 relative bottom-2 mx-auto size-[212px]"
          src={src}
          alt={alt}
        />
      </div>
    </div>
  );
}
