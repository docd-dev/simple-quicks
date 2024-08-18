"use client";

import ActiveBtn from "@/components/features/ActiveBtn";
import InboxBtn from "@/components/features/InboxBtn";
import TaskBtn from "@/components/features/TaskBtn";
import TriggerPopup from "@/components/features/TriggerPopup";
import useMounted from "@/hooks/useMounted";
import { cn } from "@/lib/utils";
import { useAppStore } from "@/stores/app.stores";
import { useEffect, useState } from "react";

export default function AppContent() {
  const mounted = useMounted();
  const { mode, setMode } = useAppStore();
  const [open, setOpen] = useState(false);
  const [activeMode, setActiveMode] = useState<string | null>(null);

  useEffect(() => {
    if (!mounted) return;
    setActiveMode(mode);
  }, [mounted, mode]);

  return (
    <div className="fixed bottom-7 right-[2.125rem] flex items-end gap-[1.625rem] *:cursor-pointer  *:transition-all *:duration-150">
      {/* TASK */}
      <TaskBtn
        className={cn({
          "translate-x-0 opacity-100":
            (open && !activeMode) || activeMode === "inbox",
          "translate-x-[130%]": activeMode === "inbox",
        })}
        onClick={() => {
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
          setMode("inbox");
        }}
      />

      {/* TRIGGER */}
      {!activeMode && <TriggerPopup onClick={() => setOpen(!open)} />}

      {activeMode && (
        <ActiveBtn
          onClick={() => {
            setOpen(false);
            setMode(null);
          }}
        />
      )}
    </div>
  );
}
