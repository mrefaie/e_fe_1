import { cn } from "@/lib/utils";

function CheckboxIcon({ className }: { className?: string }) {
  return (
    <svg
      width="18"
      height="13"
      viewBox="0 0 18 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M0.5 7.1L6.53451 12.4672C6.55497 12.4854 6.58626 12.4837 6.6047 12.4635L17.5 0.5"
        stroke="currentColor"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Checkbox({
  className,
  checked,
  onClick,
}: {
  className?: string;
  checked?: boolean;
  onClick?: () => void;
}) {
  const checkboxContainerColorClasses = checked
    ? "bg-[#2469F6] border-[#2469F6] group-hover:border-[#5087F8] group-hover:bg-[#5087F8] group-active:bg-[#5087F8] group-active:outline-[#2469f61a]"
    : "bg-white border-[#CDCDCD] group-hover:border-[#BDBDBD] group-active:outline-[#2469f61a]";

  const checkboxIconColorClasses = checked
    ? "group-hover:text-[#ffffff] group-active:text-[#ffffff] text-[#ffffff]"
    : "group-hover:text-[#E3E3E3] group-active:text-[#878787] text-transparent";

  return (
    <div
      className={cn(
        "w-[35px] h-[35px] flex items-center justify-center group relative",
        className
      )}
      onClick={() => onClick?.()}
    >
      <div
        className={cn(
          "w-[23px] h-[23px] rounded-md border border-solid flex items-center justify-center",
          "group-active:outline-[3px]",
          checkboxContainerColorClasses
        )}
      >
        <CheckboxIcon className={checkboxIconColorClasses} />
      </div>
    </div>
  );
}
