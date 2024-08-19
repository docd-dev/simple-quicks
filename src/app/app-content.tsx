"use client";

import ActiveBtn from "@/components/features/ActiveBtn";
import ContentLoading from "@/components/features/ContentLoading";
import MessageCard from "@/components/features/inbox/MessageCard";
import SearchInbox from "@/components/features/inbox/Search";
import InboxBtn from "@/components/features/InboxBtn";
import TaskBtn from "@/components/features/TaskBtn";
import TriggerPopup from "@/components/features/TriggerPopup";
import useMounted from "@/hooks/useMounted";
import { cn, sleep } from "@/lib/utils";
import { useAppStore } from "@/stores/app.stores";
import { useEffect, useState } from "react";
import { INBOX_LIST } from "./constants/inbox-list";
import MessageList from "@/components/features/inbox/MessageList";

export default function AppContent() {
  const mounted = useMounted();
  const { mode, setMode } = useAppStore();
  const [open, setOpen] = useState(false);
  const [activeMode, setActiveMode] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!mounted) return;
    setActiveMode(mode);

    const fetchDone = async () => {
      await sleep(500);
      setLoading(false);
    };

    fetchDone();
  }, [mounted, mode]);

  return (
    <div className="fixed bottom-7 right-[2.125rem] flex items-end gap-[1.625rem]  *:transition-all *:duration-150">
      {/* TASK */}
      <TaskBtn
        className={cn({
          "translate-x-0 opacity-100":
            (open && !activeMode) || activeMode === "inbox",
          "translate-x-[130%]": activeMode === "inbox",
        })}
        onClick={() => {
          setLoading(true);
          setMode("task");
        }}
      />

      {/* INBOX */}
      <InboxBtn
        className={cn({
          "translate-x-0 opacity-100":
            (open && !activeMode) || activeMode === "task",
          "-translate-x-[10%]": activeMode === "task",
        })}
        onClick={() => {
          setLoading(true);
          setMode("inbox");
        }}
      />

      {/* TRIGGER */}
      {!activeMode && <TriggerPopup onClick={() => setOpen(!open)} />}

      {activeMode && (
        <>
          {/* QUICK CONTAINER */}
          <div className="fixed bottom-28 right-[2.125rem] bg-white h-[46.063rem] w-[45.875rem] rounded-md py-6 px-[1.375rem] text-neutral-950 flex flex-col">
            {/* INBOX PANEL */}
            <MessageList loading={loading} />
          </div>

          <ActiveBtn
            onClick={() => {
              setOpen(false);
              setMode(null);
            }}
          />
        </>
      )}
    </div>
  );
}
