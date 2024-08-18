"use client";

import { ChromeReader, FeatherIcon, QuestionAnswer } from "@/lib/icon-library";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

export default function AppContent() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-7 right-[2.125rem] flex items-end gap-[1.625rem] *:cursor-pointer  *:transition-all *:duration-150">
      {/* TASK */}
      <div
        className={cn(
          "flex flex-col items-center gap-3.5 translate-x-[295%] -z-[1] opacity-0",
          {
            "translate-x-0 opacity-100": open,
          }
        )}
      >
        <Image
          src="/images/task.png"
          alt="task"
          width={31.39}
          height={12.02}
          quality={100}
          loading="eager"
          className="select-none"
        />
        <div
          className={cn(
            "bg-white hover:bg-neutral-100 size-[3.75rem] flex items-center justify-center rounded-full"
          )}
        >
          <ChromeReader className="size-[1.667rem]" />
        </div>
      </div>

      {/* CHAT */}
      <div
        className={cn(
          "flex flex-col items-center gap-3.5 translate-x-[150%] -z-[1] opacity-0",
          {
            "translate-x-0 opacity-100": open,
          }
        )}
      >
        <Image
          src="/images/inbox.png"
          alt="task"
          width={38.88}
          height={12.01}
          quality={100}
          loading="eager"
          className="select-none"
        />
        <div
          className={cn(
            "bg-white hover:bg-neutral-100 size-[3.75rem] flex items-center justify-center rounded-full"
          )}
        >
          <QuestionAnswer className="size-[1.667rem]" />
        </div>
      </div>

      {/* TRIGGER */}
      <div
        className="bg-[#2F80ED] size-[4.25rem] hover:bg-blue-600 flex items-center justify-center rounded-full"
        onClick={() => setOpen(!open)}
      >
        <FeatherIcon />
      </div>
    </div>
  );
}
