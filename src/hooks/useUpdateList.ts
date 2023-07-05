import { CartInfo, CartProps } from "@/RecoilState";
import { productData } from "@/app/product/page";
import { useRecoilState } from "recoil";

const replaceItemAtIndex = (
  arr: CartProps[],
  index: number,
  newValue: CartProps
) => {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
};

interface Props {
  data: productData | CartProps;
  amount: number;
  isShoppingBasket: boolean;
}

const useUpdateList = () => {
  const [shoppingBasket, setShoppingBasket] = useRecoilState(CartInfo);

  const UpdateShoppingBasket = ({ data, amount, isShoppingBasket }: Props) => {
    const index = shoppingBasket.findIndex((list) => data.id === list.id);
    if (index === -1) {
      setShoppingBasket([
        {
          id: data.id,
          title: data.title,
          price: data.price,
          amount: amount,
          image: data.image,
        },
        ...shoppingBasket,
      ]);
    } else {
      const newList = replaceItemAtIndex(shoppingBasket, index, {
        id: data.id,
        title: data.title,
        price: data.price,
        amount: isShoppingBasket
          ? amount
          : shoppingBasket[index].amount + amount,
        image: data.image,
      });
      setShoppingBasket(newList);
    }
  };

  return UpdateShoppingBasket;
};
export default useUpdateList;
