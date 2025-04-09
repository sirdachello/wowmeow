export default function Loading() {
  return (
    <div className="bg-customYellow m-6 mx-auto flex h-[66px] w-[300px] items-center justify-center [clip-path:polygon(0_0,98%_0,100%_100%,0_100%)]">
      <span className={`text-(length:--font-md-plus) font-bold uppercase`}>
        Loading...
      </span>
    </div>
  );
}
