import { CartInfo, CartProps } from "@/RecoilState";
import { useRecoilState } from "recoil";

const useDeleteList = () => {
  const [shoppingBasket, setShoppingBasket] = useRecoilState(CartInfo);

  const DeleteShoppingBasket = (id: number[]) => {
    const newList: CartProps[] = [];
    shoppingBasket.map((data) => {
      id.map((d) => (d !== data.id ? newList.push(data) : ""));
    });

    setShoppingBasket(newList);
  };
  return DeleteShoppingBasket;
};

export default useDeleteList;
