import { createContext, useContext, useState } from "react";

export type TransactionContextType = {
  setDate: React.Dispatch<React.SetStateAction<Date>>;
  date: Date;
};

const TransactionContext = createContext<TransactionContextType | null>(null);

export function TransactionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [date, setDate] = useState(new Date());

  return (
    <TransactionContext.Provider value={{ date, setDate }}>
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
