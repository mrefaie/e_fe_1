import { cn } from "@/lib/utils";

export default function Button({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <button
      className={cn(
        "px-[20px] py-[10px] rounded-[4px] bg-[#FFCE22]  w-full h-[40px]",
        "line-height-[130%] text-[14px] font-normal letter-spacing-[0] text-[#1F2128] text-center",
        "hover:bg-[#FFD84D] active:bg-[#FFCE22]",
        "cursor-pointer",
        className
      )}
    >
      {children}
    </button>
  );
}
