export type Category =
  | "Housing"
  | "Food"
  | "Transportation"
  | "Health"
  | "Education"
  | "Leisure"
  | "Work"
  | "Others";

export type PaymentMethod = "Card" | "PIX" | "Cash" | "Other";

export type Transaction = "income" | "expense";
export interface ITransactions {
  value: string;
  name: string;
  category: Category;
  created_at?: string;
  description?: string;
  paymentType: PaymentMethod;
  transactionType: Transaction;
}
