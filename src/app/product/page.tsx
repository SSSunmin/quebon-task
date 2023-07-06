import ProductCard from "@/components/ProductCard";
import { FlexDiv, GridDiv } from "@/styled-components/styled-components";

export interface productData {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

const getData = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

const Product = async () => {
  const data: productData[] = await getData();

  return (
    <FlexDiv
      style={{
        backgroundColor: "lightgray",
      }}
    >
      <GridDiv>
        {data.map((list) => (
          <ProductCard key={list.id} {...list} />
        ))}
      </GridDiv>
    </FlexDiv>
  );
};
export default Product;
