import { persist } from "zustand/middleware";
import { create } from "zustand";

export const useAuthStore = create(
  persist(
    (set) => ({
      instagramId: null,
      setInstagramId: (instagramId) => set({ instagramId }),
      clearInstagramId: () => set({ instagramId: null }),
    }),
    {
      name: "auth-storage",
      getStorage: () => localStorage,
    }
  )
);
