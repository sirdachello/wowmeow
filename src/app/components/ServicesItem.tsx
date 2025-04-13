export default function ServicesItem({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <>
      <h2 className="text-customYellow mb-4 text-nowrap lg:text-(length:--font-sm-plus) 2xl:text-(length:--font-md) font-bold uppercase">
        {title}
      </h2>
      <p className="text-customWhite leading-[30px]">{description}</p>
    </>
  );
}
