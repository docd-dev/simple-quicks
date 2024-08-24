import { InboxItem } from "@/app/constants/inbox-list";
import { Message } from "@/app/constants/message-list";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AppState {
  mode: string | null;
  setMode: (mode: string | null) => void;
  chatRoom: InboxItem | null;
  setChatRoom: (chatRoom: InboxItem | null) => void;
  replyId: Message | null;
  setReplyId: (replyId: Message | null) => void;
  clear: () => void;
}

// Persistent Zustand store for user data
export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      mode: null,
      setMode: (mode) => set({ mode }),
      chatRoom: null,
      setChatRoom: (chatRoom) => set({ chatRoom }),
      replyId: null,
      setReplyId: (replyId) => set({ replyId }),
      clear: () => set({ mode: null, chatRoom: null, replyId: null }),
    }),
    { name: "app-quick" }
  )
);
