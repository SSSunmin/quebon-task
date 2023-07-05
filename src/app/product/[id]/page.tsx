"use client";
import { CartInfo, CartProps } from "@/RecoilState";
import { productData } from "../page";
import {
  DetailPageRoot,
  ProductPrice,
  ProductName,
  ProductInfo,
  CartButton,
} from "@/styled-components/styled-components";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import AmountCounter from "@/components/AmountCounter";

const replaceItemAtIndex = (
  arr: CartProps[],
  index: number,
  newValue: CartProps
) => {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
};

const getSingleData = async (id: number) => {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

const Page = ({ params }: { params: { id: number } }) => {
  const [data, setData] = useState<productData>();
  const [amount, setAmount] = useState(1);
  const [shoppingBasket, setShoppingBasket] = useRecoilState(CartInfo);
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

  const UpdateShoppingBasket = (data: productData) => {
    const index = shoppingBasket.findIndex((list) => data.id === list.id);
    if (index === -1) {
      setShoppingBasket([
        {
          id: data.id,
          name: data.title,
          price: data.price,
          amount: amount,
          img: data.image,
        },
        ...shoppingBasket,
      ]);
    } else {
      const newList = replaceItemAtIndex(shoppingBasket, index, {
        id: data.id,
        name: data.title,
        price: data.price,
        amount: shoppingBasket[index].amount + amount,
        img: data.image,
      });
      setShoppingBasket(newList);
    }
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
          <AmountCounter setCardAmount={AmountHandler} />
          <CartButton onClick={() => UpdateShoppingBasket(data)}>
            장바구니추가
          </CartButton>
        </div>
      </ProductInfo>
    </DetailPageRoot>
  );
};

export default Page;
