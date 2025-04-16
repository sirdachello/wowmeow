export default function ServicesItem({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <>
      <h2 className="text-customYellow leading-[30px] mb-4 text-wrap lg:text-(length:--font-sm-plus) 2xl:text-(length:--font-md) font-bold uppercase">
        {title}
      </h2>
      <p className="text-customWhite leading-[30px]">{description}</p>
    </>
  );
}
