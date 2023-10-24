import { ICategoryItem, IPaymentMethods, ITransactionTypes } from "../types";

export const categoriesArray: ICategoryItem[] = [
  { id: 1, label: "Alimentação", value: "Food" },
  { id: 2, label: "Assinaturas e serviços", value: "Subscriptions" },
  { id: 3, label: "Bares e restaurantes", value: "BarsRestaurants" },
  { id: 4, label: "Casa", value: "Home" },
  { id: 5, label: "Compras", value: "Shopping" },
  { id: 6, label: "Cuidados Pessoais", value: "PersonalCare" },
  { id: 7, label: "Dívidas e empréstimos", value: "DebtsLoans" },
  { id: 8, label: "Educação", value: "Education" },
  { id: 9, label: "Família e filhos", value: "FamilyKids" },
  { id: 10, label: "Impostos e taxas", value: "TaxesFees" },
  { id: 11, label: "Investimentos", value: "Investments" },
  { id: 12, label: "Lazer e hobbies", value: "LeisureHobbies" },
  { id: 13, label: "Mercados", value: "Markets" },
  { id: 14, label: "Outros", value: "Others" },
  { id: 15, label: "Pets", value: "Pets" },
  { id: 16, label: "Presentes e doações", value: "GiftsDonations" },
  { id: 17, label: "Roupas", value: "Clothing" },
  { id: 18, label: "Saúde", value: "Health" },
  { id: 19, label: "Trabalho", value: "Work" },
  { id: 20, label: "Transporte", value: "Transportation" },
  { id: 21, label: "Viagem", value: "Travel" },
];

export const transactionTypeArray: ITransactionTypes[] = [
  { id: 1, label: "Receita", value: "income" },
  { id: 2, label: "Despesa", value: "expense" },
];

export const paymentMethods: IPaymentMethods[] = [
  { id: 1, label: "Dinheiro", value: "Cash" },
  { id: 2, label: "PIX", value: "PIX" },
  { id: 3, label: "Cartão", value: "Card" },
  { id: 1, label: "Outros", value: "Other" },
];
