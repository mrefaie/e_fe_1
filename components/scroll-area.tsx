import { cn } from "@/lib/utils";

export default function ScrollArea({
  children,
  maxHeight,
}: {
  children: React.ReactNode;
  maxHeight: string;
}) {
  return (
    <div className={cn("overflow-y-auto w-full", `h-[${maxHeight}]`)}>
      {children}
    </div>
  );
}
