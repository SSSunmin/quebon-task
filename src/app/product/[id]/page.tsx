import { productData } from "../page";
import {
  DetailPageRoot,
  ProductPrice,
  ProductTitle,
  ProductInfo,
  Button,
} from "@/styled-components/styled-components";

const getSingleData = async (id: number) => {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

const Page = async ({ params }: { params: { id: number } }) => {
  const data: productData = await getSingleData(params.id);
  return (
    <DetailPageRoot>
      <div>
        <img alt={data.title} src={data.image} />
      </div>
      <ProductInfo>
        <div>
          <ProductTitle>{data.title}</ProductTitle>
          <ProductPrice>{`$ ${data.price}`}</ProductPrice>
          <p>{data.description}</p>
        </div>
        <Button>장바구니추가</Button>
      </ProductInfo>
    </DetailPageRoot>
  );
};

export default Page;
