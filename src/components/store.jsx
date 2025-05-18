import { create } from "zustand"

const useStore = create((set) => ({
  isDesktop: false,
  setIsDesktop: (value) => set({ isDesktop: value }),
}))

export default useStore