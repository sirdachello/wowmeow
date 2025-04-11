import Image, { StaticImageData } from "next/image";

export default function HeaderBackgroundImage({src, alt}: {src: StaticImageData, alt: string}) {
  return (
    <div className="relative z-[-1] h-[200px] sm:h-[300px] md:h-[400px] lg:h-[540px]">
      <Image
        className="object-cover"
        fill
        src={src}
        placeholder="blur"
        alt={alt}
      />
    </div>
  );
}
