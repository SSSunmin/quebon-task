"use client";
import { productData } from "@/app/product/page";
import styled from "@emotion/styled";
import { useRouter } from "next/navigation";

const Card = styled.div`
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

const EllipsisText = styled.p`
  width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
`;

const Title = styled(EllipsisText)`
  text-align: center;
  font-size: 15px;
  margin-bottom: 10px;
  -webkit-line-clamp: 2;
`;

const Price = styled.p`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 10px;
`;

const Desc = styled(EllipsisText)`
  font-size: 15px;
  -webkit-line-clamp: 3;
`;

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
