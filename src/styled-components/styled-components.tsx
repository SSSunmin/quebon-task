"use client";
import styled from "@emotion/styled";

/* 상품 상세페이지 */
export const DetailPageRoot = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 76px);
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

export const CartButton = styled.button`
  width: 100%;
  background-color: beige;
  padding: 15px 0px;
  border-radius: 8px;
`;

export const CountInput = styled.input`
  border: 2px solid lightgray;
  height: 36px;
  width: 60px;
  text-align: center;
`;

export const MiniButton = styled.button`
  background-color: lightgray;
  margin-bottom: 20px;
  height: 40px;
  width: 40px;
`;
