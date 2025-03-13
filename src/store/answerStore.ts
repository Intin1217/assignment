import { create } from 'zustand';

interface AnswerStoreType {
  answer: ['보라', '웃는', '고래'];
  answerList: string[];
  setAnswer: (answer: string[]) => void;
  resetAnswer: () => void;
}

export const useAnswerStore = create<AnswerStoreType>((set) => ({
  answer: ['보라', '웃는', '고래'],
  answerList: [],
  setAnswer: (answer: string[]) => {
    set({
      answerList: answer,
    });
  },
  resetAnswer: () => {
    set({ answerList: [] });
  },
}));
