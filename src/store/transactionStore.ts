import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

type SplitItem = {
  category: string;
  amount: number;
};

type Transaction = {
  amount: number;
  date: string;
  notes: string;
  split: SplitItem[];
  department: string;
};

type TransactionState = {
  transactions: Transaction[];
  createTransaction: (newTransaction: Transaction) => void;
  updateTransaction: (index: number, updatedTransaction: Transaction) => void;
};

export const useTransactionStore = create<TransactionState>()(
  persist(
    set => ({
      transactions: [],
      createTransaction: newTransaction =>
        set(state => ({
          transactions: [newTransaction, ...state.transactions],
        })),
      updateTransaction: (index, updatedTransaction) =>
        set(state => {
          const newTransactions = [...state.transactions];
          newTransactions[index] = updatedTransaction;
          return { transactions: newTransactions };
        }),
    }),
    {
      name: 'transaction-storage',
      storage: createJSONStorage(() => localStorage),
      migrate: (persistedState: any, version) => {
        if (version === 0) {
          // Add department to existing transactions
          const updatedState = {
            ...persistedState,
            transactions: persistedState.transactions.map(
              (tx: Transaction) => ({
                ...tx,
                department: tx.department || '',
              })
            ),
          };
          return updatedState;
        }
        return persistedState;
      },
    }
  )
);
