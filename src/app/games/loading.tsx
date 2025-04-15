export default function Loading() {
  return (
    <div className="bg-customYellow mx-auto m-6 h-[66px] w-[300px] flex items-center justify-center [clip-path:polygon(0_0,98%_0,100%_100%,0_100%)]">
      <span className={`text-(length:--font-md-plus) font-bold uppercase`}>
        Loading...
      </span>
    </div>
  );
}
