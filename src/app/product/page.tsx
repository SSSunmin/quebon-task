import ProductCard from "@/components/ProductCard";

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
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        padding: "80px 0px",
        boxSizing: "border-box",
        backgroundColor: "lightgray",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 250px)",
          gap: "20px",
        }}
      >
        {data.map((list) => (
          <ProductCard key={list.id} {...list} />
        ))}
      </div>
    </div>
  );
};
export default Product;
