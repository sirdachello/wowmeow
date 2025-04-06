export default function DividerBox({ text }: { text: string }) {
  return (
    <div className="bg-customYellow m-6 h-[66px] w-[500px] flex items-center justify-center [clip-path:polygon(0_0,98%_0,100%_100%,0_100%)]">
      <span className={`text-(length:--font-md-plus) font-bold uppercase`}>
        {text}
      </span>
    </div>
  );
}
