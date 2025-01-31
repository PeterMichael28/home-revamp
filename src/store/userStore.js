import { create } from "zustand";

export const useUserStore = create((set) => ({
  token: sessionStorage.getItem("token") || null,
  updateToken: (data) => set(() => ({ token: data })),
}));
