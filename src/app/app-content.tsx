"use client";

import InboxBtn from "@/components/features/InboxBtn";
import TaskBtn from "@/components/features/TaskBtn";
import { ChromeReader, FeatherIcon, QuestionAnswer } from "@/lib/icon-library";
import { cn } from "@/lib/utils";
import { useAppStore } from "@/stores/app.stores";
import Image from "next/image";
import { useState } from "react";

export default function AppContent() {
  const [open, setOpen] = useState(false);
  const { mode, setMode } = useAppStore();

  return (
    <div className="fixed bottom-7 right-[2.125rem] flex items-end gap-[1.625rem] *:cursor-pointer  *:transition-all *:duration-150">
      {/* TASK */}
      <TaskBtn
        className={cn({ "translate-x-0 opacity-100": open })}
        onClick={() => {
          setMode("task");
        }}
      />

      {/* INBOX */}
      <InboxBtn
        className={cn({ "translate-x-0 opacity-100": open })}
        onClick={() => {
          setMode("inbox");
        }}
      />

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
