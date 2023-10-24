import {
  ITransactions,
  Transaction,
} from "../../../components/Transaction/types";

export interface IInsertParams extends ITransactions {
  userId: string;
  id?: number;
  oldValue?: string;
  oldTransaction?: Transaction;
}
