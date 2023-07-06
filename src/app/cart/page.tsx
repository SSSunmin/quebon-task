"use client";
import {
  CartInfo,
  SelectProduct,
  SelectedCartInfo,
  TotlaCartPrice,
} from "@/RecoilState";
import BasketCard from "@/components/BasketCard";
import PurchasePopup from "@/components/PurchasePopup";
import useDeleteList from "@/hooks/useDeleteList";
import {
  Button,
  SmallParagraph,
  MediumParagraph,
  LargeParagraph,
  FlexDiv,
  TableHead,
  CheckBox,
  PurchaseInfoBox,
  SmallButton,
  PurchaseInfoWrapper,
  PurchasePriceBox,
} from "@/styled-components/styled-components";
import { ChangeEvent, useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

const Cart = () => {
  const [allCheck, setAllCheck] = useState(false);
  const [show, setShow] = useState(false);
  const [selected, setselected] = useRecoilState(SelectProduct);
  const CartList = useRecoilValue(CartInfo);
  const TotalPrice = useRecoilValue(TotlaCartPrice);
  const selectedProduct = useRecoilValue(SelectedCartInfo);
  const DeleteShoppingBasket = useDeleteList();

  useEffect(() => {
    if (selected.length === CartList.length && selected.length > 0) {
      setAllCheck(true);
    }
  }, [selected, CartList]);

  const CheckBoxHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      const allList = CartList.map((list) => list.id);
      setselected(allList);
    } else {
      setselected([]);
    }
    setAllCheck((prev) => !prev);
  };

  const ShowPurchasePopup = () => {
    setShow(true);
  };

  const PurchaseCompletedHandler = () => {
    DeleteShoppingBasket([...selected]);
    setShow(false);
  };

  return (
    <FlexDiv
      style={{
        flexDirection: "column",
      }}
    >
      <TableHead>
        <CheckBox
          type="checkbox"
          checked={allCheck}
          onChange={(e) => CheckBoxHandler(e)}
        />
        <MediumParagraph>이미지</MediumParagraph>
        <LargeParagraph>제품명</LargeParagraph>
        <MediumParagraph>판매가</MediumParagraph>
        <MediumParagraph>수량</MediumParagraph>
        <MediumParagraph>구매가</MediumParagraph>
        <SmallParagraph>선택</SmallParagraph>
      </TableHead>
      {CartList.map((data) => (
        <BasketCard
          key={data.title}
          data={data}
          checkValue={allCheck}
          ShowPurchasePopup={ShowPurchasePopup}
        />
      ))}
      <div
        style={{
          marginTop: "20px",
        }}
      >
        <span
          style={{
            marginRight: "200px",
            lineHeight: "16px",
            fontSize: "20px",
            fontWeight: 600,
          }}
        >{`선택상품 총 합계 : $ ${TotalPrice}`}</span>
        <Button
          style={{ marginRight: "50px" }}
          disabled={TotalPrice === "0.00" ? true : false}
          onClick={ShowPurchasePopup}
        >
          선택상품 구매하기
        </Button>
      </div>
      {show && (
        <PurchasePopup>
          <PurchaseInfoWrapper>
            <div style={{ width: "100%" }}>
              {selectedProduct.map((info) => (
                <PurchaseInfoBox key={info.id}>
                  <MediumParagraph>{info.title}</MediumParagraph>
                  <span>{`$ ${info.price}`}</span>
                  <span>X</span>
                  <span>{info.amount}</span>
                  <span>=</span>
                  <span>{`$ ${info.price * info.amount}`}</span>
                </PurchaseInfoBox>
              ))}
            </div>
            <PurchasePriceBox>
              <p>총 결제금액</p>
              <p>{`$ ${TotalPrice}`}</p>
            </PurchasePriceBox>
            <SmallButton onClick={PurchaseCompletedHandler}>확인</SmallButton>
          </PurchaseInfoWrapper>
        </PurchasePopup>
      )}
    </FlexDiv>
  );
};
export default Cart;
