import { createContext, useContext, useState } from "react";

export type TransactionContextType = {
  setDate: React.Dispatch<React.SetStateAction<Date>>;
  date: Date;
  updateList: boolean;
  setUpdateList: React.Dispatch<React.SetStateAction<boolean>>;
};

const TransactionContext = createContext<TransactionContextType | null>(null);

export function TransactionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [date, setDate] = useState(new Date());
  const [updateList, setUpdateList] = useState(false);

  return (
    <TransactionContext.Provider
      value={{ date, setDate, updateList, setUpdateList }}
    >
      {children}
    </TransactionContext.Provider>
  );
}

export function useTransactionContext() {
  const context = useContext(TransactionContext);
  if (!context) {
    throw new Error("useTransaction must be used within an TransactionContext");
  }
  return context;
}
