"use client";
import styled from "@emotion/styled";

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
`;

/* 상품 목록 페이지 */
export const GridDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 250px);
  gap: 20px;
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

/* 결제완료 창 */
export const PurchaseInfoWrapper = styled(ColumnFlexDiv)`
  justify-content: space-evenly;
`;
export const PurchaseInfoBox = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding-bottom: 20px;
  margin-bottom: 20px;
  border-bottom: 2px solid gray;
  :first-child {
    padding-top: 20px;
    border-top: 2px solid gray;
  }
  :last-child {
    margin-bottom: 0px;
  }
`;
export const PurchasePriceBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
  font-size: 20px;
  font-weight: 600;
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
  width: 45vw;
  height: 45vh;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  z-index: 60;
  padding: 30px 20px;
  animation: slide-down 500ms ease-out forwards;
`;
