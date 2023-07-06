import { ChangeEvent, useEffect, useState } from "react";
import { CartProps, SelectProduct } from "@/RecoilState";
import AmountCounter from "./AmountCounter";
import styled from "@emotion/styled";
import {
  CheckBox,
  ColumnFlexDiv,
  LargeParagraph,
  MediumParagraph,
  SmallButton,
} from "@/styled-components/styled-components";
import useUpdateList from "@/hooks/useUpdateList";
import { useRecoilState } from "recoil";
import useDeleteList from "@/hooks/useDeleteList";
interface BasketCardProps {
  data: CartProps;
  checkValue: boolean;
  ShowPurchasePopup: () => void;
}

const ProductImg = styled.img`
  width: 120px;
  height: 120px;
  margin: 20px;
  object-fit: contain;
`;

const BasketCard = ({
  data,
  checkValue,
  ShowPurchasePopup,
}: BasketCardProps) => {
  const [check, setCheck] = useState(checkValue);
  const [amount, setAmount] = useState(data.amount);
  const [selected, setselected] = useRecoilState(SelectProduct);
  const DeleteShoppingBasket = useDeleteList();
  const UpdateShoppingBasket = useUpdateList();

  useEffect(() => {
    setCheck(checkValue);
  }, [checkValue]);

  const AmountHandler = (amount: number) => {
    setAmount(amount);
    UpdateShoppingBasket({ data, amount, isShoppingBasket: true });
  };

  const CheckBoxHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setselected([...selected, data.id]);
    } else {
      const filter = selected.filter((id) => data.id !== id);
      setselected(filter);
    }
    setCheck((prev) => !prev);
  };

  const DeleteHandler = () => {
    if (confirm("정말 삭제하시겠습니까?")) {
      DeleteShoppingBasket([data.id]);
    }
  };

  const PurchaseButtonHandler = () => {
    setselected([data.id]);
    ShowPurchasePopup();
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        width: " fit-content",
        borderBottom: "1px solid gray",
      }}
    >
      <CheckBox
        type="checkbox"
        checked={check}
        onChange={(e) => CheckBoxHandler(e)}
      />
      <ProductImg src={data.image} alt={data.title} />
      <LargeParagraph>{data.title}</LargeParagraph>
      <MediumParagraph>{`$ ${data.price}`}</MediumParagraph>
      <AmountCounter
        setCardAmount={AmountHandler}
        isShoppingBasket={true}
        amountProps={amount}
      />
      <MediumParagraph> {`$ ${data.price * amount}`} </MediumParagraph>
      <ColumnFlexDiv
        style={{
          width: "100px",
        }}
      >
        <SmallButton
          style={{ marginBottom: "10px" }}
          onClick={PurchaseButtonHandler}
        >
          구매하기
        </SmallButton>
        <SmallButton onClick={DeleteHandler}>X 삭제</SmallButton>
      </ColumnFlexDiv>
    </div>
  );
};
export default BasketCard;
