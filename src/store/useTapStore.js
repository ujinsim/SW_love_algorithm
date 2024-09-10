import { create } from "zustand";

export const useTabStore = create((set) => ({
  activeTab: "전체",
  setActiveTab: (tab) => set({ activeTab: tab }),
}));
