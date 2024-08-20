import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AppState {
  mode: string | null;
  setMode: (mode: string | null) => void;
  msgId: string | null;
  setMsgId: (msgId: string | null) => void;
  clear: () => void;
}

// Persistent Zustand store for user data
export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      mode: null,
      setMode: (mode) => set({ mode }),
      msgId: null,
      setMsgId: (msgId) => set({ msgId }),
      clear: () => set({ mode: null, msgId: null }),
    }),
    { name: "app-quick" }
  )
);
