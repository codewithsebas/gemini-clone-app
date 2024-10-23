import { create } from "zustand";

interface ChatState {
  messages: { question: string; answer: string | null }[];
  addMessage: (question: string, answer: string | null) => void;
}

export const useChatStore = create<ChatState>((set) => ({
  messages: [],
  addMessage: (question, answer) =>
    set((state) => ({
      messages: [...state.messages, { question, answer }],
    })),
}));
