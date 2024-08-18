"use client";

import { ChromeReader, FeatherIcon, QuestionAnswer } from "@/lib/icon-library";
import { cn } from "@/lib/utils";
import { useState } from "react";

export default function AppContent() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-7 right-[2.125rem] flex items-center gap-[1.625rem] *:cursor-pointer  *:transition-all *:flex *:items-center *:justify-center *:rounded-full">
      {/* TASK */}
      <div
        className={cn(
          "bg-white hover:bg-neutral-100 translate-x-[138%] -z-[1] opacity-0 size-[3.75rem]",
          {
            "translate-x-0 opacity-100": open,
          }
        )}
      >
        <ChromeReader className="size-[1.667rem]" />
      </div>

      {/* CHAT */}
      <div
        className={cn(
          "bg-white hover:bg-neutral-100 translate-x-[138%] -z-[1] opacity-0 size-[3.75rem]",
          {
            "translate-x-0 opacity-100": open,
          }
        )}
      >
        <QuestionAnswer className="size-[1.667rem]" />
      </div>

      {/* TRIGGER */}
      <div
        className="bg-[#2F80ED] size-[4.25rem] hover:bg-[#2F80ED]/80 duration-150"
        onClick={() => setOpen(!open)}
      >
        <FeatherIcon />
      </div>
    </div>
  );
}
