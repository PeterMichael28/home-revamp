import { create } from "zustand";

export const useFormStore = create((set) => ({
  allFields: {},
  updateFields: (data) => set(() => ({ allFields: data })),
}));
