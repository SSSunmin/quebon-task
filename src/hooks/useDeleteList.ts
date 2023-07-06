import { CartInfo, CartProps, SelectProduct } from "@/RecoilState";
import { useRecoilState } from "recoil";

const useDeleteList = () => {
  const [shoppingBasket, setShoppingBasket] = useRecoilState(CartInfo);
  const [selected, setselected] = useRecoilState(SelectProduct);

  const DeleteShoppingBasket = (id: number[]) => {
    const newList: CartProps[] = [];
    shoppingBasket.map((data) => {
      if (id.indexOf(data.id) === -1) {
        newList.push(data);
      }
    });

    setShoppingBasket(newList);
    setselected([]);
  };
  return DeleteShoppingBasket;
};

export default useDeleteList;
