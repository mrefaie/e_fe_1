"use client";
import { cn } from "@/lib/utils";

export default function CardSeparator({ className }: { className?: string }) {
  return (
    <div className={cn("px-[15px] py-[10px] h-auto w-full", className)}>
      <div className={cn("h-[0.7px] w-full bg-[#CDCDCD] flex-1", className)} />
    </div>
  );
}
