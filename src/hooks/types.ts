import { ITransactions } from "../components/Transaction/types";

export interface IGetTransactions {
  userId?: string;
  year: number;
  month: number;
}

export type TransactionsData = {
  id: number;
} & ITransactions;

export type GetIncomeOrExpenseProps = {
  userId?: string;
  transactiontype: string;
  year: number;
  month: number;
};
