import { cn } from "@/lib/utils";

export default function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "box-border flex flex-col items-start border border-solid border-[#EEEEEE] rounded-md px-0 py-[10px] h-fit card-shadow gap-0 bg-white w-[370px]",
        className
      )}
    >
      {children}
    </div>
  );
}
