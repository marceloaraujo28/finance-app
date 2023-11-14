import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import Feather from "@expo/vector-icons/Feather";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import React from "react";

export type Category =
  | "Food"
  | "BarsRestaurants"
  | "Home"
  | "Shopping"
  | "PersonalCare"
  | "DebtsLoans"
  | "Education"
  | "FamilyKids"
  | "TaxesFees"
  | "Investments"
  | "LeisureHobbies"
  | "Markets"
  | "Others"
  | "Pets"
  | "GiftsDonations"
  | "Clothing"
  | "Health"
  | "Work"
  | "Transportation"
  | "Travel"
  | "Subscriptions";

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

export enum Categories {
  Food = "Food",
  BarsRestaurants = "BarsRestaurants",
  Home = "Home",
  Shopping = "Shopping",
  PersonalCare = "PersonalCare",
  DebtsLoans = "DebtsLoans",
  Education = "Education",
  FamilyKids = "FamilyKids",
  TaxesFees = "TaxesFees",
  Investments = "Investments",
  LeisureHobbies = "LeisureHobbies",
  Markets = "Markets",
  Others = "Others",
  Pets = "Pets",
  GiftsDonations = "GiftsDonations",
  Clothing = "Clothing",
  Health = "Health",
  Work = "Work",
  Transportation = "Transportation",
  Travel = "Travel",
  Subscriptions = "Subscriptions",
}

export const paymentNames = {
  Cash: "Dinheiro",
  Card: "Cartão",
  PIX: "Pix",
  Other: "Outros",
};
export const CategoriesInfo: Record<
  Categories,
  { translation: string; icon: React.ReactNode; backgroundColor: string }
> = {
  [Categories.Food]: {
    translation: "Alimentação",
    icon: <Ionicons name="fast-food-outline" size={25} />,
    backgroundColor: "#FFD700", // Amarelo
  },
  [Categories.BarsRestaurants]: {
    translation: "Bares e restaurantes",
    icon: <AntDesign name="rest" size={25} />,
    backgroundColor: "#87CEEB", // Azul Claro
  },
  [Categories.Home]: {
    translation: "Casa",
    icon: <AntDesign name="home" size={25} />,
    backgroundColor: "#98FB98", // Verde Claro
  },
  [Categories.Shopping]: {
    translation: "Compras",
    icon: <Feather name="shopping-bag" size={25} />,
    backgroundColor: "#FFA07A", // Salmão Claro
  },
  [Categories.PersonalCare]: {
    translation: "Cuidados Pessoais",
    icon: <AntDesign name="user" size={25} />,
    backgroundColor: "#E0FFFF", // Azul Claro
  },
  [Categories.DebtsLoans]: {
    translation: "Dívidas e empréstimos",
    icon: <AntDesign name="creditcard" size={25} />,
    backgroundColor: "#FFFFE0", // Amarelo Claro
  },
  [Categories.Education]: {
    translation: "Educação",
    icon: <AntDesign name="book" size={25} />,
    backgroundColor: "#FFA500", // Laranja
  },
  [Categories.FamilyKids]: {
    translation: "Família e filhos",
    icon: <MaterialIcons name="family-restroom" size={25} />,
    backgroundColor: "#98FB98", // Verde Claro
  },
  [Categories.TaxesFees]: {
    translation: "Impostos e taxas",
    icon: <Feather name="percent" size={25} />,
    backgroundColor: "#87CEEB", // Azul Claro
  },
  [Categories.Investments]: {
    translation: "Investimentos",
    icon: <AntDesign name="barschart" size={25} />,
    backgroundColor: "#FFD700", // Amarelo
  },
  [Categories.LeisureHobbies]: {
    translation: "Lazer e hobbies",
    icon: <FontAwesome name="soccer-ball-o" size={25} />,
    backgroundColor: "#FFC0CB", // Rosa Claro
  },
  [Categories.Markets]: {
    translation: "Mercados",
    icon: <AntDesign name="shoppingcart" size={25} />,
    backgroundColor: "#FFA500", // Laranja
  },
  [Categories.Others]: {
    translation: "Outros",
    icon: <AntDesign name="question" size={25} />,
    backgroundColor: "#E0FFFF", // Azul Claro
  },
  [Categories.Pets]: {
    translation: "Pets",
    icon: <MaterialIcons name="pets" size={25} />,
    backgroundColor: "#FFFFE0", // Amarelo Claro
  },
  [Categories.GiftsDonations]: {
    translation: "Presentes e doações",
    icon: <AntDesign name="gift" size={25} />,
    backgroundColor: "#FFA07A", // Salmão Claro
  },
  [Categories.Clothing]: {
    translation: "Roupas",
    icon: <AntDesign name="skin" size={25} />,
    backgroundColor: "#98FB98", // Verde Claro
  },
  [Categories.Health]: {
    translation: "Saúde",
    icon: <AntDesign name="medicinebox" size={25} />,
    backgroundColor: "#87CEEB", // Azul Claro
  },
  [Categories.Work]: {
    translation: "Trabalho",
    icon: <MaterialIcons name="business-center" size={25} />,
    backgroundColor: "#FFD700", // Amarelo
  },
  [Categories.Transportation]: {
    translation: "Transporte",
    icon: <AntDesign name="car" size={25} />,
    backgroundColor: "#FFC0CB", // Rosa Claro
  },
  [Categories.Travel]: {
    translation: "Viagem",
    icon: <MaterialCommunityIcons name="airplane" size={25} />,
    backgroundColor: "#E0FFFF", // Azul Claro
  },
  [Categories.Subscriptions]: {
    translation: "Assinaturas e serviços",
    icon: <AntDesign name="tool" size={25} />,
    backgroundColor: "#FFA07A", // Salmão Claro
  },
};
