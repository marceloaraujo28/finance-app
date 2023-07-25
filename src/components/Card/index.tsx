import * as S from "./styles";
import VisaIcon from "../../../assets/visa.svg";
import ChipCard from "../../../assets/chipcard.svg";

interface CardProps {
  balance: number;
  cardName: string;
}

export function Card({ balance, cardName }: CardProps) {
  return (
    <S.Card>
      <S.InfosCard>
        <S.LeftCard>
          <S.TextBalance>Saldo na Conta</S.TextBalance>
          <S.ValueBalance>{`R$${balance || 0}`}</S.ValueBalance>
        </S.LeftCard>
        <S.RightCard>
          <ChipCard width={50} height={50} />
        </S.RightCard>
      </S.InfosCard>
      <S.InfoPerson>
        <S.CardName>{cardName}</S.CardName>
        <VisaIcon width={120} height={70} />
      </S.InfoPerson>
    </S.Card>
  );
}
