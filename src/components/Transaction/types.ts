export type Category =
  | "Housing"
  | "Food"
  | "Transportation"
  | "Health"
  | "Education"
  | "Leisure"
  | "Others";

export type PaymentMethod = "Card" | "PIX" | "Cash" | "Other";

export type Transaction = "income" | "expense";
export interface ITransactions {
  value: number;
  name: string;
  category: Category;
  date: string;
  description?: string;
  paymentType: PaymentMethod;
  transactionType: Transaction;
}
