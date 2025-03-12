import { create } from 'zustand';

interface UserAfkStoreType {
  isAfk: boolean;
  setIsAfk: (isAfk: boolean) => void;
}

export const userAfkStore = create<UserAfkStoreType>((set) => ({
  isAfk: false,
  setIsAfk: (isAfk) => set({ isAfk }),
}));
