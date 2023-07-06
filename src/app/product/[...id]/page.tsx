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
import { useRecoilValue, useSetRecoilState } from "recoil";
import { SelectProduct } from "@/RecoilState";

const getSingleData = async (id: number) => {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

const DetailPage = ({ params }: { params: { id: string[] } }) => {
  const [data, setData] = useState<productData>();
  const [amount, setAmount] = useState(1);
  const setSelected = useSetRecoilState(SelectProduct);
  const UpdateShoppingBasket = useUpdateList();
  const id = parseInt(params.id[0]);

  useEffect(() => {
    const datafetch = async () => {
      const data: productData = await getSingleData(id);
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

  const UpdateHandler = () => {
    UpdateShoppingBasket({ data, amount, isShoppingBasket: false });
    setSelected([]);
  };

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
          <CartButton onClick={UpdateHandler}>장바구니추가</CartButton>
        </div>
      </ProductInfo>
    </DetailPageRoot>
  );
};

export default DetailPage;
