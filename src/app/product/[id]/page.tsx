"use client";
import { productData } from "../page";
import {
  DetailPageRoot,
  ProductPrice,
  ProductName,
  ProductInfo,
  CartButton,
} from "@/styled-components/styled-components";
import { useEffect, useState } from "react";
import AmountCounter from "@/components/AmountCounter";
import useUpdateList from "@/hooks/useUpdateList";

const getSingleData = async (id: number) => {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

const DetailPage = ({ params }: { params: { id: number } }) => {
  const [data, setData] = useState<productData>();
  const [amount, setAmount] = useState(1);
  const UpdateShoppingBasket = useUpdateList();

  useEffect(() => {
    const datafetch = async () => {
      const data: productData = await getSingleData(params.id);
      if (data != null) {
        setData(data);
      }
    };
    datafetch();
  }, []);

  const AmountHandler = (amount: number) => {
    setAmount(amount);
  };

  if (data === undefined) {
    return;
  }
  return (
    <DetailPageRoot>
      <div>
        <img alt={data.title} src={data.image} />
      </div>
      <ProductInfo>
        <div>
          <ProductName>{data.title}</ProductName>
          <ProductPrice>{`$ ${data.price}`}</ProductPrice>
          <p>{data!.description}</p>
        </div>
        <div>
          <AmountCounter
            setCardAmount={AmountHandler}
            isShoppingBasket={false}
          />
          <CartButton
            onClick={() =>
              UpdateShoppingBasket({ data, amount, isShoppingBasket: false })
            }
          >
            장바구니추가
          </CartButton>
        </div>
      </ProductInfo>
    </DetailPageRoot>
  );
};

export default DetailPage;
