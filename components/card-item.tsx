import { cn } from "@/lib/utils";
import Checkbox from "./checkbox";

export default function CardItem({
  children,
  className,
  isChecked,
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  isChecked: boolean;
  onClick: () => void;
}) {
  return (
    <div
      className={cn(
        "flex flex-row items-center justify-between gap-[5px]",
        "line-height-[130%] text-[14px] font-normal letter-spacing-[0] text-[#1F2128] text-left",
        "py-[8px] pl-[22px] pr-[15px] h-[42px]",
        "border-box w-full group",
        "cursor-pointer",
        className
      )}
      onClick={onClick}
    >
      <div>{children}</div>
      <Checkbox checked={isChecked} />
    </div>
  );
}
