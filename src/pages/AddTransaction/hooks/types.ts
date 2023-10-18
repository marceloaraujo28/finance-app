import { ITransactions } from "../../../components/Transaction/types";

export interface IInsertParams extends ITransactions {
  userId: string;
}
