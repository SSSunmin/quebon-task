"use client";
import styled from "@emotion/styled";

export const ColumnFlexDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const FlexDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 76px);
`;

/* 상품 상세페이지 */
export const DetailPageRoot = styled(FlexDiv)`
  > div {
    width: 500px;
  }
  img {
    width: 100%;
    height: 500px;
    object-fit: contain;
  }
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: 500px;
  margin-left: 50px;
  justify-content: space-between;
  > div:last-child {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
`;
export const ProductName = styled.p`
  font-size: 30px;
  font-weight: 600;
  margin-bottom: 10px;
`;

export const ProductPrice = styled.p`
  font-size: 30px;
  font-weight: 600;
  margin-bottom: 50px;
  text-align: end;
`;
export const Button = styled.button`
  background-color: beige;
  padding: 15px 30px;
  border-radius: 8px;
`;
export const SmallButton = styled.button`
  background-color: beige;
  padding: 10px;
  border-radius: 8px;
`;
export const CartButton = styled(Button)`
  width: 100%;
`;

/* 수량 변경 Input */
export const AmountCounterWrapper = styled.div<{ isShoppingBasket: boolean }>`
  width: ${(props) => (props.isShoppingBasket ? "150px" : "")};
  display: ${(props) => (props.isShoppingBasket ? "flex" : "")};
  justify-content: ${(props) => (props.isShoppingBasket ? "center" : "")};
`;

export const CountInput = styled.input<{ isShoppingBasket: boolean }>`
  border: 2px solid lightgray;
  height: ${(props) => (props.isShoppingBasket ? "26px" : "36px")};
  width: ${(props) => (props.isShoppingBasket ? "40px" : "60px")};
  text-align: center;
`;

export const MiniButton = styled.button<{ isShoppingBasket: boolean }>`
  background-color: lightgray;
  margin-bottom: ${(props) => (props.isShoppingBasket ? "0px" : "20px")};
  height: ${(props) => (props.isShoppingBasket ? "30px" : "40px")};
  width: ${(props) => (props.isShoppingBasket ? "30px" : "40px")};
`;

/* 장바구니 페이지 */
export const TableHead = styled.div`
  display: flex;
  align-items: center;
  border-top: 1px solid gray;
  border-bottom: 1px solid gray;
  padding: 20px 0px;
  width: fit-content;
`;
export const CheckBox = styled.input`
  width: 100px;
  text-align: center;
`;
export const SmallParagraph = styled.p`
  width: 100px;
  text-align: center;
`;
export const MediumParagraph = styled.p`
  width: 160px;
  text-align: center;
`;
export const LargeParagraph = styled.p`
  width: 400px;
  text-align: center;
`;
