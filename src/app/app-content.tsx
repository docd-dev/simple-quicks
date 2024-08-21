"use client";

import ActiveBtn from "@/components/features/ActiveBtn";
import InboxBtn from "@/components/features/InboxBtn";
import TaskBtn from "@/components/features/TaskBtn";
import TriggerPopup from "@/components/features/TriggerPopup";
import useMounted from "@/hooks/useMounted";
import { cn, sleep } from "@/lib/utils";
import { useAppStore } from "@/stores/app.stores";
import { useEffect, useState } from "react";
import MessageList from "@/components/features/inbox/MessageList";
import MessageContent from "@/components/features/inbox/MessageContent";
import TaskContent from "@/components/features/task/TaskContent";

export default function AppContent() {
  const mounted = useMounted();
  const { mode, setMode, chatRoom, setChatRoom, clear } = useAppStore();
  const [open, setOpen] = useState(false);
  const [activeMode, setActiveMode] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!mounted) return;
    setActiveMode(mode);

    const fetchDone = async () => {
      await sleep(500);
      setChatRoom(null);
      setLoading(false);
    };

    fetchDone();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mounted, mode]);

  useEffect(() => {
    console.log(chatRoom);
  }, [chatRoom]);

  return (
    <div className="fixed bottom-7 right-[2.125rem] flex items-end gap-[1.625rem]  *:transition-all *:duration-150">
      {/* TASK BTN */}
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

      {/* INBOX BTN */}
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

      {/* TRIGGER POPUP BTN */}
      {!activeMode && <TriggerPopup onClick={() => setOpen(!open)} />}

      {activeMode && (
        <>
          {/* QUICK CONTAINER */}
          <div
            className={cn(
              "fixed bottom-28 right-0 md:right-[2.125rem] bg-white h-5/6 md:h-[46.063rem] w-full md:w-[45.875rem] rounded-md py-6 px-8 text-neutral-950 flex flex-col flex-1",
              {
                "p-0": chatRoom,
                "pb-0": activeMode === "task",
              }
            )}
          >
            {activeMode === "inbox" && (
              <>
                {/* INBOX PANEL */}
                {!chatRoom && (
                  <MessageList
                    loading={loading}
                    onClick={(chat) => {
                      setChatRoom(chat);
                    }}
                  />
                )}
                {chatRoom && <MessageContent />}
              </>
            )}

            {activeMode === "task" && <TaskContent loading={loading} />}
          </div>

          <ActiveBtn
            onClick={() => {
              setOpen(false);
              clear();
            }}
          />
        </>
      )}
    </div>
  );
}
