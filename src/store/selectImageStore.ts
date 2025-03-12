import { create } from 'zustand';

interface SelectedImageStore {
  selectedImage: string;
  setSelectedImage: (selectedImage: string) => void;
  resetSelectedImage: () => void;
}

export const useSelectedImageStore = create<SelectedImageStore>((set) => ({
  selectedImage: '',
  setSelectedImage: (selectedImage: string) => {
    set({ selectedImage: selectedImage });
  },
  resetSelectedImage: () => set({ selectedImage: '' }),
}));
