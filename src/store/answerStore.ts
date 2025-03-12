import { create } from 'zustand';

interface AnswerStoreType {
  answer: string[];
  setAnswer: (answer: string[]) => void;
  resetAnswer: () => void;
}

export const useAnswerStore = create<AnswerStoreType>((set) => ({
  answer: [],
  setAnswer: (answer: string[]) => {
    set({
      answer: answer,
    });
  },
  resetAnswer: () => {
    set({ answer: [] });
  },
}));
