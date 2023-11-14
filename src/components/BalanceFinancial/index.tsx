import * as S from "./styles";
import UpArrow from "../../../assets/upArrow.svg";
import DownArrow from "../../../assets/downArrow.svg";
import { formatValue } from "../../utils/formatValue";

interface BalanceFinancialProps {
  name: string;
  value: number;
  type: "up" | "down";
}

export function BalanceFinancial({ name, value, type }: BalanceFinancialProps) {
  const valueToStringAndFormatted = value ? formatValue(String(value)) : "0";

  return (
    <S.BalanceFinancial>
      <S.Icon type={type}>
        {type === "up" ? (
          <UpArrow width={20} height={30} fill={"#fff"} />
        ) : (
          <DownArrow width={20} height={30} fill={"#fff"} />
        )}
      </S.Icon>
      <S.Info>
        <S.Name>{name}</S.Name>
        <S.Value
          adjustsFontSizeToFit
          numberOfLines={1}
          type={type}
        >{`R$${valueToStringAndFormatted}`}</S.Value>
      </S.Info>
    </S.BalanceFinancial>
  );
}
