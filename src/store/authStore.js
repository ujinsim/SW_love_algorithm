import create from "zustand";
import { persist } from "zustand/middleware";

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
