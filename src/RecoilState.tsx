import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";
export interface CartProps {
  id: number;
  title: string;
  price: number;
  amount: number;
  image: string;
}

const localStorage =
  typeof window !== "undefined" ? window.localStorage : undefined;

const { persistAtom } = recoilPersist({
  key: "shoppingBasketList",
  storage: localStorage,
  converter: JSON,
});

export const SelectProduct = atom<number[]>({
  key: "SelectProduct",
  default: [],
  effects: [
    ({ onSet }) => {
      onSet((newdate) => {
        console.log("SelectProduct", newdate);
      });
    },
  ],
});

export const CartInfo = atom<CartProps[]>({
  key: "CartInfo",
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const TotlaCartPrice = selector({
  key: "TotlaCartPrice",
  get: ({ get }) => {
    const cartList = get(CartInfo);
    const Selected = get(SelectProduct);
    let TotalPrice = 0;
    cartList.map((list, index) => {
      if (Selected.indexOf(list.id) !== -1) {
        TotalPrice += list.price * list.amount;
      }
    });
    return TotalPrice.toFixed(2);
  },
});
