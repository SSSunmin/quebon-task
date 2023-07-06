"use client";
import styled from "@emotion/styled";
import exp from "constants";

export const breakpoints = {
  xs: "360px",
  s: "425px",
  m: "768px",
  l: "992px",
  xl: "1400px",
};

export const MainSection = styled.div`
  padding: 100px;
`;
export const ColumnFlexDiv = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
`;
export const FlexDiv = styled(MainSection)`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: ${breakpoints.m}) {
    padding: 50px 30px;
  }
`;

/* 헤더 */
export const Menu = styled.div`
  background-color: #f9f9ee;
  list-style: none;
  display: flex;
  align-items: center;
  padding: 10px 50px;
  @media (min-width: ${breakpoints.xs}) {
    padding: 25px 30px;
    img {
      width: 140px;
      height: 50px;
    }
  }
`;

export const MenuBtn = styled.span`
  padding: 20px 50px;
  cursor: pointer;
  @media (min-width: ${breakpoints.xs}) {
    padding: 15px 20px;
  }
  @media (min-width: ${breakpoints.s}) {
    padding: 20px 40px;
  }
`;

export const Badge = styled.span`
  background-color: red;
  padding: 2px 5px;
  font-size: 12px;
  color: white;
  font-weight: 600;
  position: absolute;
  top: -5px;
  right: -20px;
`;

/* 상품 목록 페이지 */
export const GridDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 250px);
  gap: 20px;

  @media (min-width: ${breakpoints.xs}) {
    grid-template-columns: repeat(1, 250px);
  }
  @media (min-width: ${breakpoints.s}) {
    grid-template-columns: repeat(2, 250px);
  }
  @media (min-width: ${breakpoints.m}) {
    grid-template-columns: repeat(3, 250px);
  }
  @media (min-width: ${breakpoints.l}) {
    grid-template-columns: repeat(4, 250px);
  }
  @media (min-width: ${breakpoints.xl}) {
    grid-template-columns: repeat(5, 250px);
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  cursor: pointer;
  :hover {
    box-shadow: 0px 0px 20px 1px gray;
  }
  img {
    width: 200px;
    height: 200px;
    margin-bottom: 10px;
    object-fit: contain;
  }
`;

export const EllipsisText = styled.p`
  width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
`;

export const Title = styled(EllipsisText)`
  text-align: center;
  font-size: 15px;
  margin-bottom: 10px;
  -webkit-line-clamp: 2;
`;

export const Price = styled.p`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 10px;
`;

export const Desc = styled(EllipsisText)`
  font-size: 15px;
  -webkit-line-clamp: 3;
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
  @media (max-width: ${breakpoints.s}) {
    padding: 50px;
    > div {
      width: 100%;
    }
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  @media (max-width: ${breakpoints.m}) {
    padding: 50px;
    > div {
      width: 100%;
    }
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: 500px;
  margin-left: 50px;
  justify-content: space-between;
  > div:last-of-type {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
  @media (max-width: ${breakpoints.s}) {
    margin-left: 0px;
    height: fit-content;
  }
  @media (max-width: ${breakpoints.m}) {
    margin-left: 0px;
    height: fit-content;
  }
`;
export const ProductName = styled.p`
  font-size: 30px;
  font-weight: 600;
  margin-bottom: 10px;
  @media (max-width: ${breakpoints.s}) {
    font-size: 20px;
    text-align: center;
    margin-bottom: 20px;
  }
  @media (max-width: ${breakpoints.m}) {
    font-size: 25px;
    margin: 20px 0px;
  }
`;

export const ProductPrice = styled.p`
  font-size: 30px;
  font-weight: 600;
  margin-bottom: 50px;
  text-align: end;
  @media (max-width: ${breakpoints.s}) {
    font-size: 20px;
  }
  @media (max-width: ${breakpoints.m}) {
    font-size: 25px;
  }
`;
export const Button = styled.button`
  background-color: beige;
  padding: 15px 30px;
  border-radius: 8px;
  font-size: 0.8rem;
`;
export const SmallButton = styled.button`
  background-color: beige;
  width: 100%;
  padding: 10px;
  font-size: 0.7rem;
  border-radius: 8px;
  @media (min-width: ${breakpoints.xl}) {
    width: 100%;
    font-size: 0.8rem;
  }
`;
export const CartButton = styled(Button)`
  width: 100%;
`;

/* 수량 변경 Input */
export const AmountCounterWrapper = styled.div<{ isShoppingBasket: boolean }>`
  width: ${(props) => (props.isShoppingBasket ? "10vw" : "")};
  display: ${(props) => (props.isShoppingBasket ? "flex" : "")};
  justify-content: ${(props) => (props.isShoppingBasket ? "center" : "")};
  @media (max-width: ${breakpoints.s}) {
    margin-top: 20px;
    width: 25vw;
  }
  @media (max-width: ${breakpoints.m}) {
    margin-top: 20px;
    width: 25vw;
  }
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
export const BasketInfoBox = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  border-bottom: 1px solid gray;
  padding: 20px 20px;
  @media (max-width: ${breakpoints.m}) {
    width: 85%;
    :first-of-type {
      border-top: 1px solid gray;
    }
    flex-direction: column;
  }
`;
export const CheckBoxWrapper = styled.div`
  width: 100px;
  text-align: center;

  @media (max-width: ${breakpoints.m}) {
    width: 100%;
    text-align: start;
  }
`;
export const ProductImg = styled.img`
  width: 8vw;
  height: 8vw;
  margin: 1vw;
  object-fit: contain;

  @media (max-width: ${breakpoints.m}) {
    width: 40%;
    height: 50%;
  }
`;

export const MediaParagraph = styled.p`
  @media (max-width: ${breakpoints.s}) {
    width: 100%;
  }
`;
export const SmallParagraph = styled(MediaParagraph)`
  width: 100px;
  text-align: center;
`;
export const MediumParagraph = styled(MediaParagraph)`
  width: 10vw;
  text-align: center;
  @media (max-width: ${breakpoints.s}) {
    margin-top: 20px;
    :last-of-type {
      margin-bottom: 20px;
    }
  }
  @media (max-width: ${breakpoints.m}) {
    margin-top: 20px;
    :last-of-type {
      margin-bottom: 20px;
    }
  }
`;
export const LargeParagraph = styled(MediaParagraph)`
  width: 30vw;
  text-align: center;
`;

export const SelectPurchaseDiv = styled.div`
  margin-top: 20px;
  @media (max-width: ${breakpoints.s}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    > span {
      text-align: center;
      margin-right: 0px !important;
      margin-bottom: 20px;
    }
  }
`;

/* 결제완료 창 */
export const PurchaseInfoWrapper = styled(ColumnFlexDiv)`
  justify-content: space-evenly;
`;
export const PurchaseInfoBoxWrapper = styled.div`
  width: 100%;
  height: 70%;
  overflow-y: scroll;
  margin-bottom: 20px;
  @media (max-width: ${breakpoints.m}) {
    p {
      width: 90%;
    }
  }
`;
export const PurchaseInfoBox = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding-bottom: 20px;
  margin-bottom: 20px;
  border-bottom: 2px solid gray;
  :first-of-type {
    padding-top: 20px;
    border-top: 2px solid gray;
  }
  :last-of-type {
    margin-bottom: 0px;
  }
  @media (max-width: ${breakpoints.s}) {
    margin-bottom: 0px;
    :first-of-type {
      padding-top: 0px;
    }
  }
  @media (max-width: ${breakpoints.m}) {
    flex-direction: column;
  }
`;
export const PriceAndAmountBox = styled.div`
  flex-grow: 0.5;
  display: flex;
  justify-content: space-between;
  @media (max-width: ${breakpoints.m}) {
    span {
      margin-left: 5px;
    }
  }
`;
export const PurchasePriceBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
  font-size: 20px;
  font-weight: 600;
  p:first-of-type {
    margin-bottom: 15px;
  }
  @media (max-width: ${breakpoints.s}) {
    font-size: 16px;
    p:first-of-type {
      margin-bottom: 0px;
    }
  }
`;
export const ModalBackGround = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 50;
  background-color: rgba(0, 0, 0, 0.75);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Modal = styled.div`
  @keyframes slide-down {
    from {
      opacity: 0;
      transform: translateY(-4rem);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  position: fixed;
  width: 50vw;
  height: 60vh;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  z-index: 60;
  padding: 30px 20px;
  animation: slide-down 500ms ease-out forwards;
  @media (max-width: ${breakpoints.s}) {
    width: 70vw;
  }
`;
