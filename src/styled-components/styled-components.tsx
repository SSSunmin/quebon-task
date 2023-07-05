"use client";
import styled from "@emotion/styled";

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
export const ProductTitle = styled.p`
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
  width: 100%;
  background-color: beige;
  padding: 15px 0px;
  border-radius: 8px;
`;
