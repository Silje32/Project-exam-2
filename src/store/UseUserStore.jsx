import { create } from "zustand";
import { persist } from "zustand/middleware";

const useUserStore = create(
    persist (
        (set) => ({
            user: null,
            setUser: (user) => set({ user: user }),
            clearUser: () => set({ user: null }), 
        }),
        {
            name: "user", 
        }
    )
);

export const useToken = () => useUserStore((state) => state.user?.accessToken);
export const useName = () => useUserStore((state) => state.user?.name);
export const useFollow = () => useUserStore((state) => state.user?.follow);

export const useUserActions = () => {
   const { setUser, clearUser } = useUserStore();
   return { setUser, clearUser };
};

