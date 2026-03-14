import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface ModeState {
  isFormal: boolean;
  toggleMode: () => void;
}

export const useModeStore = create<ModeState>()(
  persist(
    (set) => ({
      isFormal: true,
      toggleMode: () => set((state) => ({ isFormal: !state.isFormal })),
    }),
    {
      name: 'mode-storage',
    }
  )
);