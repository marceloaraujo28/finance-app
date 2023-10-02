import {
  Category,
  PaymentMethod,
  Transaction,
} from "../../components/Transaction/types";

export type ICategoryItem = {
  id: number;
  label: string;
  value: Category;
};

export type ITransactionTypes = {
  id: number;
  label: string;
  value: Transaction;
};

export type IPaymentMethods = {
  id: number;
  label: string;
  value: PaymentMethod;
};
