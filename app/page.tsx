"use client";
import Button from "@/components/button";
import Card from "@/components/card";
import CardItem from "@/components/card-item";
import CardSeparator from "@/components/card-separator";
import ScrollArea from "@/components/scroll-area";
import { useState } from "react";

const pages = Array.from({ length: 10 }, (_, index) => `Page ${index + 1}`);

export default function Home() {
  const [selectedPages, setSelectedPages] = useState<string[]>([]);

  const allPagesSelected = pages.every((page) => selectedPages.includes(page));

  const toggleAllPages = () => {
    if (allPagesSelected) {
      setSelectedPages([]);
    } else {
      setSelectedPages([...pages]);
    }
  };

  const togglePage = (page: string) => {
    setSelectedPages((prev: string[]) =>
      prev.includes(page)
        ? prev.filter((p: string) => p !== page)
        : [...prev, page]
    );
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <Card className="w-[370px]">
        <CardItem isChecked={allPagesSelected} onClick={toggleAllPages}>
          All Pages
        </CardItem>
        <CardSeparator />
        <ScrollArea maxHeight="164px">
          {pages.map((page) => (
            <CardItem
              key={page}
              isChecked={selectedPages.includes(page)}
              onClick={() => togglePage(page)}
            >
              {page}
            </CardItem>
          ))}
        </ScrollArea>
        <CardSeparator />
        <div className={"px-[15px] py-[10px] h-auto w-full"}>
          <Button>Done</Button>
        </div>
      </Card>
    </div>
  );
}
