"use client";
import { CartInfo, SelectProduct, TotlaCartPrice } from "@/RecoilState";
import BasketCard from "@/components/BasketCard";
import {
  Button,
  SmallParagraph,
  MediumParagraph,
  LargeParagraph,
  FlexDiv,
  TableHead,
  CheckBox,
} from "@/styled-components/styled-components";
import { ChangeEvent, useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

const Cart = () => {
  const CartList = useRecoilValue(CartInfo);
  const TotalPrice = useRecoilValue(TotlaCartPrice);
  const [selected, setselected] = useRecoilState(SelectProduct);
  const [allCheck, setAllCheck] = useState(false);

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
        <BasketCard key={data.title} data={data} checkValue={allCheck} />
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
          }}
        >{`선택상품 총 합계 : $ ${TotalPrice}`}</span>
        <Button style={{ marginRight: "50px" }}>선택상품 구매하기</Button>
      </div>
    </FlexDiv>
  );
};
export default Cart;
