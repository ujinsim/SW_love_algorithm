import create from "zustand";
import { persist } from "zustand/middleware";

export const useAuthStore = create(
  persist(
    (set) => ({
      user: null,
      authToken: null,
      setUser: (user, authToken) => set({ user, authToken }),
      clearUser: () => set({ user: null, authToken: null }),
    }),
    {
      name: "auth-storage",
      getStorage: () => localStorage,
    }
  )
);
