"use client";
import { productData } from "@/app/product/page";
import {
  Card,
  Desc,
  Price,
  Title,
} from "@/styled-components/styled-components";
import { useRouter } from "next/navigation";

const ProductCard = (cardProps: productData) => {
  const router = useRouter();
  return (
    <Card onClick={() => router.push(`/product/${cardProps.id}`)}>
      <img src={cardProps.image} alt={cardProps.title} />
      <Title>{cardProps.title}</Title>
      <Price>{`$${cardProps.price}`}</Price>
      <Desc>{cardProps.description}</Desc>
    </Card>
  );
};
export default ProductCard;
